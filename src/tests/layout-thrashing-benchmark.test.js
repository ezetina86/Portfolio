
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Certification Carousel Performance', () => {
  let accessCount = 0;
  let mockSlides = [];
  let updateCarouselFn;

  beforeEach(() => {
    accessCount = 0;
    mockSlides = [];

    // Mock DOM environment
    global.window = {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    };

    global.ResizeObserver = class ResizeObserver {
        constructor(callback) {
            this.callback = callback;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
        // Helper to trigger resize in tests
        trigger() {
            this.callback([], this);
        }
    };

    global.document = {
      addEventListener: vi.fn((event, callback) => {
        if (event === 'astro:page-load') {
             callback();
        }
      }),
      getElementById: vi.fn((id) => {
        if (id === 'certifications-data') return { textContent: '[]' };
        if (id === 'certification-modal') return {
            addEventListener: vi.fn(),
            querySelector: vi.fn(() => ({ addEventListener: vi.fn() })),
            classList: { remove: vi.fn() }
        };
        return null;
      }),
      querySelectorAll: vi.fn((selector) => {
        if (selector === '.certification-carousel-container') {
          return [{
            querySelectorAll: vi.fn((sel) => {
              if (sel === '.certification-slide') {
                 // Create mock slides with offsetWidth spy
                 const slides = [1, 2, 3].map(i => {
                    const slide = {
                        classList: { toggle: vi.fn(), add: vi.fn() },
                        style: {},
                        querySelector: vi.fn(() => ({ src: '', textContent: '', href: '' })),
                        addEventListener: vi.fn(),
                        parentElement: {
                            style: {},
                            addEventListener: vi.fn()
                        }
                    };
                    // Define offsetWidth with a getter to count accesses
                    Object.defineProperty(slide, 'offsetWidth', {
                        get: () => {
                            accessCount++;
                            return 300;
                        }
                    });
                    return slide;
                 });
                 mockSlides = slides;
                 return slides;
              }
              if (sel === '.certification-dot') return [];
              return [];
            }),
            querySelector: vi.fn((sel) => {
                if (sel === '.certification-progress') return { appendChild: vi.fn(), querySelectorAll: vi.fn(() => []) };
                return { addEventListener: vi.fn() };
            }),
            addEventListener: vi.fn(),
          }];
        }
        return [];
      }),
      createElement: vi.fn(() => ({ classList: { add: vi.fn() }, addEventListener: vi.fn() })),
    };

    // Mock Timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    delete global.window;
    delete global.document;
  });

  it('measures offsetWidth accesses during carousel updates', async () => {
    // Read the script
    const scriptPath = path.resolve(__dirname, '../scripts/certification-carousel.js');
    const code = fs.readFileSync(scriptPath, 'utf-8');

    // Execute the script
    // We wrap it in a function to avoid polluting global scope if using eval,
    // but here we just eval it.
    eval(code);

    // Initial load calls updateCarousel once
    // Access count should be at least 1 (for the first slide)
    const initialCount = accessCount;
    console.log('Initial access count:', initialCount);

    // Simulate time passing (3 seconds interval)
    // The script sets an interval of 3000ms
    vi.advanceTimersByTime(3000); // 1st interval
    vi.advanceTimersByTime(3000); // 2nd interval
    vi.advanceTimersByTime(3000); // 3rd interval

    console.log('Final access count:', accessCount);

    // With current implementation:
    // updateCarousel is called initially + 3 times.
    // Each time it accesses `slides[0]?.offsetWidth`.
    // So expected count is approx 4.

    // We return the count so we can assert on it or just log it for the "Measure" step
    return accessCount;
  });

  it('updates dimensions on resize', async () => {
     // Read the script
     const scriptPath = path.resolve(__dirname, '../scripts/certification-carousel.js');
     const code = fs.readFileSync(scriptPath, 'utf-8');

     // Mock ResizeObserver to capture the callback
     let resizeCallback;
     global.ResizeObserver = class ResizeObserver {
        constructor(callback) {
            resizeCallback = callback;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
     };

     // Execute the script
     eval(code);

     const initialCount = accessCount;
     expect(initialCount).toBeGreaterThan(0);

     // Trigger resize
     if (resizeCallback) {
         resizeCallback();
     }

     // Should have accessed offsetWidth again
     expect(accessCount).toBeGreaterThan(initialCount);
  });
});
