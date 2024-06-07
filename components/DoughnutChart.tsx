'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((cb) => cb.currentBalance);
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91f8'],
      },
    ],
    lables: accountNames,
  };
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          cutout: '40%',
          plugins: {
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
        }}
        height={100}
      />
    </div>
  );
};

export default DoughnutChart;
