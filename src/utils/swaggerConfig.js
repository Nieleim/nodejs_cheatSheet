const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a nodejs cheatSheet',
            title: 'NodeJS CheatSheet',
            version: '1.0.0',
        },
        host: `localhost:${process.env.PORT || 3000}`,
        basePath: '',
        produces: [
            'application/json',
            'application/xml',
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            },
        },
    },
    basedir: __dirname, // app absolute path
    files: ['../routage/**/*.js'], // Path to the API handle folder
};

module.exports = options;
