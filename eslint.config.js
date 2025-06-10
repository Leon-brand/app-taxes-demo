import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Reglas útiles
      'no-unused-vars': ['warn', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        caughtErrors: 'none',
      }],
      'no-extra-semi': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'eol-last': ['warn', 'always'],
      'semi': ['warn', 'never'],
      'quotes': ['warn', 'single', { avoidEscape: true }],
      'indent': ['warn', 2, { SwitchCase: 1 }],
      'space-before-blocks': ['warn', 'always'],
      'keyword-spacing': ['warn', { before: true, after: true }],
      'comma-dangle': ['warn', 'only-multiline'],
      'no-trailing-spaces': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      // Fuerza líneas vacías entre bloques lógicos
      'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
      // Desactiva lo innecesario
      'no-console': 'off',
      'no-undef': 'off',
      'one-var': 'off',
      'one-var-declaration-per-line': 'off',
      //desactiva error de React en JSX moderno
      'react/react-in-jsx-scope': 'off',
    },
  },
]
