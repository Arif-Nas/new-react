import React, { Component }  from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 5,
        },
        chart: {
          id: "basic-line"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        
        {
          name: "puppies adoption",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="550"
            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
