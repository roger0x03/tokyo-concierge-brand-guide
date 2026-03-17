# Tokyo Concierge Brand Guidelines 

You can host this guideline wherever you like as this system builds a static HTML, CSS and JavaScript website. 

[Download the ZIP archive here](https://github.com/roger0x03/tokyo-concierge-brand-guide/blob/main/archive/dist.zip)

Tip: this links to the GitHub location. If you hit cmd+shift+s on your keyboard, it will trigger a download.

## Getting Started

These instructions will help you set up the project locally.

## Prerequisites

- Node.js (>=22)
- Yarn (>=1.22.22)

## Installation

1. Clone the repository:
    ```
   git clone https://github.com/Set-Creative-Studio/navi.git
   cd navi
   ```
2. Install dependencies:
    ```
   yarn install
   ```
3. Set up Git hooks:
    ```
    yarn prepare
    ```

## Usage

### Running the development server

To start the development server for all apps and packages, run:

```
yarn dev
```
### Building the project

To build all apps and packages, run:

```
yarn build
```

### Linting and Formatting

To lint the codebase:

```
yarn lint
```
To format the codebase:

```
yarn format
```
## CLI Scaffolder

To ensure files are created in the correct directories with the required metadata, always use the automated scaffolder rather than creating files manually.

### Usage

Run the following command from the root:

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
