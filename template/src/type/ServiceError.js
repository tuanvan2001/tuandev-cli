export class ServiceError {
    constructor({errorMessage, extraData = null}) {
        this.isError = true
        this.errorMessage = errorMessage
        this.extraData = extraData
    }
}

export const isError = ({errorMessage, extraData = null}) => {
    return {
        errorMessage: errorMessage,
        extraData: extraData,
    }
}