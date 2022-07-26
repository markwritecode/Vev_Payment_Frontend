import { ArrowCircleRight } from 'iconsax-react'
import { useFetcher } from '../../hooks/fetcher'
import { endpoints } from '../../utils/helperVariables'

const BeneficiaryCard = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)

    const list = data?.beneficiaries

    return (
        <div className='bg-white rounded-lg p-8 w-full'>
            <h4 className='font-medium text-lg lg:text-[28px]'>Beneficiary</h4>
            <div className='mt-8 space-y-5 max-h-[20rem] overflow-y-auto'>
                {
                    list?.length > 0 ? list.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img className='h-20' src={`/images/avatar${index + 1}.png`} alt='vev' />
                                    <div>
                                        <p className='font-semibold text-sm lg:text-base'>{item.name}</p>
                                        {/* <p>{item.action}</p> */}
                                    </div>
                                </div>
                                <div className='items-center gap-2 hidden lg:flex'>
                                    <ArrowCircleRight />
                                </div>
                            </div>
                        )
                    }) : 'You currently have no beneficiaries'
                }
            </div>
        </div>
    )
}

export default BeneficiaryCard