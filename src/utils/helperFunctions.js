export function currencyFormatter(amt) {
    const Formatter = Intl.NumberFormat()
    return Formatter.format(amt)
}

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
}