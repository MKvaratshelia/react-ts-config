/* eslint-disable */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',

        // 'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'unused-imports'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': 'off',
        'no-undef': 'off',
        // quotes: 'off',
        // semi: 'off',
        'object-curly-newline': 'warn',

        'react/jsx-wrap-multilines': 'off',
        'linebreak-style': 'off',
        'no-trailing-spaces': 'off',
        'arrow-body-style': 'off',
        'jsx-quotes': 'off',
        'implicit-arrow-linebreak': 'off',
        'jsx-props-no-spreading': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-multi-assign': 'off',
        'operator-linebreak': 'warn',
        'react/no-array-index-key': 'off',
        'function-paren-newline': 'off',
        'unused-imports/no-unused-imports': 'error',

        'react/no-unstable-nested-components': 'warn',
    },
    globals: {},
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                // 'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
