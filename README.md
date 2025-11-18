# Amaze Media Solutions WP Framework

A production-grade WordPress parent theme framework including:
- Modern block theme structure
- Gulp + Sass build pipeline
- SCSS variables + mixins
- Accessible templates + patterns
- Modular PHP includes
- GPL-2.0 license

## Requirements

- WordPress 6.x+
- PHP 8.1+
- Node.js 18+ (for build pipeline)
- npm

## Installation

1. Place the theme folder in \`wp-content/themes/Amaze-Media-Solutions-WP-Framework\`
2. Run \`npm install\` inside the theme directory
3. Run \`npm run build\` for a one-time build, or \`npm run watch\` during development
4. Activate the theme from the WordPress admin

## Development Workflow

### Install dependencies

\`\`\bash
npm install
\`\`\`

### Build SCSS once

\`\`\bash
npm run build
\`\`\`

### Watch SCSS

\`\`\bash
npm run watch
\`\`\`

## File Structure

- \`assets/scss\` — source SCSS files
- \`assets/css\` — compiled CSS
- \`assets/js\` — frontend scripts
- \`inc\` — PHP includes (setup, enqueue, blocks)
- \`patterns\` — block patterns
- \`parts\` — template parts
- \`templates\` — block templates (index, single, page, etc.)

## License

GPL-2.0
