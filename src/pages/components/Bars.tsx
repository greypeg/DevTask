import * as React from 'react';
import {Bar} from 'react-chartjs-2';
import { userGroth } from '..';
export interface IBarsProps {
    chartData: any;
}

export function Bars (props: IBarsProps) {
const {chartData} = props;
  return (
    <div>
      <Bar data={chartData}/>
    </div>
  );
}
