import React from "react";

//prime
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
//PDF
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocuPDF from '../DocuPDF'

class Graphics extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : {
                labels: this.props.report.x,
                datasets: [
                  {
                    label: 'Tendencia',
                    data: this.props.report.predict_list,
                    fill: false,
                    borderColor: 'black',
                          backgroundColor: 'blue'
                  },
                  { 
                    label: this.props.report.y_name,
                    data: this.props.report.y,
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
                        <h1 className="p-grid p-justify-center p-mt-5 p-mb-6">{this.props.report.title}</h1>
                        <h3>{this.props.report.y_name}</h3>  
                        <Chart type='line' data={this.state.data} options={this.options}/>
                        <h3 className="p-grid p-justify-end p-mt-3">{this.props.report.x_name}</h3>
                    </TabPanel>
                    <TabPanel header="Reporte">
                        <PDFViewer style={{ width: "100%", height: "90vh" }}>
                            <DocuPDF content={this.props.report.text} />
                        </PDFViewer>
                        <PDFDownloadLink
                            document={<DocuPDF content={this.props.report.text} />}
                            fileName={this.props.report.download_title}
                        >
                            <Button label="Descargar Reporte" icon="pi pi-check" />
                        </PDFDownloadLink>
                        
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}


export default Graphics