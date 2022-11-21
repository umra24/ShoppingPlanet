import React from 'react';
import './ecommerce.css';
import Linechart from '../components/Linechart';
import Chartsheader from '../components/Chartsheader';
import Header  from '../components/Header';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-md line ">
    <Header category="Chart" title="Inflation Rate" />
    <div className="w-full">
      <Linechart />
    </div>
  </div>
);

export default Line;