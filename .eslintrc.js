module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {'SwitchCase': 1}
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-console': [
            'warn'
        ],
        'react/prop-types': [
            'off'
        ]
    }
}