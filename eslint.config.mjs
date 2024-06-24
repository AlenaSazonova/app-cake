import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import arrayCallbackReturn from 'eslint-plugin-array-callback-return'; // добавлен импорт плагина

export default [
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        files: ['**/*.js', '**/*.jsx'],
        plugins: {
            react: react,
            'jsx-a11y': jsxA11y,
            'array-callback-return': arrayCallbackReturn, // добавлен плагин в список плагинов
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'array-callback-return': 'error', // исправлено правило array-callback-return
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
