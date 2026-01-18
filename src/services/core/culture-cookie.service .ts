import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CultureCookieService {
  private readonly CULTURE_COOKIE_NAME = '.AspNetCore.Culture';
  private readonly DEFAULT_CULTURE = 'en';

  constructor(private cookieService: CookieService) {}

  getCurrentCulture(): string {
    if (!this.cookieService.check(this.CULTURE_COOKIE_NAME)) {
      this.setDefaultCulture();
      return this.DEFAULT_CULTURE;
    }

    const cookieValue = this.cookieService.get(this.CULTURE_COOKIE_NAME);
    return this.parseCultureFromCookie(cookieValue);
  }

  private parseCultureFromCookie(cookieValue: string): string {
    try {
      // Decode URL encoded value
      const decodedValue = decodeURIComponent(cookieValue);
      
      // Parse the uic parameter from format: c=en-GB|uic=ar
      const parts = decodedValue.split('|');
      
      for (const part of parts) {
        if (part.startsWith('uic=')) {
          const cultureCode = part.substring(4); // Remove 'uic='
          return this.normalizeCultureCode(cultureCode);
        }
      }
      
      // If uic not found, check for c parameter
      for (const part of parts) {
        if (part.startsWith('c=')) {
          const cultureCode = part.substring(2).split('-')[0]; // Get language part
          return this.normalizeCultureCode(cultureCode);
        }
      }
    } catch (error) {
      console.error('Error parsing culture cookie:', error);
    }
    
    return this.DEFAULT_CULTURE;
  }

  /**
   * Normalize culture code to 'ar', 'en', or 'fr'
   */
  private normalizeCultureCode(cultureCode: string): string {
    const normalized = cultureCode.toLowerCase().split('-')[0];
    
    // Return only supported cultures, otherwise default
    if (['ar', 'en', 'fr'].includes(normalized)) {
      return normalized;
    }
    
    return this.DEFAULT_CULTURE;
  }

  /**
   * Set the default culture cookie
   */
  setDefaultCulture(): void {
    this.setCultureCookie(this.DEFAULT_CULTURE);
  }

  /**
   * Set a specific culture cookie
   */
  setCultureCookie(culture: 'ar' | 'en' | 'fr'): void {
    const cookieValue = `c=${culture}-${culture.toUpperCase()}|uic=${culture}`;
    const encodedValue = encodeURIComponent(cookieValue);
    
    // Set cookie with appropriate options
    this.cookieService.set(
      this.CULTURE_COOKIE_NAME,
      encodedValue,
      365, // Expires in 365 days
      '/', // Path
      undefined, // Domain (current domain)
      false, // Secure flag
      'Lax' // SameSite
    );
  }

  /**
   * Check if culture cookie exists
   */
  hasCultureCookie(): boolean {
    return this.cookieService.check(this.CULTURE_COOKIE_NAME);
  }

  /**
   * Remove the culture cookie
   */
  removeCultureCookie(): void {
    this.cookieService.delete(this.CULTURE_COOKIE_NAME, '/');
  }
}