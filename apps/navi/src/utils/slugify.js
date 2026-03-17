/**
 * Converts a string into a lowercase, dash-separated token.
 * @param {string} value - Human-readable name.
 */
export function slugify(value = '') {
  return value
    .toString()               // Ensure it's a string
    .toLowerCase()            // Normalize case
    .trim()                   // Remove whitespace from ends
    .replace(/\s+/g, '-')     // Replace spaces with dashes
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-');    // Replace multiple dashes with a single dash
}
