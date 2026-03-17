/**
 * Filters a design token object to remove metadata keys and returns an array of entries.
 * @param {Object.<string, any>} data - The design token object (e.g. textSizes.size).
 * @returns {[string, any][]} An array of [key, value] pairs, excluding keys starting with '$'.
 */
export const getValidEntries = (data) => {
  return Object.entries(data || {}).filter(([key]) => !key.startsWith('$'));
};
