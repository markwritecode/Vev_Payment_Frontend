import { Add } from 'iconsax-react'

const BeneficiariesCard = () => {

    const list = ['Tinaobi@gmail.com', 'Peter2sure@yahoo.com', 'chikamba@gmail.com', 'jeffanthony33@gmail.com']

    return (
        <div className='bg-[#F0EBFB]' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>
            <h4 className='text-[24px] font-bold text-[#000000] text-opacity-50 p-[18px]'>Beneficiaries</h4>
            <div className='px-[64px] pt-[18px] pb-[46px] flex items-start gap-10 overflow-auto'>
                <div className='bg-white rounded-full p-[26px] flex items-center justify-center mx-auto cursor-pointer' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                    <Add className='h-[48px] w-[48px] text-[#49454E]' />
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className='text-center mx-auto'>
                                <img src={`/images/avatar${index + 1}.png`} className='rounded-full mx-auto h-[100px] w-[100px]' alt='vev' />
                                <h5 className='text-sm mt-[5px]'>{item}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BeneficiariesCard