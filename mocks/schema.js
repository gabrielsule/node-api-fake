const schema = {
    reports: {
        type: 'array',
        minItems: 5,
        maxItems: 10,
        items: {
            id: {
                type: 'integer',
                unique: true,
                minimum: 1,
                maximum: 1000,
            },
            title: {
                enum: ['titulo 1', 'titulo 2', 'titulo 3'],
            },
            logo: '../images/batman.png'
        },
    },
}

module.exports = schema;

