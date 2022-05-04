import { AiOutlineCalendar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

export const options = {
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
            }
        }
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['9', '11', '13', '15', '17', '19', '21', '23', '25', '27']

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 150, 200, 300, 250, 350, 500, 450, 400, 180],
            backgroundColor: '#ffb84b',
        }
    ],
}

const ActivitySummary = () => {
    return (
        <div className='p-5 space-y-8'>
            <div className='flex items-center justify-between'>
                <h4 className='opacity-50 text-xs'>Activity Graph</h4>
                <h5 className='text-sm font-semibold'>$186k</h5>
            </div>
            <div>
                <div className='text-right'>
                    <h5 className='text-gray-400 text-xs'>BETWEEN SEP 9 - 27</h5>
                </div>
                <Bar options={options} data={data} />
            </div>
            <div className='space-y-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#eceafd] p-2 rounded-lg'>
                            <AiOutlineCalendar className='h-5 w-5 text-[#6e52e3]' />
                        </div>
                        <h4 className='opacity-50'>Monthly Plan</h4>
                    </div>
                    <BiChevronRight className='h-5 w-5' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#eceafd] p-2 rounded-lg'>
                            <FiSettings className='h-5 w-5 text-[#6e52e3]' />
                        </div>
                        <h4 className='opacity-50'>Settings</h4>
                    </div>
                    <BiChevronRight className='h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

export default ActivitySummary