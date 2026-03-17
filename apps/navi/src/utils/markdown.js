import { Marked, Renderer } from 'marked';

/**
 * Processes a Markdown string into HTML.
 * @param {string | null | undefined} content - The raw Markdown string to be parsed.
 * @returns {string | null} The processed HTML string, or null if no content is provided.
 */
export function renderMarkdown(content) {
  if (!content) return null;

  const defaultRenderer = new Renderer();

  const marked = new Marked({
    renderer: {
      table(...args) {
        // Call the original renderer to get the standard table HTML.
        // https://github.com/markedjs/marked/discussions/3571#discussioncomment-11688191
        const rawTableHtml = defaultRenderer.table.apply(this, args);

        // Wrap with the overflow class and return.
        return `
          <div class="overflow" tabindex="0">
            ${rawTableHtml}
          </div>
        `;
      },
    },
  });

  return marked.parse(content);
}
