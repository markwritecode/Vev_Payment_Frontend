import { Add } from 'iconsax-react'
import { useState } from 'react'
import CreateTransaction from './CreateTransaction'

const BeneficiariesCard = () => {

    const list = ['Tinaobi@gmail.com', 'Peter2sure@yahoo.com', 'chikamba@gmail.com', 'jeffanthony33@gmail.com']

    const [visible, setVisible] = useState(false)

    const toggleCreateTransaction = () => setVisible(prev => !prev)

    return (
        <div className='bg-white md:bg-[#F0EBFB] md:shadow-md pt-[60px] md:pt-0 pb-10 md:pb-0'>
            <h4 className='text-[24px] font-bold text-[#000000] md:text-opacity-50 pl-[27px] md:p-[18px]'>Beneficiaries</h4>
            <div className='pl-[36px] pt-[18px] pb-[46px] flex items-start gap-10 overflow-auto'>
                {/* <div className='bg-white rounded-full p-[26px] flex items-center justify-center mx-auto cursor-pointer' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                    <Add className='h-[48px] w-[48px] text-[#49454E]' />
                </div> */}
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className='text-center mx-auto'>
                                <img src={`/images/avatar${index + 1}.png`} className='rounded-full mx-auto h-[50px] w-[50px] md:h-[100px] md:w-[100px]' alt='vev' />
                                <h5 className='text-[8px] md:text-sm mt-[5px]'>{item}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={toggleCreateTransaction} className='flex md:hidden items-center gap-2 bg-[#F3724F] px-[10px] py-[5px] rounded-[5px] text-white ml-[36px]'>
                <span className='text-[15px] md:text-[20px] font-bold'>Create Transaction</span>
                <Add variant='Bold' className='h-[18px] md:h-[28px' />
            </button>
            {visible && <CreateTransaction visible={visible} onClose={toggleCreateTransaction} />}
        </div>
    )
}

export default BeneficiariesCard