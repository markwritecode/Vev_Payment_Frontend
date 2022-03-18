export function currencyFormatter(amt) {
    const Formatter = Intl.NumberFormat()
    return Formatter.format(amt)
}