import settings from "./ChartSettings.js";
import Chart from 'chart.js';

var ChartArray = [];
export default function createChart(chartId, values, labels, label, borderColor, type) {
    var data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: values,
                fill: true,
                borderColor: borderColor,
                pointRadius: 0,
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