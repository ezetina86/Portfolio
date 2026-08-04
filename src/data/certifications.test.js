import { describe, it, expect } from 'vitest';
import { certifications } from './certifications.js';
import { certifications as certificationsEs } from './certifications-es.js';

describe('Certifications Data', () => {
  it('should have valid structure for English certifications', () => {
    certifications.forEach(cert => {
      expect(cert).toHaveProperty('title');
      expect(cert).toHaveProperty('provider');
      expect(cert).toHaveProperty('level');
      expect(cert).toHaveProperty('image');
      expect(cert).toHaveProperty('url');
      expect(cert).toHaveProperty('description');
    });
  });

  it('should have valid structure for Spanish certifications', () => {
    certificationsEs.forEach(cert => {
      expect(cert).toHaveProperty('title');
      expect(cert).toHaveProperty('provider');
      expect(cert).toHaveProperty('level');
      expect(cert).toHaveProperty('image');
      expect(cert).toHaveProperty('url');
      expect(cert).toHaveProperty('description');
    });
  });

  it('should have updated URLs and expiration dates for GCP Data Engineer & Terraform', () => {
    const dataEng = certifications.find(c => c.title === 'GCP Professional Data Engineer');
    expect(dataEng).toBeDefined();
    expect(dataEng.url).toBe('https://www.credly.com/badges/b755f330-a3bc-40a2-bdf9-dde649f4c99d');
    expect(dataEng.expires).toBe('Sept 1, 2027');

    const terraform = certifications.find(c => c.title === 'HashiCorp Certified: Terraform Associate');
    expect(terraform).toBeDefined();
    expect(terraform.url).toBe('https://www.credly.com/badges/ae2c5476-4f42-413a-842d-3495e8ab6b81');
    expect(terraform.expires).toBe('Jul 24, 2028');
  });

  it('should match English and Spanish certification counts', () => {
    expect(certifications.length).toBe(certificationsEs.length);
  });
});
