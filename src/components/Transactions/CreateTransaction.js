import { Form, Modal, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ArrowRight, Link1 } from 'iconsax-react'
import CustomInput from '../../components/General/CustomInput'
import { usePoster } from '../../hooks/poster'
import { endpoints } from '../../utils/helperVariables'
import CustomTextarea from '../General/CustomTextarea'
import { useState } from 'react'

const CreateTransaction = ({ visible, onClose }) => {

    const [step, setStep] = useState('description')
    const [emails, setEmails] = useState([])

    const { mutate, isLoading } = usePoster(endpoints.CREATE_TRANSACTION, 'Transaction created successfully', [], continueProcess)
    const { mutate: mutate2, isLoading: isLoading2 } = usePoster(endpoints.SEND_TRANSACTION_LINK, 'Transaction successfully', [], onClose)
    const [createTransaction] = Form.useForm()

    const submitTransaction = (email) => {
        createTransaction.validateFields().then(values => {
            step === 'description' ? mutate(values) : mutate2({ email, transaction_link: '/transactions' })
        })
    }

    function continueProcess(data) {
        // console.log(data)
        setStep('final')
    }

    function handleEmailSearch(email) {
        setEmails(prev => [...prev, email])
    }

    const props = step !== 'description' ? {
        bodyStyle: { background: '#E6E6E6', paddingLeft: '0', paddingRight: '0' }
    } : {}

    return (
        <Modal
            centered
            visible={visible}
            onCancel={onClose}
            footer={null}
            {...props}
            closable={false}>
            {
                step === 'description' ?
                    <Form form={createTransaction}>
                        <h4 className='font-medium text-black text-2xl pb-[39px]'>Transaction Info</h4>
                        <CustomInput item={{ name: 'amount', label: 'Amount', type: 'number', required: true }} />
                        <CustomTextarea name='description' label='Description' valMessage='Field cannot be empty' />
                        <button onClick={submitTransaction} disabled={isLoading} className='bg-[#F3724F] rounded text-white px-[32px] py-[16px] font-semibold text-base w-fit mx-auto block'>
                            {
                                isLoading ?
                                    <div className='flex items-center gap-2'>
                                        <span>Loading</span>
                                        <Spin indicator={
                                            <LoadingOutlined
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontSize: 24,
                                                }}
                                                spin
                                            />} />
                                    </div> :
                                    <div className='flex items-center gap-2'>
                                        <span>Continue</span>
                                        <ArrowRight />
                                    </div>
                            }
                        </button>
                    </Form> :
                    <Form form={createTransaction} className='h-96 relative'>
                        <div className='px-5'>
                            <h4 className='font-medium text-black text-2xl pb-[39px]'>Create Transaction</h4>

                            <div className='w-full'>
                                <div className='relative flex items-center gap-2'>
                                    <input
                                        onChange={e => handleEmailSearch({ email: 'helarijackson@gmail.com', full_name: 'Helari Jackson T.' })}
                                        className=' bg-transparent border-black border-opacity-30 border rounded-[4px] w-full px-3 py-4 text-xs focus:outline-none focus:border-[1px] focus:border-black focus:border-opacity-30 focus:border-opacity-30 placeholder:text-[#C9C8C6]'
                                        placeholder='Enter recipient email' />
                                    {
                                        emails?.length > 0 &&
                                        <div className='absolute top-16 bg-white w-full px-3 py-4 rounded-md flex items-center justify-between'>
                                            <div className='flex items-center gap-[12px]'>
                                                <img src={`/images/avatar2.png`} className='h-[50px] w-[50px] rounded-full' alt='vev' />
                                                <div>
                                                    <h4 className='font-semibold text-base text-black opacity-60'>{emails[0]?.full_name}</h4>
                                                    <h5 className='text-sm text-black opacity-60'>{emails[0]?.email}</h5>
                                                </div>
                                            </div>
                                            <button onClick={() => submitTransaction(emails[0]?.email)} disabled={isLoading2} className='bg-[#F3724F] rounded text-white px-[30px] py-[15px] text-base'>
                                                {
                                                    isLoading2 ?
                                                        <div className='flex items-center gap-2'>
                                                            <span>Loading</span>
                                                            <Spin indicator={
                                                                <LoadingOutlined
                                                                    style={{
                                                                        color: '#FFFFFF',
                                                                        fontSize: 24,
                                                                    }}
                                                                    spin
                                                                />} />
                                                        </div> :
                                                        <div>Send</div>
                                                }
                                            </button>
                                        </div>
                                    }
                                    {isLoading && <Spin indicator={<LoadingOutlined style={{ color: '#D71E0E', fontSize: 24 }} spin />} />}
                                </div>
                            </div>

                        </div>
                        <div className='absolute w-full bottom-0 border-t border-black border-opacity-20 pt-5'>
                            <div className='flex items-center justify-center'>
                                <button className='bg-[#F3724F] rounded text-white px-[32px] py-[16px] text-base'>
                                    Share link
                                </button>
                                <button className='text-[#F3724F] px-[32px] py-[16px] text-base flex items-center gap-2'>
                                    <Link1 className='rotate-45' />
                                    <span>Copy link</span>
                                </button>
                            </div>
                        </div>
                    </Form>
            }
        </Modal>
    )
}

export default CreateTransaction