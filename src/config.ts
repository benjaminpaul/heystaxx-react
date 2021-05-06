export interface IConfig {
    heystaxxApiUri: string
}

const getConfig = (): IConfig => {
    return {
        heystaxxApiUri: "https://dev-heystaxxapi.azurewebsites.net"
    }
}

export default getConfig();