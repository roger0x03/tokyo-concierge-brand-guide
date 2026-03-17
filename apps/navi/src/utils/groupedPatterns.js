/**
 * @typedef {Object} Pattern
 * @property {string} label
 * @property {string} href
 */

/**
 * Transforms raw glob imports into a structured, sorted, and
 * formatted navigation object grouped by category.
 * @param {Object<string, *>} dataFiles - The raw glob import data.
 * @returns {{ orderedCategories: string[], componentsByCategory: Object<string, Pattern[]> }}
 */
export function getGroupedPatterns(dataFiles) {
  const componentsByCategory = {};

  for (const path in dataFiles) {
    const data = dataFiles[path].default;

    // Isolate the filename to use as a human-readable label e.g "../data/patternData/Button.js" -> "Button"
    const name = path.split('/').pop()?.replace('.js', '') || '';

    // Default to 'Uncategorised' if no category is defined in the file
    const raw = data.category || 'Uncategorised';

    // Format Category name e.g "components" -> "Components" (Capitalise first letter and swap hyphens for spaces)
    const categoryLabel = raw.charAt(0).toUpperCase() + raw.slice(1).replace('-', ' ');

    // Ensure the category array exists before pushing to it
    if (!componentsByCategory[categoryLabel]) {
      componentsByCategory[categoryLabel] = [];
    }

    // Build the clean link object for the sidebar
    componentsByCategory[categoryLabel].push({
      label: name,
      href: `/pattern/${name.toLowerCase()}/`,
    });
  }

  // Sort categories A-Z, but force 'Uncategorised' to the bottom of the list
  const orderedCategories = Object.keys(componentsByCategory).sort((a, b) => {
    if (a === 'Uncategorised') return 1;
    if (b === 'Uncategorised') return -1;
    return a.localeCompare(b);
  });

  return { orderedCategories, componentsByCategory };
}