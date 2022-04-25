export const useFetchLocalStorageData = () => {
    const token = localStorage.getItem('ichor-token-key')
    const user = JSON.parse(localStorage.getItem('ichor-user-data'))

    return { token, user }
}