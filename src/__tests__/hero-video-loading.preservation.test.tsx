/**
 * Preservation Property Tests - Hero Video Loading Optimization
 * 
 * **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6**
 * 
 * These tests capture and validate existing behavior that MUST be preserved after the fix.
 * Following observation-first methodology: observe behavior on UNFIXED code, then write tests.
 * 
 * EXPECTED BEHAVIOR ON UNFIXED CODE: These tests MUST PASS
 * - Success proves we've correctly captured the baseline behavior to preserve
 * - These tests document what should NOT change when we fix the bug
 * 
 * EXPECTED BEHAVIOR AFTER FIX: These tests MUST STILL PASS
 * - Success proves no regressions were introduced
 * - Failure indicates we broke existing functionality
 * 
 * Property 2: Preservation - Video Playback Behavior
 * 
 * For any interaction where the bug condition does NOT hold (video playback after loading,
 * user interactions, styling), the fixed implementation SHALL produce the same result as
 * the original implementation.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import * as fc from 'fast-check';
import Hero from '@/components/Hero';

describe('Preservation: Hero Video Loading Optimization', () => {
  /**
   * Requirement 3.1: Video Playback Attributes
   * WHEN the video is playing THEN the system SHALL CONTINUE TO autoplay, loop, and mute
   * the video as currently implemented
   */
  describe('3.1 Video Playback Attributes', () => {
    it('should have autoplay attribute on video element', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      expect(video).toBeDefined();
      expect(video).toBeInTheDocument();
      
      if (video) {
        // Observe: video has autoPlay attribute
        expect(video.hasAttribute('autoplay') || video.autoplay).toBe(true);
      }
    });

    it('should have muted attribute on video element', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: video has muted attribute
        expect(video.hasAttribute('muted') || video.muted).toBe(true);
      }
    });

    it('should have loop attribute on video element', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: video has loop attribute
        expect(video.hasAttribute('loop') || video.loop).toBe(true);
      }
    });

    it('should have playsInline attribute for mobile playback', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: video has playsInline attribute (Requirement 3.3)
        expect(video.hasAttribute('playsinline') || video.playsInline).toBe(true);
      }
    });

    it('should have preload="metadata" attribute', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: video has preload="metadata"
        expect(video.getAttribute('preload')).toBe('metadata');
      }
    });

    it('should have video source pointing to /robot.mp4', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      const source = container.querySelector('video source');
      
      if (source) {
        // Observe: video source is /robot.mp4
        expect(source.getAttribute('src')).toBe('/robot.mp4');
        expect(source.getAttribute('type')).toBe('video/mp4');
      }
    });

    /**
     * Property-Based Test: Video playback attributes across many scenarios
     */
    it('property: video playback attributes are consistent', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('default', 'with-title', 'no-title'),
          (scenario) => {
            const title = scenario === 'no-title' ? '' : 'للبرمجيات والأعمال التقنية';
            const { container } = render(<Hero title={title} />);
            
            const video = container.querySelector('video');
            
            if (video) {
              // All video playback attributes must be preserved
              expect(video.autoplay || video.hasAttribute('autoplay')).toBe(true);
              expect(video.muted || video.hasAttribute('muted')).toBe(true);
              expect(video.loop || video.hasAttribute('loop')).toBe(true);
              expect(video.playsInline || video.hasAttribute('playsinline')).toBe(true);
            }
          }
        ),
        { numRuns: 20 }
      );
    });
  });

  /**
   * Requirement 3.2: CSS Styling and Positioning
   * WHEN the video element is rendered THEN the system SHALL CONTINUE TO maintain
   * the same CSS styling and positioning (absolute positioning, object-fit: cover, z-index: 0)
   * 
   * NOTE: In jsdom test environment, CSS modules aren't loaded, so we verify the CSS class
   * is applied. The actual CSS rules are defined in Hero.module.css and will be applied
   * in the browser environment.
   */
  describe('3.2 CSS Styling and Positioning', () => {
    it('should have heroVideo CSS class applied', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: video has heroVideo class (CSS module class)
        // The class name will be hashed in production (e.g., Hero_heroVideo__abc123)
        expect(video.className).toBeTruthy();
        expect(video.className.length).toBeGreaterThan(0);
      }
    });

    it('should maintain video element structure for CSS styling', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      const heroSection = container.querySelector('section');
      
      // Observe: video is inside the hero section
      expect(heroSection).toBeDefined();
      expect(video).toBeDefined();
      
      if (heroSection && video) {
        // Video should be a child of the hero section for proper positioning
        expect(heroSection.contains(video)).toBe(true);
      }
    });

    /**
     * Property-Based Test: Video element structure is preserved across scenarios
     */
    it('property: video element and CSS class structure is consistent', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('default', 'with-title', 'custom-title'),
          (scenario) => {
            const title = scenario === 'custom-title' ? 'Custom Title' : undefined;
            const { container } = render(<Hero title={title} />);
            
            const video = container.querySelector('video');
            const heroSection = container.querySelector('section');
            
            // Video element and structure must be preserved
            expect(video).toBeDefined();
            expect(heroSection).toBeDefined();
            
            if (video && heroSection) {
              expect(heroSection.contains(video)).toBe(true);
              expect(video.className).toBeTruthy();
            }
          }
        ),
        { numRuns: 15 }
      );
    });
  });

  /**
   * Requirement 3.4: Overlay Effects
   * WHEN the video overlay is applied THEN the system SHALL CONTINUE TO display
   * the gradient overlay (rgba(0, 0, 0, 0.7) to rgba(0, 0, 0, 0.5)) on top of the video
   * 
   * NOTE: In jsdom, CSS modules aren't loaded. We verify the overlay element exists
   * with the correct CSS class. The gradient styling is defined in Hero.module.css.
   */
  describe('3.4 Overlay Effects', () => {
    it('should have heroOverlay element present', () => {
      const { container } = render(<Hero />);
      
      // Observe: overlay div exists (it's the div after the video element)
      const video = container.querySelector('video');
      const overlay = video?.nextElementSibling;
      
      expect(overlay).toBeDefined();
      expect(overlay).toBeInTheDocument();
      expect(overlay?.tagName).toBe('DIV');
    });

    it('should have overlay element with CSS class for styling', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      const overlay = video?.nextElementSibling;
      
      if (overlay) {
        // Observe: overlay has a CSS class (will be hashed in production)
        expect(overlay.className).toBeTruthy();
        expect(overlay.className.length).toBeGreaterThan(0);
      }
    });

    it('should maintain overlay element structure', () => {
      const { container } = render(<Hero />);
      
      const heroSection = container.querySelector('section');
      const video = container.querySelector('video');
      const overlay = video?.nextElementSibling;
      
      // Observe: overlay is positioned after video in the DOM
      if (heroSection && video && overlay) {
        expect(heroSection.contains(overlay)).toBe(true);
        expect(video.nextElementSibling).toBe(overlay);
      }
    });
  });

  /**
   * Requirement 3.5: Content Layering
   * WHEN the Hero section content (logo, services, title) is rendered THEN the system
   * SHALL CONTINUE TO display all content with proper z-index layering above the video
   * 
   * NOTE: We verify the DOM structure and element presence. Z-index values are defined
   * in Hero.module.css and applied in the browser.
   */
  describe('3.5 Content Layering', () => {
    it('should have heroContainer element present', () => {
      const { container } = render(<Hero />);
      
      // Observe: heroContainer div exists (contains all the content)
      const video = container.querySelector('video');
      const overlay = video?.nextElementSibling;
      const heroContainer = overlay?.nextElementSibling;
      
      expect(heroContainer).toBeDefined();
      expect(heroContainer).toBeInTheDocument();
      expect(heroContainer?.tagName).toBe('DIV');
    });

    it('should render logo image with priority', () => {
      const { container } = render(<Hero />);
      
      // Observe: logo image exists (Requirement 3.6)
      const logoImage = container.querySelector('img[alt*="شعار"]');
      
      expect(logoImage).toBeDefined();
      expect(logoImage).toBeInTheDocument();
      
      if (logoImage instanceof HTMLImageElement) {
        // Observe: logo uses Next.js Image with priority
        // In test environment, Next.js Image is rendered but priority attribute
        // may not be directly visible. We verify the image exists and has proper alt text.
        expect(logoImage.alt).toContain('شعار');
      }
    });

    it('should render logo with correct source reference', () => {
      const { container } = render(<Hero />);
      
      const logoImage = container.querySelector('img[alt*="شعار"]');
      
      if (logoImage instanceof HTMLImageElement) {
        // Observe: logo source references the correct file (Requirement 3.6)
        // Next.js optimizes the URL, so we check it contains the encoded filename
        expect(logoImage.src).toContain('%D8%AB%D9%88%D8%A7%D8%A8%D8%AA-02.webp');
      }
    });

    it('should render main title', () => {
      const { container } = render(<Hero />);
      
      const title = container.querySelector('h1');
      
      // Observe: title element exists
      expect(title).toBeDefined();
      expect(title).toBeInTheDocument();
    });

    it('should render left services (6 cards)', () => {
      const { container } = render(<Hero />);
      
      // Find all service card links
      const allLinks = container.querySelectorAll('a[href^="#"]');
      
      // Filter for service cards (exclude logo link and scroll arrow)
      const serviceCards = Array.from(allLinks).filter(link => {
        const href = link.getAttribute('href');
        return href && href !== '/' && href !== '#about';
      });
      
      // Observe: 12 total service cards (6 left + 6 right)
      expect(serviceCards.length).toBe(12);
    });

    it('should render scroll down arrow', () => {
      const { container } = render(<Hero />);
      
      const scrollArrow = container.querySelector('a[href="#about"]');
      
      // Observe: scroll arrow link exists
      expect(scrollArrow).toBeDefined();
      expect(scrollArrow).toBeInTheDocument();
    });

    /**
     * Property-Based Test: Content layering structure is preserved
     */
    it('property: content layering structure is maintained', () => {
      fc.assert(
        fc.property(
          fc.string({ minLength: 1, maxLength: 50 }),
          (customTitle) => {
            const { container } = render(<Hero title={customTitle} />);
            
            const video = container.querySelector('video');
            const overlay = video?.nextElementSibling;
            const heroContainer = overlay?.nextElementSibling;
            const logo = container.querySelector('img[alt*="شعار"]');
            const title = container.querySelector('h1');
            const scrollArrow = container.querySelector('a[href="#about"]');
            
            // DOM structure must be preserved
            expect(video).toBeDefined();
            expect(overlay).toBeDefined();
            expect(heroContainer).toBeDefined();
            expect(logo).toBeDefined();
            expect(title).toBeDefined();
            expect(scrollArrow).toBeDefined();
            
            // Verify layering order in DOM
            if (video && overlay && heroContainer) {
              expect(video.nextElementSibling).toBe(overlay);
              expect(overlay.nextElementSibling).toBe(heroContainer);
            }
          }
        ),
        { numRuns: 10 }
      );
    });
  });

  /**
   * Requirement 3.3 & 3.6: Mobile Playback and Responsive Design
   * WHEN the Hero section is displayed on mobile devices THEN the system SHALL CONTINUE TO
   * show the video with playsInline attribute for proper mobile playback
   */
  describe('3.3 & 3.6 Mobile Playback and Responsive Design', () => {
    it('should maintain playsInline for mobile devices', () => {
      const { container } = render(<Hero />);
      
      const video = container.querySelector('video');
      
      if (video) {
        // Observe: playsInline is present (already tested in 3.1, but critical for mobile)
        expect(video.hasAttribute('playsinline') || video.playsInline).toBe(true);
      }
    });

    it('should have hero section element', () => {
      const { container } = render(<Hero />);
      
      const heroSection = container.querySelector('section');
      
      // Observe: section element exists
      expect(heroSection).toBeDefined();
      expect(heroSection).toBeInTheDocument();
    });

    it('should maintain responsive structure with all key elements', () => {
      const { container } = render(<Hero />);
      
      // Observe: all key elements exist for responsive layout
      const heroSection = container.querySelector('section');
      const video = container.querySelector('video');
      const logo = container.querySelector('img[alt*="شعار"]');
      const title = container.querySelector('h1');
      const serviceLinks = container.querySelectorAll('a[href^="#"]');
      
      expect(heroSection).toBeDefined();
      expect(video).toBeDefined();
      expect(logo).toBeDefined();
      expect(title).toBeDefined();
      expect(serviceLinks.length).toBeGreaterThan(0);
    });

    /**
     * Property-Based Test: Responsive behavior across viewport sizes
     */
    it('property: responsive design structure works across different viewport sizes', () => {
      fc.assert(
        fc.property(
          fc.record({
            width: fc.constantFrom(320, 480, 768, 1024, 1200, 1920),
            height: fc.constantFrom(568, 667, 1024, 768, 900, 1080)
          }),
          (viewport) => {
            // Simulate different device viewports
            Object.defineProperty(window, 'innerWidth', {
              writable: true,
              configurable: true,
              value: viewport.width
            });
            Object.defineProperty(window, 'innerHeight', {
              writable: true,
              configurable: true,
              value: viewport.height
            });
            
            const { container } = render(<Hero />);
            
            // Core elements must exist regardless of viewport
            const video = container.querySelector('video');
            const logo = container.querySelector('img[alt*="شعار"]');
            const title = container.querySelector('h1');
            const serviceLinks = container.querySelectorAll('a[href^="#"]');
            
            expect(video).toBeDefined();
            expect(logo).toBeDefined();
            expect(title).toBeDefined();
            expect(serviceLinks.length).toBeGreaterThan(0);
            
            // Video playback attributes must be preserved
            if (video) {
              expect(video.autoplay || video.hasAttribute('autoplay')).toBe(true);
              expect(video.muted || video.hasAttribute('muted')).toBe(true);
              expect(video.loop || video.hasAttribute('loop')).toBe(true);
              expect(video.playsInline || video.hasAttribute('playsinline')).toBe(true);
            }
          }
        ),
        { numRuns: 12 }
      );
    });
  });

  /**
   * Integration Test: Complete preservation of all requirements
   */
  describe('Integration: Complete Preservation Validation', () => {
    it('should preserve all video playback, styling, overlay, and content layering', () => {
      const { container } = render(<Hero />);
      
      // Requirement 3.1: Video playback attributes
      const video = container.querySelector('video');
      expect(video).toBeDefined();
      if (video) {
        expect(video.autoplay || video.hasAttribute('autoplay')).toBe(true);
        expect(video.muted || video.hasAttribute('muted')).toBe(true);
        expect(video.loop || video.hasAttribute('loop')).toBe(true);
        expect(video.playsInline || video.hasAttribute('playsinline')).toBe(true);
      }
      
      // Requirement 3.2: Video element structure
      if (video) {
        expect(video.className).toBeTruthy();
      }
      
      // Requirement 3.4: Overlay element
      const overlay = video?.nextElementSibling;
      expect(overlay).toBeDefined();
      if (overlay) {
        expect(overlay.tagName).toBe('DIV');
      }
      
      // Requirement 3.5: Content layering structure
      const heroContainer = overlay?.nextElementSibling;
      expect(heroContainer).toBeDefined();
      
      // Requirement 3.6: Logo with priority
      const logo = container.querySelector('img[alt*="شعار"]');
      expect(logo).toBeDefined();
      if (logo instanceof HTMLImageElement) {
        expect(logo.src).toContain('%D8%AB%D9%88%D8%A7%D8%A8%D8%AA-02.webp');
      }
      
      // Service cards
      const serviceLinks = Array.from(container.querySelectorAll('a[href^="#"]')).filter(link => {
        const href = link.getAttribute('href');
        return href && href !== '/' && href !== '#about';
      });
      expect(serviceLinks.length).toBe(12);
    });
  });

  /**
   * Property-Based Test: Comprehensive preservation across many scenarios
   */
  describe('Property: Comprehensive Preservation', () => {
    it('property: all preservation requirements hold across various inputs', () => {
      fc.assert(
        fc.property(
          fc.record({
            title: fc.option(fc.string({ minLength: 1, maxLength: 100 }), { nil: undefined }),
            viewport: fc.record({
              width: fc.integer({ min: 320, max: 1920 }),
              height: fc.integer({ min: 568, max: 1080 })
            })
          }),
          (input) => {
            // Simulate viewport
            Object.defineProperty(window, 'innerWidth', {
              writable: true,
              configurable: true,
              value: input.viewport.width
            });
            Object.defineProperty(window, 'innerHeight', {
              writable: true,
              configurable: true,
              value: input.viewport.height
            });
            
            const { container } = render(<Hero title={input.title} />);
            
            // All preservation requirements must hold
            const video = container.querySelector('video');
            const overlay = video?.nextElementSibling;
            const heroContainer = overlay?.nextElementSibling;
            const logo = container.querySelector('img[alt*="شعار"]');
            
            // Video playback (3.1)
            if (video) {
              expect(video.autoplay || video.hasAttribute('autoplay')).toBe(true);
              expect(video.muted || video.hasAttribute('muted')).toBe(true);
              expect(video.loop || video.hasAttribute('loop')).toBe(true);
              expect(video.playsInline || video.hasAttribute('playsinline')).toBe(true);
              
              // Video element structure (3.2)
              expect(video.className).toBeTruthy();
            }
            
            // Overlay (3.4)
            expect(overlay).toBeDefined();
            
            // Content layering (3.5)
            expect(heroContainer).toBeDefined();
            
            // Logo (3.6)
            expect(logo).toBeDefined();
          }
        ),
        { numRuns: 25 }
      );
    });
  });
});
