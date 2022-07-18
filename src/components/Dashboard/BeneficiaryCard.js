import { ArrowCircleRight } from 'iconsax-react'

const BeneficiaryCard = () => {

    const data = [
        { name: 'Halari Jackson T' },
        { name: 'Emmanuella Buzz' },
        { name: 'Babalola Joshua' },
        { name: 'Bosslady Clothings' },
    ]

    return (
        <div className='bg-white rounded-lg p-8'>
            <h4 className='font-bold text-2xl'>Beneficiary</h4>
            <div className='mt-8 space-y-5 max-h-[20rem] overflow-y-auto'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='h-20' src={`/images/avatar${index + 1}.png`} alt='vev' />
                                    <div>
                                        <p className='font-semibold text-base'>{item.name}</p>
                                        {/* <p>{item.action}</p> */}
                                    </div>
                                </div>
                                <div>
                                    <ArrowCircleRight />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BeneficiaryCard