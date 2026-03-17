# Navi Pattern Library

A component-driven pattern library built with [Astro](https://astro.build), designed to support reusable design system components across projects in the monorepo.

## Features

- **Dynamic pattern rendering**  
  Patterns are loaded dynamically based on the URL (e.g. `/pattern/${patternName}/`).

- **Multi-Framework Support**
  Handles `.astro`, `.tsx`, and `.jsx` components using a single, consistent structure for all pattern data.

- **Client-side hydration for interactive patterns**  
  The `interactive` flag in the pattern data enables client-side hydration specifically for `jsx` and `tsx` components.

- **Per-pattern documentation in Markdown**  
  Each pattern can include documentation written in markdown, against each variant or as a supplementary content for the pattern as a whole.
  
- **Variants with props**  
  Define multiple named variants per pattern, each with its own props and children. Props are shown alongside the rendered output and corresponding usage method.

- **Auto-generated navigation**  
  Patterns are grouped by category and rendered as a structured sidebar navigation.

- **Fullscreen view for isolated previews**  
  View any pattern or variant in isolation for focused review, testing, or embedding.

- **CLI Generator (Scaffolder)**  
  To maintain consistency and speed up development, use the Navi Pattern Scaffolder. This ensures all required files are created in the correct directories with the proper naming conventions.

---

## Example Structure

```txt
.src/
└── data/
    ├── patternData/
    │   └── MyPattern.js
    ├── patternMarkdown/
    │    └── MyPattern.md
    └── naviConfig.js
```

## Site Configuration

Basic setup and metadata for the pattern library is defined in `src/data/naviConfig.js`.

This includes:

- The client name (used for labeling or contextual UI)
- A link to the main website
- Stylesheets to load for the patterns that sit outside of those bundled with each component
- Optional quick links for the CSS and Design tokens

```js
// .src/data/naviConfig.js
export const navi = {
  title: 'Pattern Library',
  config: {
    client: 'Set Studio',
    website: 'https://set.studio/',
    styles: ['/css/global.css', '/css/theme.css'],
    componentImportPath: '@repo/ui/',
    showToolbar: true, // Show or hide the toolbar containing component theme toggle
    quickLinks: [
      {
        heading: 'Design tokens',
        links: [
          { href: '/colors/', label: 'Colour' },
          { href: '/typography/', label: 'Typography' },
          { href: '/spacing/', label: 'Spacing' },
        ],
      },
      {
        heading: 'CSS',
        links: [
          { href: '/css-compositions/', label: 'Layout Compositions' },
          { href: '/css-utilities/', label: 'Core Utilities' },
        ],
      },
    ],
  },
};
```

## Pattern Data File Format

Each pattern requires a data file added to `.src/data/patternData/${patternName}.js`:

```js
import MyPattern from '@repo/ui/MyPattern';

export default {
  component: MyPattern,
  type: 'astro', // 'astro' | 'jsx' | 'tsx'
   interactive: false, // true | false
  category: 'components', // 'components' | 'regions' | 'pages'
  status: 'wip', // 'wip' | 'live'
  keyLinks: [
    {
      label: 'CSS file',
      url: '@repo/css/blocks/my-pattern'
    },
  ],
  default: {
    // Use for slot-based content
    // children: 'Content goes here',
  },
  variants: [
    {
      primary: {
        // Use for slot-based content
        // children: 'Content goes here',
        previewBG: ''  // Override for the fullscreen preview background color
      }
    },
  ],
};
```

You can also optionally provide:

- `.src/data/patternData/${patternName}.md` → supplementary long-form markdown content

## Pattern Markdown File Format

```md
The `MyPattern` component is used to [describe the primary purpose and context of the components].

### Props

| Prop                    | Type     | Required | Description                                          |
| ----------------------- | -------- | -------- | ---------------------------------------------------- |
| `variant`               | `string` | ✗        | Visual style of the pattern. See variant list below. |

### Variants

| Variant   | Description                          |
| --------- | ------------------------------------ |
| `primary` | Description for the primary variant. |
```

## Rendering Logic

Each pattern is dynamically rendered via a `[component].astro` route.

This route:

- Parses the component name from the URL
- Loads the corresponding data and documentation files
- Renders the component with default props and any defined variants
- Selective hydration for `jsx`/`tsx` components if `interactive: true`
- Displays associated key links, props, usage markup and ready-to-use html (`astro` components only)
- Provides a **fullscreen view** for each component and variant, allowing the UI to be seen in isolation

## Fullscreen View

Each pattern can also be viewed in fullscreen using query parameters like `?pattern=button&variant=primary`.

This stripped-down view renders the pattern in isolation, without navigation or layout chrome. It's ideal for focused inspection or sharing isolated examples.


## Development

Install dependencies from the root of the **monorepo**:

```bash
yarn install
```

Run the dev server:

```bash
yarn dev
```

Navigate to: http://localhost:6006/

## CLI Scaffolder

To ensure files are created in the correct directories with the required metadata, always use the automated scaffolder rather than creating files manually.

### Usage

Run the following command from the **monorepo** root:

```bash
yarn scaffold
```

Prompt Options

The CLI will guide you through the following configuration:

1. **Pattern Name:** The PascalCase name of your pattern (e.g. `MyPattern`).

3. **Framework Type:** Select between `astro`, `jsx` or `tsx`.

4. **Template Creation:** Choose whether to generate the UI component boilerplate in the monorepo `./packages/ui` directory.

5. **Interactive:** For `jsx` or `tsx` components decide if the pattern requires hydration (React hooks, state, or click events).

6. **Category:** Assign the pattern to 'components', 'regions', or 'pages'.

7. **Status:** Choose component status from 'wip' or 'live'.

8. **Variants:** Define an initial list of variant keys for your data file.

9. **Docs:** Choose whether to include associated markdown docs.
