//local
const localEnv = {
    default_url: process.env.EXPO_PUBLIC_LOCAL_URL
}


export function getEnv() {
    if (process.env.EXPO_PUBLIC_ENV == 'local') {
        return localEnv
    }
}