import React, { Fragment } from "react";

//prime
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
//import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"

class Graphics extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : {
                labels: ['5','7','8','10','11','15','18'],
                datasets: [
                  {
                    label: 'First Dataset',
                    data: [39.26, 46.19, 49.65, 56.59, 60.05, 73.92, 84.31],
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
              },
            title: 'Titulo del reporte de Coronavirus 2021',
            text: 'Aqui tiene que estar todo el analisis y la conclusion del reporte generado de los datos de covid-19'
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
            <div className="p-grid p-justify-center" >
                <TabView className="p-col-8 p-my-6 p-shadow-5">
                    <TabPanel header="Gráfica">
                            <Chart type='line' data={this.state.data} options={this.options} />
                    </TabPanel>
                    <TabPanel header="Reporte">
                        
                        <Button label="Descargar" icon="pi pi-check" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}


export default Graphics