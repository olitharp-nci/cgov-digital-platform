{/* <style type='text/css'>
    @media only screen and(max - width: 640 px) {
        #NCI-Chart_obligations-mechanism {
            height: 600px !important;
        }
    }
</style>
<div style="min-width: 310px; height: 450px; margin: 0 auto;" id="NCI-Chart_obligations-mechanism"></div> */}

const id = 'NCI-Chart_obligations-mechanism';

function initChart(Chart) {
  new Chart(id, {
    chart: {
      type: 'NCI_pie'
    },
    plotOptions: {
      pie: {
        size: '75%'
      }
    },
    colors: ['#82368C', '#FF5F00', '#44BC95', '#00B5CA', '#BB1F3F', '#FBB03B', '#ED1E79', '#2A73A5'],
    title: {
      text: 'Percent Share of Total NCI Dollars'
    },
    subtitle: {
      text: 'Fiscal Year 2021'
    },
    series: [{
      name: 'Dollars in Millions',

      data: [{
        name: 'Research Project Grants',
        y: 2822414508,
        drilldown: 'Research Project Grants'
      },
      {
        name: 'Centers & SPORES',
        y: 563521069,
        drilldown: 'Centers & SPORES'
      },

      {
        name: 'NRSA',
        y: 92995313
      },
      {
        name: 'R&D Contracts',
        y: 812246516,
        drilldown: 'R&D Contracts'
      },
      {
        name: 'Intramural Research',
        y: 1102531899,
        drilldown: 'Intramural Research'
      },
      {
        name: 'Buildings and Facilities',
        y: 30000000
      },
      {
        name: 'RMS',
        y: 462876551,
        drilldown: 'RMS'
      },
      {
        name: 'Other Research',
        y: 556149380,
        drilldown: 'Other Research'
      }
      ]
    }],
    drilldown: {
      series: [
        {
          name: 'Research Project Grants',
          id: 'Research Project Grants',
          colors: ['#602968', '#995FA2', '#D0B9D7', '#DCD5E1'],
          data: [
            { name: 'Non-Competing', y: 1982735492 },
            { name: 'Administrative Supplements', y: 40531153 },
            { name: 'Competing', y: 640878364 },
            { name: 'SBIT/STTR Grants', y: 158269499 }
          ]
        },

        {
          name: 'Centers & SPORES',
          id: 'Centers & SPORES',
          colors: ['#FF5F00', '#802F00', '#FFBF99', '#FFBF99'],
          data: [
            { name: 'Cancer Centers Grants-P20/P30', y: 344697904 },
            { name: 'SPOREs', y: 119570354 },
            { name: 'Other P50s/P20s', y: 3306038 },
            { name: 'Other Specialized Centers', y: 95946773 }
          ]
        },

        {
          name: 'R&D Contracts',
          id: 'R&D Contracts',
          colors: ['#1B5768', '#83C5D8', '#E2F0F4'],
          data: [
            { name: 'R&D Contracts', y: 668612032 },
            { name: 'SBIR Contracts', y: 20916852 },
            { name: 'NIH Management Fund/SSF Assessment', y: 122717632 }
          ]
        },
        {
          name: 'Intramural Research',
          id: 'Intramural Research',
          colors: ['#5E1020', '#961932', '#C94C65'],
          data: [
            { name: 'Program', y: 830641566 },
            { name: 'NIH Management Fund/SSF Assessment', y: 271890333 }
          ]
        },
        {
          name: 'RMS',
          id: 'RMS',
          colors: ['#770F3D', '#AD1658', '#F478AF'],
          data: [
            { name: 'Research Management and Support (RMS)', y: 350205851 },
            { name: 'SBIR RMS', y: 3056688 },
            { name: 'NIH Management Fund/SSF Assessment', y: 271890333 }
          ]
        },
        {
          name: 'Other Research',
          id: 'Other Research',
          colors: ['#2A73A5', '#1A4665', '#3FA7F1', '#319FBE', '#83C5D8', '#E2F0F4', '#AAC7DB', '#70858C', '#24748B', '#1B5768'],
          data: [
            { name: 'Career Program', y: 102655344, drilldown: 'Career Program' },
            { name: 'Cancer Education Program-R25 (including BD2K)', y: 17632838 },
            { name: 'Clinical Cooperative Groups-U10/UG1', y: 299980858 },
            { name: 'PreDoc PostDoc Transition Awards-F99', y: 1770090 },
            { name: 'Minority Biomedical Support-S06', y: 1497039 },
            { name: 'Research Pathway in Residency-R38', y: 608718 },
            { name: 'Resource Grants-R24/U24/U2C', y: 124345645 },
            { name: 'Intl Rsrch Training Grants Conference- D43/U2R', y: 1871152 },
            { name: 'Cooperative Conference Agreements-U13/R13', y: 434014 }
          ]
        },
        {
          name: 'Career Program',
          id: 'Career Program',
          colors: ['#2A73A5', '#1A4665', '#3FA7F1', '#319FBE', '#83C5D8', '#E2F0F4', '#AAC7DB', '#70858C', '#1B5768', '#24748B', '#5AB2CB'],
          data: [
            { name: 'Post-Doc-Fellow Awards-K00', y: 7211442 },
            { name: 'Temin & Minority Mentored Awards-K01/K43', y: 5573009 },
            { name: 'Estab. Inv. Award-K05', y: 0 },
            { name: 'Preventive Oncology-K07', y: 4964775 },
            { name: 'Clinical Investigator-K08', y: 48478974 },
            { name: 'Clinical Oncology-K12', y: 14506693 },
            { name: 'Transitional Career Development-K22', y: 9722676 },
            { name: 'Mentored Patient Oriented RCDA-K23', y: 534675 },
            { name: 'Mid-Career Invest. & Patient Orient. Res-K24', y: 354197 },
            { name: 'Mentored Quant. Res Career-K25', y: 157167 },
            { name: 'Mentored Career Devel/Tem Intl Career-K43', y: 551375 },
            { name: 'Pathway to Independence Awards-K99', y: 10600361 }
          ]
        }
      ]
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 595
        },
        chartOptions: {
          chart: {
            height: 600
          },
          legend: {
            layout: 'horizontal',
            itemWidth: 150
          }
        }
      }, {
        condition: {
          minWidth: 596
        },
        chartOptions: {
          chart: {
            height: 450
          }
        }
      }]
    }
  });
};


export default {
  id,
  initChart,
}
