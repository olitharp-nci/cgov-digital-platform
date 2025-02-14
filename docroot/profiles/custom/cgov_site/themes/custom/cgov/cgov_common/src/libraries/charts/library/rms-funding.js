// <div style="min-width: 310px; height: 400px; margin: 0 auto;" id="NCI-Chart__rms-funding"></div>

const id = 'NCI-Chart__rms-funding';

function initChart(Chart) {
  new Chart(id, {
    chart: {
      type: 'NCI_bar'
    },
    title: { text: 'Extramural vs Intramural and RMS Funding' },
    subtitle: { text: 'Fiscal Years 2017 - 2021' },
    tooltip: {
      pointFormat: '<div><span style="color:{point.color}">\u25CF</span> {series.name}: </div><div>${point.y}</div>'
    },
    plotOptions: {
      series: {
        pointStart: 2017
      }
    },
    xAxis: [{
      type: 'category',
      showEmpty: false,
      title: { text: 'Fiscal Year' }
    }, {
      type: 'category',
      showEmpty: false,
      title: { text: 'Mechanism' }
    }],
    yAxis: {
      title: { text: 'Funding (Dollars in Millions)' }
    },
    series: [{
      name: 'Extramural',
      xAxis: 0,
      data: [
        { y: 4309.7, drilldown: '2017E' },
        { y: 4539.8, drilldown: '2018E' },
        { y: 4577.5, drilldown: '2019E' },
        { y: 4860.7, drilldown: '2020E' },
        { y: 4877.3, drilldown: '2021E' }


      ]
    },
    {
      name: 'IRP & RMS',
      data: [
        { y: 1326.7, drilldown: '2017I' },
        { y: 1387.9, drilldown: '2018I' },
        { y: 1414.8, drilldown: '2019I' },
        { y: 1522.6, drilldown: '2020I' },
        { y: 1565.4, drilldown: '2021I' }


      ]
    }],
    drilldown: {
      drillUpButton: { position: { y: 40, } },
      series: [{
        name: '2017 Extramural',
        id: '2017E',
        xAxis: 1,
        data: [
          ['Research Project Grants', 2278.4],
          ['Cancer Centers', 313.0],
          ['SPOREs', 111.4],
          ['Other P50s/P20s', 1.3],
          ['Other Specialized Centers', 135.6],
          ['Other Research Grants', 481.9],
          ['NRSA', 77.6],
          ['R&D Contracts', 880.4],
          ['Buildings & Facilities', 30.0]
        ]
      }, {
        name: '2018 Extramural',
        id: '2018E',
        xAxis: 1,
        data: [
          ['Research Project Grants', 2450.6],
          ['Cancer Centers', 331.4],
          ['SPOREs', 115.8],
          ['Other P50s/P20s', 0.0],
          ['Other Specialized Centers', 178.3],
          ['Other Research Grants', 537.9],
          ['NRSA', 82.4],
          ['R&D Contracts', 825.4],
          ['Buildings & Facilities', 18.0]
        ]
      }, {
        name: '2019 Extramural',
        id: '2019E',
        xAxis: 1,
        data: [
          ['Research Project Grants', 2541.7],
          ['Cancer Centers', 337.1],
          ['SPOREs', 110.7],
          ['Other P50s/P20s', 7.4],
          ['Other Specialized Centers', 200.8],
          ['Other Research Grants', 506.8],
          ['NRSA', 87.0],
          ['R&D Contracts', 768.1],
          ['Buildings & Facilities', 18.0]
        ]
      }, {
        name: '2020 Extramural',
        id: '2020E',
        xAxis: 1,
        data: [
          ['Research Project Grants', 2749.4],
          ['Cancer Centers', 382.0],
          ['SPOREs', 113.2],
          ['Other P50s/P20s', 7.9],
          ['Other Specialized Centers', 110.7],
          ['Other Research Grants', 548.1],
          ['NRSA', 32.1],
          ['R&D Contracts', 823.0],
          ['Buildings & Facilities', 30.0]
        ]
      }, {
        name: '2021 Extramural',
        id: '2021E',
        xAxis: 1,
        data: [
          ['Research Project Grants', 2822.4],
          ['Cancer Centers', 344.7],
          ['SPOREs', 119.6],
          ['Other P50s/P20s', 3.3],
          ['Other Specialized Centers', 95.9],
          ['Other Research Grants', 556.2],
          ['NRSA', 93.0],
          ['R&D Contracts', 812.2],
          ['Buildings & Facilities', 30.0]
        ]
      }, {
        name: '2017 IRP & RMS',
        id: '2017I',
        xAxis: 1,
        data: [
          ['Intramural Research', 899.7],
          ['RMS', 427.0]
        ]
      }, {
        name: '2018 IRP & RMS',
        id: '2018I',
        xAxis: 1,
        data: [
          ['Intramural Research', 945.5],
          ['RMS', 442.4]
        ]
      }, {
        name: '2019 IRP & RMS',
        id: '2019I',
        xAxis: 1,
        data: [
          ['Intramural Research', 964.9],
          ['RMS', 449.9]
        ]
      }, {
        name: '2020 IRP & RMS',
        id: '2020I',
        xAxis: 1,
        data: [
          ['Intramural Research', 1072.6],
          ['RMS', 450.0]
        ]
      },
      {
        name: '2021 IRP & RMS',
        id: '2021I',
        xAxis: 1,
        data: [
          ['Intramural Research', 1102.5],
          ['RMS', 462.9]
        ]
      },]
    }
  });

};

export default {
  id,
  initChart,
};
