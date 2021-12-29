import React, { Fragment } from "react";

//prime
import { FileUpload } from 'primereact/fileupload';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
 
import { Button } from 'primereact/button';

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
            <div> 
                <Card title="Selecciona la Fuente de Datos" subTitle="(.csv, .xls, .xlsx y .json)"  className="p-grid">
                    <FileUpload name="demo" accept=".csv" customUpload uploadHandler={this.myUploader}/>
                </Card> 
            </div>
        )
    }
}

export default Data