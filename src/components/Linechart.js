import React from 'react'
import { ChartComponent, SeriesCollectionDirective, LineSeries, SeriesDirective, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../data/dummy';

const Linechart = () => {
    return (
        <ChartComponent
            id="line-chart"
            height='420px'
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: { width: 0 } }}>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) =>
                    <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Linechart