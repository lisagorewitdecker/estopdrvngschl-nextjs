const escape = require('shell-quote').quote
const { ESLint } = require('eslint')

const eslint = new ESLint()
const isWin = process.platform === 'win32'
const escapeFilename = (filename) =>
  isWin ? JSON.stringify(filename) : escape([filename])

module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    const escapedFileNames = filenames
      .map(escapeFilename)
      .join(' ')
    return [
      `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames
        .filter((file) => !eslint.isPathIgnored(file))
        .map(escapeFilename)
        .join(' ')}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    const escapedFileNames = filenames
      .map(escapeFilename)
      .join(' ')
    return [
      `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
    ]
  },
}
