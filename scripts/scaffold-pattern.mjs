import * as p from '@clack/prompts';
import fs from 'node:fs';
import path from 'node:path';

// The root is the current working directory
const REPO_ROOT = process.cwd();

// UI directory
const UI_PACKAGE_SRC = path.join(REPO_ROOT, 'packages', 'ui', 'src');

// Navi App Data
const NAVI_APP_ROOT = path.join(REPO_ROOT, 'apps', 'navi', 'src');
const PATTERN_DATA_DIR = path.join(NAVI_APP_ROOT, 'data', 'patternData');
const PATTERN_DOCS_DIR = path.join(NAVI_APP_ROOT, 'data', 'patternMarkdown');

async function main() {
  p.intro('🧪 Navi Pattern Scaffolder');

  // https://bomb.sh/docs/clack/packages/prompts/#group
  const project = await p.group(
    {
      // Pattern name
      patternName: () =>
        p.text({
          message: 'Enter the Pattern Name (PascalCase):',
          placeholder: 'MyPattern',
          validate: (value) => {
            if (!value) return 'Name is required!';
            if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
              return 'Must use PascalCase (e.g. ButtonGroup) and match your component name.';
            }
          },
        }),

      // Pattern type
      type: ({ results }) =>
        p.select({
          message: `Select the component framework for ${results.patternName}`,
          initialValue: 'astro',
          options: [
            {
              value: 'astro',
              label: 'astro',
            },
            {
              value: 'tsx',
              label: 'tsx',
            },
            {
              value: 'jsx',
              label: 'jsx',
            },
          ],
        }),

      // Pattern template
      includeTemplates: ({ results }) =>
        p.confirm({
          message: `Create the folder/template for the component? (e.g. /${results.patternName}/${results.patternName}.${results.type})`,
          initialValue: true,
        }), 

      // Is the component interactive?
      interactive: () =>
        p.confirm({
          message:
            'Is this an interactive pattern? (Required for React hooks, state, or click events in Astro)',
          initialValue: false,
        }),

      // Pattern category
      category: ({ results }) =>
        p.select({
          message: `Choose the category to add ${results.patternName} in`,
          initialValue: 'component',
          options: [
            {
              value: 'components',
              label: 'Component',
            },
            {
              value: 'regions',
              label: 'Region',
            },
            {
              value: 'pages',
              label: 'Page',
            },
          ],
        }),

      // Pattern status
      status: ({ results }) =>
        p.select({
          message: `What is the status of the ${results.patternName}?`,
          initialValue: 'wip',
          options: [
            {
              value: 'live',
              label: 'Live',
            },
            {
              value: 'wip',
              label: 'WIP',
            },
          ],
        }),

      // Pattern variants
      hasVariants: () =>
        p.confirm({
          message: 'Does this pattern have variants?',
          initialValue: false,
        }),

      // If it has variants let's create a list
      variantList: ({ results }) => {
        if (results.hasVariants) {
          return p.text({
            message: 'List the variants in lowercase (separated by commas)',
            placeholder: 'primary, secondary, primary-ghost, secondary-ghost',
            validate: (value) => {
              if (!value) return 'Please list at least one variant or cancel';

              // Grab the items from the variants list
              const items = value
                .split(',')
                .map((v) => v.trim()) // Trim whitespace and make lowercase
                .filter(Boolean); // Remove empty strings

              // Check against only allowing lowercase letters and hyphens
              const invalidFormat = items.some((item) => !/^[a-z-]+$/.test(item));

              if (invalidFormat) {
                return 'Each variant must be lowercase letters or hyphens only (no spaces or special chars).';
              }
            },
          });
        }
      },

      // Pattern docs
      includeDocs: () =>
        p.confirm({
          message: 'Create a markdown file for documentation?',
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.');
        process.exit(0);
      },
    }
  );

  // Check if any variants were provided. If they did, transform the string into a clean array.
  const variants = project.variantList
    ? project.variantList
        .split(',')
        .map((v) => v.trim()) // Trim whitespace and make lowercase
        .filter(Boolean) // Remove empty strings
    : [];

  let variantsSection = '';

  if (variants.length > 0) {
    // Map each variant string (e.g. 'primary') into a formatted code block string
    const entries = variants
      .map((v) => {
        return `    { 
      ${v}: { 
        // Use for slot-based content
        // children: 'Content goes here',
        variant: '${v}', 
        previewBG: '' 
      } 
    }`;
      })
      .join(',\n'); // Separate each variant object with a comma and a newline

    // Wrap the entries in the 'variants' array syntax.
    variantsSection = `,\n  variants: [\n${entries}\n  ]`;
  }

  // Define a template string that mimics the component configuration file.
  const fileContent = `import ${project.patternName} from '@repo/ui/${project.patternName}';

export default {
  component: ${project.patternName},
  type: '${project.type}',
  interactive: ${project.interactive},
  category: '${project.category}',
  status: '${project.status}',
  keyLinks: [
    {
      label: '',
      url: ''
    },
  ],
  default: {
    // Use for slot-based content
    // children: 'Content goes here',
  }${variantsSection}
}  
  `.trim();

  // Calculate the target path for the patternData
  const targetPath = path.join(PATTERN_DATA_DIR, `${project.patternName}.js`);

  // Calculate the target path for the patternMarkdown
  const docsTargetPath = path.join(PATTERN_DOCS_DIR, `${project.patternName}.md`);

  // Calculate the target path for the UI component
  const componentFolder = path.join(UI_PACKAGE_SRC, `${project.category}`, project.patternName);
  const componentFilePath = path.join(componentFolder, `${project.patternName}.${project.type}`);

  //console.log(componentFolder, componentFilePath);

  // Define all paths that need to be checked
  const filesToCheck = [targetPath, componentFilePath];
  if (project.includeDocs) filesToCheck.push(docsTargetPath);

  // Find any files that already exist
  const existingFiles = filesToCheck.filter((f) => fs.existsSync(f));

  // Bail out if needed
  if (existingFiles.length > 0) {
    p.cancel(`Aborting! The following file(s) already exist:\n ${existingFiles.join('\n')}`);
    process.exit(0);
  }

  // Create the file at targetPath using the generated fileContent string for pattern data.
  fs.writeFileSync(targetPath, fileContent, 'utf-8');

  // If docs are being included
  if (project.includeDocs) {
    // Generate Markdown table rows for each variant
    const variantRows = variants
      .map((v) => `| \`${v}\` | Description for the ${v} variant. |`)
      .join('\n');

    // Conditionally build the 'Variants' section (if they exist)
    const variantSection =
      variants.length > 0
        ? `### Variants

| Variant           | Description                                  |
| ----------------- | -------------------------------------------- |
${variantRows}
    `
        : '';

    // The final markdown template
    const docsContent = `
The \`${project.patternName}\` component is used to [describe the primary purpose and context of the ${project.category}].

### Props

| Prop | Type | Required | Description |
| ---- | ---- | -------- | ----------- |

${variantSection}
    `.trim();

    // Create the file at docsTargetPath using the generated docsContent string for pattern markdown.
    fs.writeFileSync(docsTargetPath, docsContent, 'utf-8');
  }

  // Scaffolding for component templates (astro / tsx / jsx)
  if (project.includeTemplates) {
    const templates = {
      astro: `---
// ${project.patternName}.${project.type}
const { ...rest } = Astro.props;
---

<div {...rest}></div>
`,

      tsx: `// ${project.patternName}.${project.type}

export interface ${project.patternName}Props {
  [key: string]: any;
}

const ${project.patternName}: React.FC<${project.patternName}Props> = ({ ...rest }) => {
  return (
    <div {...rest}></div>
  );
};

export default ${project.patternName};
`,

      jsx: `// ${project.patternName}.${project.type}

export const ${project.patternName} = ({ ...rest }) => {
  return (
    <div {...rest}></div>
  );
};
`,
    };

    // Ensure the specific component folder exists!
    fs.mkdirSync(componentFolder, { recursive: true });

    // Create the main component file at componentFilePath using the generated template string.
    fs.writeFileSync(componentFilePath, templates[project.type], 'utf-8');  
  }

  // Generate the export line string
  const exportLine = `"./${project.patternName}": "./src/${project.category}/${project.patternName}/${project.patternName}.${project.type}"`;

  // The reminder to use if it's been chosen to generate the component templates
  const exportReminder = project.includeTemplates 
    ? `\n👉 Copy this into your ./packages/ui/package.json exports:\n${exportLine}`
    : '';

  // Generate a summary of the actions taken
  const summaryLines = [
    project.includeTemplates && `${project.type.toUpperCase()} Template: ${componentFilePath}`,
    `Navi Pattern data: ${targetPath}`,
    project.includeDocs && `Navi Pattern docs: ${docsTargetPath}`
  ].filter(Boolean);

  // https://bomb.sh/docs/clack/packages/prompts/#note
  p.note(
    `${summaryLines.join('\n')}${exportReminder}`,
    'Files created successfully!'
  );

  p.outro(`Scaffolding complete for ${project.patternName}! 🎉`);
}

main().catch(console.error);
