# BMDIB Website

Website for BMDIB, built with Astro, TypeScript, and Bootstrap.

## Tech Stack

- **Framework:** Astro
- **Language:** TypeScript
- **Styling:** Bootstrap + custom CSS
- **Content:** Markdown
- **Source Control:** GitHub

## Prerequisites

- Node.js 24
- npm
- [nvm](https://github.com/nvm-sh/nvm) for managing the Node.js version

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd website
```

### 2. Use the project's Node.js version

This project uses Node.js 24. If you have nvm installed:

```bash
nvm use
```

If Node.js 24 is not installed yet:

```bash
nvm install
nvm use
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:4321
```

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Display available Astro CLI commands |

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── pages/           # Page components and routes
│   └── styles/          # Global and custom styles
├── .nvmrc               # Project Node.js version
├── astro.config.mjs     # Astro configuration
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Locked dependency versions
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Development

Create a feature branch before making changes:

```bash
git switch main
git pull origin main
git switch -c feature/<issue-number>-<description>
```

Make and test your changes locally before opening a pull request.

The production build can be verified locally with:

```bash
npm run build
npm run preview
```

## License

See [LICENSE.txt](LICENSE.txt) for license information.
