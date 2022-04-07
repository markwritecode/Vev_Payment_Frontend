export function currencyFormatter(amt) {
    const Formatter = Intl.NumberFormat()
    return Formatter.format(amt)
}

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
}

export const formatDateNum = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
}

export const formatDateAndTime = (date) => {
    const options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
}