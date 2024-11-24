import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['.node_modules/*'],
    rules: {
      '@typescript-eslint/no-explicit-any': [
        'error',
        { ignoreRestArgs: true }, // Allows `any` in rest args
      ],
      'no-unused-vars': 'error',
    },
  },
];
