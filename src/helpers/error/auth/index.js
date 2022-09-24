/* eslint-disable import/prefer-default-export */
export const AuthError = [
    {
        err: 'auth/email-already-in-use',
        errName: 'Такой пользователь уже существует',
    },
    {
        err: 'auth/network-request-failed',
        errName: 'Сетевой сбой',
    },
    {
        err: 'auth/too-many-requests',
        errName: 'Слишком много запросов, повторите позже'
    },
    {
        err: 'auth/wrong-password',
        errName: 'Неправильно введенные данные'
    },
    {
        err: 'auth/user-not-found',
        errName: 'Неправильно введенные данные'
    }
]