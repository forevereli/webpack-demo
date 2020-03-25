module.exports = {
    'root': true,
    'extends': 'airbnb',
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/prop-types': [
            'error',
            {
                'skipUndeclared': true
            }
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [
                    '.js',
                    '.jsx'
                ]
            }
        ],
        'object-curly-newline': [
            'error',
            {
                'ObjectExpression': {
                    'minProperties': 5,
                    'multiline': true,
                    'consistent': true
                },
                'ObjectPattern': {
                    'minProperties': 5,
                    'multiline': true,
                    'consistent': true
                },
                'ImportDeclaration': {
                    'minProperties': 5,
                    'multiline': true,
                    'consistent': true
                },
                'ExportDeclaration': {
                    'minProperties': 5,
                    'multiline': true,
                    'consistent': true
                }
            }
        ]
    },
    'globals': {
        'document': false
    }
};
