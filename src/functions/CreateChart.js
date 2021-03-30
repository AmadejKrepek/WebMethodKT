import settings from "./ChartSettings.js";
import Chart from 'chart.js';

var ChartArray = [];
export default function createChart(chartId, values, labels, label, borderColor, type) {
    let bgColorArray = [];
    for (let i = 0; i < values.length; i++) {
        let r = Math.floor(Math.random() * 200);
        let g = Math.floor(Math.random() * 200);
        let b = Math.floor(Math.random() * 200);
        let c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        bgColorArray.push(c);
    }
    console.log(bgColorArray);
    var data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: values,
                borderColor: borderColor,
                pointRadius: 0,
                backgroundColor: bgColorArray,
            },
        ],
    };
    const ctx = document.getElementById(chartId);
    var myChart = new Chart(ctx, {
        type: type,
        data: data,
        options: settings.options,
    });
    ChartArray.push(myChart);
    return myChart;
}

export function updateChart() {
    return ChartArray;
}