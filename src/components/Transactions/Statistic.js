import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement)

const Statistic = () => {

    const data = {
        datasets: [
            {
                data: [25, 25, 50],
                backgroundColor: [
                    '#fac450',
                    '#030302',
                    '#B8D3ED',
                ]
            },
        ],
    };

    const options = {
        cutout: '80%'
    }


    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <h3 className='text-xl font-semibold'>Statistic</h3>
                    <h6 className='opacity-40 font-medium text-xs'>24 Dec 2021 at 3:30 PM</h6>
                </div>
                <div className='px-3 py-2 font-medium bg-[#EAEBEC] rounded-lg'>
                    Show All
                </div>
            </div>
            <div className='space-y-4'>
                <h4 className='text-base font-medium'>Funding</h4>
                <div className='lg:grid lg:grid-cols-2 gap-20 w-full items-center'>
                    <div className='w-full'>
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className='space-y-6 flex items-center gap-4 lg:block'>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#fac450] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>$180</h4>
                                <h6 className='text-xs text-gray-400'>Shopping</h6>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#030302] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>$791</h4>
                                <h6 className='text-xs text-gray-400'>Food</h6>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#B8D3ED] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>$230</h4>
                                <h6 className='text-xs text-gray-400'>Living</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic