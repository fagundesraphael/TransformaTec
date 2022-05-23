class UserTypeError extends Error {
    constructor(message, name) {
        super(message)
        this.name = 'UserTypeError'
    }
}

const payload = '{ "type":"PJF" }'

try {
    const {
        type
    } = JSON.parse(payload)

    if (type === "PF" || type === "PJ") {
        console.log('Usuário válido')
    } else {
        //throw new UserTypeError('Tipo de usuário inválido')
        throw {
            name: 'Erro',
            message: 'Descrição do erro'
        }

    }

} catch (error) {
    console.log(error.name) // Output: CustomError
    console.log(error.message) // Output: Tipo de usuário inválido
}