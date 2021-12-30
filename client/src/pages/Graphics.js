import React, { Fragment } from "react";

//prime
import { Chart } from 'primereact/chart';
import { Card } from "primereact/card";
import { TabView, TabPanel } from 'primereact/tabview';

class Graphics extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : {
                labels: ['5','7','8','10','11','15','18'],
                datasets: [
                  {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'black',
                          backgroundColor: 'blue'
                  },
                  { 
                    label: 'Second Dataset',
                    data: [35, 45, 50, 60, 65, 75, 80],
                    fill: false,
                    borderColor: 'white',
                          backgroundColor: 'red',
                          borderWidth: 0
                  }
                ]
              }
        }

    }
      
    options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    }
    
    render() {
        return (
            <div className="p-grid" >
                <TabView>
                    <TabPanel header="Gráfica">
                        <Card className="p-col p-my-6 p-mx-6" >
                            <Chart type='line' data={this.state.data} options={this.options} />
                        </Card>
                    </TabPanel>
                    <TabPanel header="Reporte">
                        <Card className="p-col p-my-6 p-mx-6 p-justofy-end" >
                            <Chart type='line' data={this.state.data} options={this.options} />
                        </Card>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}

export default Graphics