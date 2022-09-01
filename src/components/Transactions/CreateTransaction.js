import { Form, Modal, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ArrowRight } from 'iconsax-react'
import CustomInput from '../../components/General/CustomInput'
import { usePoster } from '../../hooks/poster'
import { endpoints } from '../../utils/helperVariables'
import CustomTextarea from '../General/CustomTextarea'
import { useState } from 'react'
import { useFetcher } from '../../hooks/fetcher'
import ClipboardCopy from '../General/ClipboardCopy'
import { currencyFormatter, dateFormatter } from '../../utils/helperFunctions'

const CreateTransaction = ({ visible, onClose, step: _step, currentTransaction }) => {

    const [step, setStep] = useState(_step || 'description')
    const [search, setSearch] = useState('')
    const [transaction, setTransaction] = useState(currentTransaction || '')

    const { mutate, isLoading } = usePoster(endpoints.CREATE_TRANSACTION, 'Transaction created successfully', [], continueProcess)
    const { mutate: mutate2, isLoading: isLoading2 } = usePoster(endpoints.SEND_TRANSACTION, 'Transaction successfully', [], onClose)
    const [createTransaction] = Form.useForm()
    const { data, isLoading: isLoadingUsers } = useFetcher(search && `${endpoints.USER_SEARCH}/${search}`)

    const submitTransaction = (email) => {
        if (step === 'description') createTransaction.validateFields().then(values => mutate(values))
        else {
            mutate2({
                email,
                transaction_link: `https://vev.getyournin.com/transactions/${transaction?.reference_number}`,
                reference_number: transaction?.reference_number
            })
        }

    }

    function continueProcess(data) {
        setTransaction(data?.transaction)
        setStep('final')
    }

    const props = step !== 'description' ? {
        bodyStyle: { background: '#E6E6E6', paddingLeft: '0', paddingRight: '0' }
    } : {}

    const emails = data?.email_name

    const menu = [
        { title: 'Details', value: transaction?.description },
        { title: 'Amount', value: `₦ ${currencyFormatter(transaction?.amount)}` },
        { title: 'Time', value: dateFormatter(transaction?.created_at) },
        { title: 'Email', value: transaction?.owner }
    ]

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
                    <Form form={createTransaction}>
                        <div className='px-5 py-5'>
                            {transaction?.status === 'pending' && <h4 className='font-medium text-black text-2xl pb-[29px]'>Create Transaction</h4>}

                            <div className='w-full'>
                                <div className='relative flex items-center gap-2'>
                                    {
                                        transaction?.status === 'pending' &&
                                        <input
                                            value={search}
                                            type='email'
                                            required
                                            onChange={e => setSearch(e.target.value)}
                                            className=' bg-transparent border-black border-opacity-30 border rounded-[4px] w-full px-3 py-4 text-xs focus:outline-none focus:border-[1px] focus:border-black focus:border-opacity-30 placeholder:text-[#C9C8C6]'
                                            placeholder='Enter recipient email'
                                        />
                                    }
                                    {
                                        emails?.length > 0 &&
                                        <div className='absolute top-16 bg-white w-full px-3 py-4 rounded-md flex items-center justify-between'>
                                            <div className='flex items-center gap-[12px]'>
                                                <img src={`/images/avatar2.png`} className='h-[50px] w-[50px] rounded-full' alt='vev' />
                                                <div>
                                                    <h4 className='font-semibold text-base text-black opacity-60'>{`${emails[0]?.first_name} ${emails[0]?.last_name}`}</h4>
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
                                    {isLoadingUsers && <Spin indicator={<LoadingOutlined style={{ color: '#D71E0E', fontSize: 24 }} spin />} />}
                                </div>
                            </div>

                            <div className={`flex items-center ${transaction.status === 'pending' ? 'pt-5' : ''} justify-between`}>
                                <h4 className='font-bold text-xl'>Transactions Details</h4>
                                <button className=' capitalize border rounded-md text-[#FC8906] border-[#FC8906] p-1'>{transaction.status}</button>
                            </div>
                            <hr className='border-opacity-30 border-black mt-[6px]' />
                            <div className='pt-[30px] space-y-[23px]'>
                                {
                                    menu.map(item => {
                                        return (
                                            <div key={item.title} className='flex items-center gap-4 justify-between'>
                                                <h4 className='uppercase font-semibold'>{item.title}:</h4>
                                                <h5 className='truncate'>{item.value}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className='w-full border-t border-black border-opacity-20 pt-5'>
                            <div className='sm:flex items-center text-center justify-center'>
                                <button className='bg-[#F3724F] rounded text-white px-[32px] py-[16px] text-base'>
                                    Share link
                                </button>
                                <ClipboardCopy copyText={`https://vev.getyournin.com/transactions/${transaction?.reference_number}`} />
                            </div>
                        </div>
                    </Form>
            }
        </Modal>
    )
}

export default CreateTransaction