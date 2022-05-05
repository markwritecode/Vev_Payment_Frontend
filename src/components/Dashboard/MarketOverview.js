import { BiChevronDown } from 'react-icons/bi'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
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
    elements: {
        point: {
            pointBackgroundColor: 'black',
            pointBorderColor: '#e9effb',
            pointBorderWidth: 5,
            radius: 10,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun']

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [20, 30, 48, 42, 38, 45, 48],
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.5
        }
    ],
};

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
            <div>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default MarketOverview