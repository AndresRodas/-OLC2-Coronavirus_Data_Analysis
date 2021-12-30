import React, { Fragment } from "react";

//prime
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import './DataTableDemo.css';

class Variables extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            predict: null,
            products1: [23,323],
            products2: null,
            products3: null,
            products4: null,
            editingRows: {}
        }
        this.columns = [
            { field: 'nombre', header: 'Nombre' },
            { field: 'campo', header: 'Campo Archivos' }
        ];
        this.predictions = [
            {label: 'New York', value: 'NY'},
            {label: 'Rome', value: 'RM'},
            {label: 'London', value: 'LDN'},
            {label: 'Istanbul', value: 'IST'},
            {label: 'Paris', value: 'PRS'}
        ]
    }

    cellEditor(options) {
        if (options.field === 'price')
            return this.priceEditor(options);
        else
            return this.textEditor(options);
    }
    

    onPredictChange = (e) =>{
        console.log(e.value)
        this.setState({predict: e.value})
    }

    render() {
        return (
            <div className="p-grid p-justify-center"> 
                <Card title="Parametrización de Variables" className="p-my-6 p-shadow-5">
                    <div className="p-mt-4 p-mb-6">
                        <label>Predicción a realizar:</label>
                        <Dropdown className="p-ml-4" value={this.state.predict} options={this.predictions} onChange={ this.onPredictChange } placeholder="Seleccione una predicción"/><br></br> 
                    </div>
                    <div className="p-my-4">
                        <h4>Variable Dependiente:</h4>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col">
                                <label htmlFor="firstname2">Nombre</label>
                                <InputText id="firstname2" type="text"/>
                            </div>
                            <div className="p-field p-col">
                                <label htmlFor="lastname2">Campo Archivo</label>
                                <InputText id="lastname2" type="text"/>
                            </div>
                        </div>
                        <h4>Variable Independiente:</h4>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col">
                                <label htmlFor="firstname2">Nombre</label>
                                <InputText id="firstname2" type="text"/>
                            </div>
                            <div className="p-field p-col">
                                <label htmlFor="lastname2">Campo Archivo</label>
                                <InputText id="lastname2" type="text"/>
                            </div>
                        </div>
                    </div>
                    <Button label="Calcular" icon="pi pi-check" />
                </Card> 
            </div>
        )
    }
}

export default Variables