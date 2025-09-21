import { describe, it, expect } from 'vitest';
import { projects, categories } from './projects.js';

describe('Projects Data', () => {
  it('should have valid project structure', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('category');
      expect(project).toHaveProperty('image');
      expect(project).toHaveProperty('tags');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('repoUrl');
      expect(project).toHaveProperty('liveUrl');
      expect(Array.isArray(project.tags)).toBe(true);
      expect(typeof project.title).toBe('string');
      expect(typeof project.description).toBe('string');
    });
  });

  it('should include all categories', () => {
    expect(categories).toContain('All');
    expect(categories.length).toBeGreaterThan(1);
  });

  it('should have unique project titles', () => {
    const titles = projects.map(p => p.title);
    const uniqueTitles = [...new Set(titles)];
    expect(uniqueTitles.length).toBe(titles.length);
  });

  it('should have valid category values', () => {
    projects.forEach(project => {
      expect(categories).toContain(project.category);
    });
  });
});