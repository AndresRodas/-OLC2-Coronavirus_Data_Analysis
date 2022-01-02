import React from "react";

//prime
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';

//services
import { DataService } from '../services/DataService'

class Data extends React.Component {

    dataService = new DataService()

    constructor(props) {
        super(props)
        this.state = {}
    }

    myUploader = (file) => {
        console.log(file.files)

        this.dataService.handleSubmit(file.files[0])
    }

    render() {
        return (
            <div className="p-grid p-justify-center"> 
                <Card title="Selecciona la Fuente de Datos" subTitle="(.csv, .xls, .xlsx y .json)"  className="p-my-6 p-shadow-5">
                    <FileUpload name="demo" accept=".csv" customUpload uploadHandler={this.myUploader} className="p-mx-6"/>
                </Card> 
            </div>
        )
    }
}

export default Data