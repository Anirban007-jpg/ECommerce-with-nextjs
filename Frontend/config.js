import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? '' : 'http://localhost:5005';
export const API_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = publicRuntimeConfig.PRODUCTION ? '' : publicRuntimeConfig.DOMAIN_DEVELOPMENT