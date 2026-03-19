/**
 * Helper functions for image path manipulation
 */

/**
 * Convert optimized image path to thumbnail version
 * @param imagePath - Original optimized image path (e.g., "/solar24h-otm/products/chair.avif")
 * @returns Thumbnail path (e.g., "/solar24h-otm/products/chair_thumb.avif")
 */
export function getThumbPath(imagePath: string): string {
  if (!imagePath) return imagePath;
  
  // Check if it's already a thumb image
  if (imagePath.includes('_thumb.')) {
    return imagePath;
  }
  
  // For optimized images in solar24h-otm folder
  if (imagePath.includes('/solar24h-otm/') && imagePath.endsWith('.avif')) {
    return imagePath.replace('.avif', '_thumb.avif');
  }
  
  // For original images in solar24h folder - convert to optimized thumb
  if (imagePath.includes('/solar24h/') && /\.(jpg|jpeg|png|webp)$/i.test(imagePath)) {
    const optimizedPath = imagePath
      .replace(/^\/solar24h\//, '/solar24h-otm/')
      .replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
    return optimizedPath.replace('.avif', '_thumb.avif');
  }
  
  // Return original path if it doesn't match expected patterns
  return imagePath;
}

/**
 * Convert original image path to optimized version
 * @param imagePath - Original image path (e.g., "/solar24h/products/chair.jpg")
 * @returns Optimized path (e.g., "/solar24h-otm/products/chair.avif")
 */
export function getOptimizedPath(imagePath: string): string {
  if (!imagePath) return imagePath;
  
  // Already optimized
  if (imagePath.includes('/solar24h-otm/') && imagePath.endsWith('.avif')) {
    return imagePath;
  }
  
  // Convert original to optimized
  if (imagePath.includes('/solar24h/') && /\.(jpg|jpeg|png|webp)$/i.test(imagePath)) {
    return imagePath
      .replace(/^\/solar24h\//, '/solar24h-otm/')
      .replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
  }
  
  // Return original path if it doesn't match expected patterns
  return imagePath;
} 