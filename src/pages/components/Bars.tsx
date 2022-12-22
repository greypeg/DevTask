import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';
export interface IBarsProps {
  chartData: any[];
}
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale,annotationPlugin);

export function Bars(props: IBarsProps) {
  const { chartData } = props;
  const dataToPass = {
    labels: chartData?.map((item: any) => item?.year),
    datasets: [
      {
        label: 'Users Gained',
        data: chartData?.map((item) => item?.userGain),
        backgroundColor: [
          'rgb(255, 205, 86)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: 'Users Lost',
        data: chartData?.map((item) => item?.userLoss),
        backgroundColor: [
          'rgb(54, 162, 235)',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ]
  }
  const options = {
    responsive: true,
  }
  return (
    <div className='bg-white-800'>
      <Bar data={dataToPass} options={options} />
    </div>
  );
}
