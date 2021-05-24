const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'SEOBLOG',
        API_DEVELOPMENT: 'http://localhost:5005',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000'
    }
})