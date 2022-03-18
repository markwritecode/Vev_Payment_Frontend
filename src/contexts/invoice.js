import { createContext, useContext, useState } from 'react'

const invoiceContext = createContext()
export const useInvoice = () => useContext(invoiceContext)

const InvoiceContext = ({ children }) => {

    const [invoice, setInvoice] = useState()

    return (
        <invoiceContext.Provider value={[invoice, setInvoice]}>
            {children}
        </invoiceContext.Provider>
    )
}

export default InvoiceContext