module.exports = {
    root: true,
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
        },
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html',
        'react'
    ],
    // add your custom rules here
    'rules': {
        "no-new": 0,
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'no-useless-escape': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
        "no-extra-bind": 0,
        "no-trailing-spaces": [2, {
            "skipBlankLines": true
        }]
    }
}
