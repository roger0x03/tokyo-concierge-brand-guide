import prettier from 'prettier';
import { experimental_AstroContainer } from 'astro/container';
import reactRenderer from '@astrojs/react/server.js';

/**
 * Renders an Astro component to a formatted HTML string for usage documentation.
 * @param {import('astro').AstroComponentFactory} Component - The Astro component to render.
 * @param {Record<string, any>} [props={}] - Props to pass to the component.
 * @param {string} [children=''] - Optional children content to render inside the component.
 * @returns {Promise<string>} A formatted HTML string representing the rendered component.
 */
export async function renderComponentHtml(Component, props = {}, children = '') {
  // https://docs.astro.build/en/reference/container-reference/
  const container = await experimental_AstroContainer.create();
  // https://docs.astro.build/en/reference/container-reference/#adding-a-renderer-manually
  container.addServerRenderer({ renderer: reactRenderer });

  const result = await container.renderToString(Component, {
    partial: true,
    props,
    slots: { default: children },
  });

  // When rendering JSX components, Astro wraps slot content in <astro-static-slot></astro-static-slot>, for documentation purposes strip these out.
  const cleanHtml = result.replace(/<\/?astro-static-slot>/g, '');

  return await prettier.format(cleanHtml, { parser: 'html' });
}