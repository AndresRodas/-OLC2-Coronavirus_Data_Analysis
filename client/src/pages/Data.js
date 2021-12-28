import React, { Fragment } from "react";

//prime
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

//codemirror

const API = process.env.REACT_APP_API

class Data extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '#hola mundo',
            data: '~$'
        }
        this.leftContents = (
            <Fragment>
                <Button label="Run" icon="pi pi-caret-right" className="p-button-success p-mr-2" onClick={async () => this.handleSubmit()} />
                <Button label="Clear" icon="pi pi-times" className="p-button-danger p-mr-2" onClick={() => this.setState({ value: '', data: '' })} />
                <Button label="Save" icon="pi pi-download" className="p-button-warning p-mr-2" />
                <FileUpload name="demo[]" icon="pi pi-upload" url="./upload" multiple accept=".txt" mode="basic" />
            </Fragment>
        );
    }

    handleSubmit = async (e) => {
        // const res = await fetch(`/interpreter`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // })
        // this.setState({ data: await res.json() })
        console.log("handre Submit")
        console.log(API)
    }

    render() {
        return (
            <div className="p-mt-3">
                <Toolbar left={this.leftContents} />
                <FileUpload name="demo" url="./upload" accept=".csv" />
            </div>
        )
    }
}

export default Data