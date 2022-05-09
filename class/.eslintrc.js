module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'off',
            'single'
        ],
        'semi': [
            'off',
            'always'
        ],
        'no-mixed-spaces-and-tabs': [ 'off' , 'always'],
        'prefer-const' : ['off'],
        '@typescript-eslint/no-inferrable-types': [   
            'off'
        ],
        "@typescript-eslint/no-empty-interface": ['off','always']
    }
};
