import React from 'react';

// Use import.meta.glob to find every UI jsx/tsx component.
// Returns {'../../../../packages/ui/src/components/ThemeToggle/ThemeToggle.jsx': [Object: null prototype] [Module] { default: [Getter] },}
const modules = import.meta.glob(
  [
    '../../../../packages/ui/src/components/**/*.{jsx,tsx}',
    '../../../../packages/ui/src/regions/**/*.{jsx,tsx}',
    '../../../../packages/ui/src/pages/**/*.{jsx,tsx}',
  ],
  { eager: true }
);

// Transform the 'modules' object into a 'componentMap'.
const componentMap = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    // Extract filename (e.g. 'ThemeToggle' from './../../../packages/src/components/ThemeToggle.tsx').
    const name = path.split('/').pop().replace(/\.(jsx|tsx)$/, '');

    // Return an entry pair: [ "ThemeToggle", [Function] ]
    return [name, mod.default];
  })
);

export default function HydratedWrapper({ componentName, props, children }) {
  // Component lookup e.g 'ThemeToggle' matches 'ThemeToggle'.
  const Component = componentMap[componentName];

  // Return error if not found.
  if (!Component) {
    return <div>Component "{componentName}" not found in UI Library</div>;
  }

  // Render the component.
  return <Component {...props}>{children}</Component>;
}
