import { XIcon } from '@heroicons/react/solid'
import { Drawer, Form, notification } from 'antd'
import { useState } from 'react'
import { useInvoice } from '../../contexts/invoice'
import useHandleScreenWidth from '../../hooks/useHandleScreenWidth'
import CompleteInvoice from './CompleteInvoice'
import InvoiceForm from './InvoiceForm'
import PreviewInvoice from './PreviewInvoice'

const CreateInvoice = ({ visible, handleCloseDrawer }) => {

    const [showPreview, setShowPreview] = useState(false)
    const [step, setStep] = useState(1)
    const [invoice, setInvoice] = useInvoice()
    const [invoiceForm] = Form.useForm()

    const width = useHandleScreenWidth()

    const handleShowPreview = () => {
        invoiceForm.validateFields().then(values => {
            if (invoice.items.length > 0) {
                setInvoice(prev => {
                    return { ...prev, ...values }
                })
                setShowPreview(true)
            } else {
                notification.warning({ message: 'Items list empty', description: 'Click the "Add item" button to add item(s)' })
            }
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    const handleClosePreview = () => setShowPreview(false)

    const incrementStep = () => setStep(previousStep => previousStep + 1)
    const decrementStep = () => setStep(previousStep => previousStep - 1)

    const handleFinish = () => {
        invoiceForm.validateFields().then(values => {
            if (invoice.items.length > 0) {
                setInvoice(prev => {
                    return { ...prev, ...values }
                })
                incrementStep()
            } else {
                notification.warning({ message: 'Items list cannot be empty', description: 'Click the "Add item" button to add item(s)' })
            }
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    const handlePay = () => {
        notification.success({
            message: 'Successful',
            description: 'Invoice posted successfully'
        })
    }

    const getCurrentPage = () => {
        switch (step) {
            case 1:
                return <InvoiceForm invoiceForm={invoiceForm} />
            case 2:
                return <CompleteInvoice incrementStep={incrementStep} decrementStep={decrementStep} />
            default:
                return <InvoiceForm />
        }
    }

    return (
        <Drawer
            visible={visible}
            size='large'
            width={width <= 500 ? '100%' : width <= 700 ? '80%' : width <= 1000 ? '70%' : width <= 1200 ? '50%' : width <= 1400 ? '40%' : '30%'}
            onClose={handleCloseDrawer}
            closable={false}
            footer={
                <div className='flex items-center justify-between'>
                    <p onClick={handleShowPreview} className='text-[#1EAAE7] cursor-pointer'>PREVIEW</p>
                    <div className='space-x-3'>
                        {step > 1 && <button onClick={decrementStep} className='border-gray-400 border-[1px] text-gray-500 px-3 py-1 rounded-sm'>PREVIOUS</button>}
                        <button onClick={step === 1 ? handleFinish : handlePay} className='bg-[#1EAAE7] text-white px-3 py-1 rounded-sm'>
                            {step === 1 ? 'NEXT' : 'SEND'}
                        </button>
                    </div>
                </div>
            }
            footerStyle={{ padding: '30px' }}
        >
            <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-lg text-gray-500 font-medium'>Create new invoice</h4>
                    <XIcon onClick={handleCloseDrawer} className='h-5 w-5 text-gray-500 font-semibold cursor-pointer' />
                </div>
                <div className='flex items-center justify-between'>
                    <h5 className='text-xl font-medium text-gray-500'>#A78KMFS</h5>
                    <p className='text-[#1EAAE7]'>COPY PAYMENT LINK</p>
                </div>

                <section>
                    {getCurrentPage()}
                </section>

            </div>

            <PreviewInvoice showPreview={showPreview} handleClosePreview={handleClosePreview} />
        </Drawer>

    )
}

export default CreateInvoice