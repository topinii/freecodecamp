## FreeCodeCamp Practice Workspace

A sandbox for JavaScript practice: challenges, labs, and workshops. Use Node.js to run files and ESLint/Prettier for code quality.

### Project Structure
- `challenges/`: short algorithm challenges
- `labs/`: small utilities and practice problems
- `workshops/`: longer guided exercises (e.g., `library-manager.js`)
- `eslint.config.js`: lint configuration
- `package.json`: dev tooling

### Requirements
- Node.js (LTS recommended)
- npm

### Setup
```bash
npm install
```

### Running Code
- Run any file with Node:
```bash
node challenges/phone-number-formatter.js
node labs/unique-sorted-union.js
node workshops/library-manager.js
```

### Linting & Formatting
- Lint all files:
```bash
npm run lint
```
- Format with Prettier:
```bash
npx prettier . --write
```