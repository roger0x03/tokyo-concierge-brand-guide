/**
 * @typedef {Object} PatternEntry
 * @property {Object} data - The exported data from the pattern's .js file.
 * @property {string} originalName - The original filename (e.g. "Button" instead of "button").
 */

/**
 * Normalises the globbed data files into a lookup whitelist.
 * @param {Record<string, { default: Object }>} dataFiles - The object returned from import.meta.glob.
 * @returns {Record<string, PatternEntry>} A map of lowercased filenames to their data and original names.
 */
export const getPatternWhitelist = (dataFiles) => {
  // Convert the object keys (file paths) into an array and iterate to build a new map.
  return Object.keys(dataFiles).reduce((acc, path) => {
    // Extract the filename from the path (e.g. "../../data/patternData/Button.js" -> "Button").
    const fileName = path.split('/').pop()?.replace('.js', '');

    if (fileName) {
      // Map the lowercase name to the original data and name.
      acc[fileName.toLowerCase()] = {
        data: dataFiles[path].default, // The actual exported component and props.
        originalName: fileName, // Preserved casing for Titles.
      };
    }

    // Return the accumulator for the next iteration.
    return acc;
  }, {});
};

/**
 * Extracts props for a specific variant from the pattern data.
 * @param {Object} patternData - The 'data' property from a PatternEntry.
 * @param {string} [variantKey='default'] - The key of the variant to look up.
 * @returns {Object} The props object for the requested variant (includes 'children').
 */
export const getVariantProps = (patternData, variantKey = 'default') => {
  // Initialise props with the base 'default' export from the data file.
  let props = patternData.default || {};

  // Check if we need a specific variant and ensure a variants array actually exists.
  if (variantKey && variantKey !== 'default' && Array.isArray(patternData.variants)) {
    // Search for the object where the variantKey exists as a property.
    const matchedVariantObj = patternData.variants.find((variant) => variant[variantKey]);

    if (matchedVariantObj) {
      props = matchedVariantObj[variantKey];
    }
  }

  // Return the final props object (either default or variant-specific).
  return props;
};
