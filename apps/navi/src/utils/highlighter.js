import { createHighlighter } from 'shiki';

let highlighterPromise = null;

/**
 * Highlights a string of code into formatted HTML using Shiki.
 * @param {string} code - The raw source code to be highlighted.
 * @param {string} [lang='javascript'] - The programming language for syntax highlighting.
 * @returns {Promise<string>} A Promise that resolves to a string of HTML with inline styles.
 */
export async function highlight(code, lang = 'javascript') {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark-high-contrast'],
      langs: ['javascript', 'html', 'css', 'astro', 'jsx', 'tsx'],
    });
  }

  const highlighter = await highlighterPromise;
  
  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark-high-contrast',
  });
}
