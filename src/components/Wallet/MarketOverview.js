import { BiChevronDown } from 'react-icons/bi'

const MarketOverview = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='font-medium text-base'>Market Overview</h3>
                    <h5 className='opacity-50 text-xs'>Prices value updates</h5>
                </div>
                <div className='rounded-lg px-3 py-2 flex items-center gap-3 border-[1px]'>
                    <span className='text-xs opacity-50'>Weekly (2020)</span>
                    <BiChevronDown />
                </div>
            </div>
            
        </div>
    )
}

export default MarketOverview