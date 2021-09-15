module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'no-useless-constructor': ['off'],
        indent: ['error', 4],
        'import/no-unresolved': ['off'],
        'import/extensions': ['off'],
        'eol-last': ['off'],
        'comma-dangle': ['off'],
        'import/prefer-default-export': ['off']
    }
};
