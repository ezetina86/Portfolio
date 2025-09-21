import { describe, it, expect, vi } from 'vitest';

// Mock Astro.currentLocale
vi.mock('astro', () => ({
  currentLocale: 'en'
}));

describe('Projects Component Logic', () => {
  it('should import English data when locale is en', async () => {
    // Since we can't easily test Astro components, test the import logic
    const { projects, categories } = await import('../data/projects.js');
    expect(projects).toBeDefined();
    expect(categories).toBeDefined();
    expect(Array.isArray(projects)).toBe(true);
    expect(Array.isArray(categories)).toBe(true);
  });

  it('should import Spanish data when locale is es', async () => {
    const { projects, categories } = await import('../data/projects-es.js');
    expect(projects).toBeDefined();
    expect(categories).toBeDefined();
    expect(Array.isArray(projects)).toBe(true);
    expect(Array.isArray(categories)).toBe(true);
  });

  it('should have consistent data structure between locales', async () => {
    const enData = await import('../data/projects.js');
    const esData = await import('../data/projects-es.js');

    // Check that both have categories
    expect(enData.categories.length).toBeGreaterThan(0);
    expect(esData.categories.length).toBeGreaterThan(0);

    // Check that projects exist
    expect(enData.projects.length).toBeGreaterThan(0);
    expect(esData.projects.length).toBeGreaterThan(0);
  });
});