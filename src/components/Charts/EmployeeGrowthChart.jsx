import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useStateContext } from '../../contexts/ContextProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EmployeeGrowthChart = () => {
  const { currentMode, activeMenu } = useStateContext();
  
  const data = {
    labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 
             'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'],
    datasets: [
      {
        label: 'Total Employees',
        data: [450, 520, 580, 650, 720, 780, 850, 920, 950, 980, 990, 1000],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: ''
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: currentMode === 'Dark' ? '#374151' : '#e5e7eb',
          drawBorder: false
        },
        ticks: {
          color: currentMode === 'Dark' ? '#9ca3af' : '#4b5563',
          stepSize: 200
        }
      },
      x: {
        grid: {
          color: currentMode === 'Dark' ? '#374151' : '#e5e7eb',
          drawBorder: false
        },
        ticks: {
          color: currentMode === 'Dark' ? '#9ca3af' : '#4b5563',
          maxRotation: 45,
          minRotation: 45,
          autoSkip: !activeMenu,
          maxTicksLimit: activeMenu ? 12 : 6
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
        <Line data={data} options={options} />
    </div>
  );
};

export default EmployeeGrowthChart; 