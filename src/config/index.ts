import  production  from './production'
import development from './development'
import test from './test'

function getConfig(environment: string) {
    console.log(`Server running on ${environment} environment`)
    if (environment === 'development') {
        return development
    }else if (environment === 'production') {
        return production
    } else if(environment === 'test') {
        return test
    } else {
        return development
    }
}
export const config  = getConfig(process.env.NODE_ENV)