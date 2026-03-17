import { navi } from '@data/naviConfig';

/**
 * Generates a formatted string of a component's usage.
 * @param {string} name - The display name of the component (e.g. 'Footer').
 * @param {Record<string, any>} props - An object containing the component's properties.
 * @param {string} [children=''] - Optional content to be rendered between the tags
 * @param {boolean} [isAstro=false] - Whether to use Astro-style frontmatter.
 * @returns {string} - The formatted string.
 */
export function renderUsage(name, props, children = '', isAstro = false) {
  // Define the import line
  const importLine = `import ${name} from '${navi.config.componentImportPath}${name}';`;

  // Wrap the import based on the framework (e.g Astro uses the '---' fence).
  const header = isAstro 
    ? `---\n${importLine}\n---` 
    : importLine;

  // Convert object into array
  const propStrings = Object.entries(props).map(([key, value]) => {
  
  // Handle strings
  if (typeof value === 'string') {
    // Basic detection for markdown
    const isMarkdown = value.includes('`') || value.includes('[') || value.includes('#') || value.includes('*') || value.includes('_');

    if (isMarkdown) {
      // Escape any backticks already inside the string
      const escapedValue = value.replace(/`/g, '\\`');

      // Wrap the escaped string in curly braces and backticks
      return `${key}={\`${escapedValue}\`}`;
    }

    return `${key}='${value}'`;
  }

  // Handle Objects/Arrays
  const stringified = JSON.stringify(value);
    if (stringified) {
      const formatted = stringified
        // Add space after keys and remove double quotes from them (e.g. {text:"..."} -> {text: "..."}).
        .replace(/"([^"]+)":/g, '$1: ')
        // Add a space after every comma for readability.
        .replace(/,/g, ', ')
        // Add padding spaces inside curly braces.
        .replace(/{/g, '{ ')
        .replace(/}/g, ' }')
        // Cleanup cases where spaces shouldn't be.
        .replace(/\[\s{/g, '[{')
        .replace(/}\s]/g, '}]')
        // Swap double quotes for single quotes.
        .replace(/"/g, "'");

      return `${key}={${formatted}}`;
    }

    return `${key}={${value}}`;
  });

  // Combine all individual prop strings into one.
  const attributes = propStrings.join('\n  ').trim();
  
  // Formatting for determining if there are attributes, children etc.
  const openTag = attributes ? `<${name}\n  ${attributes}\n>` : `<${name}>`;
  const selfClosingTag = attributes ? `<${name}\n  ${attributes}\n/>` : `<${name} />`;

  const componentBody = children
    ? `${openTag}\n  ${children}\n</${name}>`
    : selfClosingTag;

  return `${header}\n\n${componentBody}`;
}