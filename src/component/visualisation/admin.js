import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';


class App extends Component {

    state = {
        persons: []
      }
      
      componentDidMount() {
        axios.get("http://localhost:5000/vadmin")
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons)
          })
        
      }

  constructor(props) {
    super(props);
    this.state = {
        options: {},
        series: [1,20],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
    
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render(
      
  ) {
    
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
             <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
             <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="500"
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;