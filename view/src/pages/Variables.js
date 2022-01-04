import React from "react";

//prime
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//services
import { DataService } from '../services/DataService'

class Variables extends React.Component {

    dataService = new DataService()

    constructor(props) {
        super(props)
        this.state = {
            predict: 0,
            x: '',
            x_name: '',
            y: '',
            y_name: '',
            z: '',
            z_name: '',
            pais: '',
            pred: 0
        }
     
        this.predictions = [
            {label: 'Tendencia de la infección por Covid-19 en un País.', value: 1},
            {label: 'Predicción de Infectados en un País.', value: 2},
            {label: 'Indice de Progresión de la pandemia.', value: 3},
            {label: 'Predicción de mortalidad por COVID en un Departamento.', value: 4},
            {label: 'Predicción de mortalidad por COVID en un País.', value: 5},
            {label: 'Análisis del número de muertes por coronavirus en un País.', value: 6},
            {label: 'Tendencia del número de infectados por día de un País.', value: 7},
            {label: 'Predicción de casos de un país para un año.', value: 8},
            {label: 'Tendencia de la vacunación de en un País.', value: 9},
            {label: 'Ánalisis Comparativo de Vacunaciópn entre 2 paises.', value: 10},
            {label: 'Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo', value: 11},
            {label: 'Ánalisis Comparativo entres 2 o más paises o continentes.', value: 12},
            {label: 'Muertes promedio por casos confirmados y edad de covid 19 en un País.', value: 13},
            {label: 'Muertes según regiones de un país - Covid 19.', value: 14},
            {label: 'Tendencia de casos confirmados de Coronavirus en un departamento de un País.', value: 15},
            {label: 'Porcentaje de muertes frente al total de casos en un país, región o continente.', value: 16},
            {label: 'Tasa de comportamiento de casos activos en relación al número de muertes en un continente.', value: 17},
            {label: 'Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País.', value: 18},
            {label: 'Predicción de muertes en el último día del primer año de infecciones en un país.', value: 19},
            {label: 'Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19.', value: 20},
            {label: 'Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor.', value: 21},
            {label: 'Tasa de mortalidad por coronavirus (COVID-19) en un país.', value: 22},
            {label: 'Factores de muerte por COVID-19 en un país.', value: 23},
            {label: 'Comparación entre el número de casos detectados y el número de pruebas de un país.', value: 24},
            {label: 'Predicción de casos confirmados por día.', value: 25}
        ]
    }

    onPredictChange = (e) =>{
        this.setState({predict: e.value})
    }

    Rep1 = async () =>{
        const response = await this.dataService.Report_1(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais )
        const names = {
            download_title: 'Reporte1',
            title: 'Tendencia de la infección por Covid-19 en '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Tendencia de la infección por Covid-19 en '+this.state.pais,
                resumen: 'Cada país reporta los datos de forma ligeramente distinta y de forma inevitable no incluye las muertes y contagios que no han sido diagnosticados. En este reporte nos enfocamos en las tendencias dentro del pais ('+this.state.pais+') indicado en el área de parametrizacion, a medida que estos tratan de contener la propagación del virus, independientemente de si se están acercando o ya pasaron el pico de contagios, o si están experimentando un resurgir de contagios o muertes.  Para este calculo se toma como eje x los casos totales de covid del pais y como eje y los casos nuevos',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos.  En este caso los valores no crecen o decrecen de la misma manera, por ende una regresión linean no hubiera sido de gran ayuda para este cálculo.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las infecciones de '+this.state.pais+' para este caso el valor es de '+response.pendiente+', de esta manera, si la pendiente es negativa tenemos que tener en cuenta un decremento de las infecciones, por el contrario si la pendiente es positiva estamos ante un posible pico de infectados.',
                text2: 'Dato de Predicción:\n\nLa sección de parametrización de variables incluye una casilla en donde se ingresa un valor a predecir por la tendencia de las infecciones por Covid-19 en dicho país.  Esta variable toma el lugar del eje x o variable independiente y mediante la regresión predice cierto valor en y o variable dependiente.  Para este caso, la prediccion para '+this.state.pred+' es de: '+response.predict_val+'.  Si no se ingresó ningun valor para predecir, el valor por defecto es 0.\n\nMedida de Error:\n\nComo parte fundamental de los modelos con los que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        console.log(report)
        this.props.callback(report)
    }

    Rep2 = async () => {
        const response = await this.dataService.Report_2(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais )
        const names = {
            download_title: 'Reporte2',
            title: 'Predicción de Infectados en '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Predicción de Infectados en '+this.state.pais,
                resumen: 'Cada país reporta los datos de forma ligeramente distinta y de forma inevitable no incluye las muertes y contagios que no han sido diagnosticados. En este reporte nos enfocamos en las tendencias dentro del pais ('+this.state.pais+') indicado en el área de parametrizacion, a medida que estos tratan de contener la propagación del virus, independientemente de si se están acercando o ya pasaron el pico de contagios, o si están experimentando un resurgir de contagios o muertes.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos.  En este caso los valores no crecen o decrecen de la misma manera, por ende una regresión linean no hubiera sido de gran ayuda para este cálculo.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las infecciones de '+this.state.pais+' para este caso el valor es de '+response.pendiente+', de esta manera, si la pendiente es negativa tenemos que tener en cuenta un decremento de las infecciones, por el contrario si la pendiente es positiva estamos ante un posible pico de infectados.',
                text2: 'Dato de Predicción:\n\nLa sección de parametrización de variables incluye una casilla en donde se ingresa un valor a predecir por la tendencia de las infecciones por Covid-19 en dicho país.  Esta variable toma el lugar del eje x o variable independiente y mediante la regresión predice cierto valor en y o variable dependiente.  Para este caso, la prediccion para '+this.state.pred+' es de: '+response.predict_val+'.  Si no se ingresó ningun valor para predecir, el valor por defecto es 0.\n\nMedida de Error:\n\nComo parte fundamental de los modelos con los que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nError: '+response.error+'\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        console.log(report)
        this.props.callback(report)

    }

    render() {
        return (
            <div className="p-grid p-justify-center"> 
                <Card title="Parametrización de Variables" className="p-my-6 p-shadow-5">
                    <div className="p-mt-4 p-mb-6">
                        <label>Predicción a realizar:</label>
                        <Dropdown className="p-ml-4" value={this.state.predict} options={this.predictions} onChange={ this.onPredictChange } placeholder="Seleccione una predicción"/><br></br> 
                    </div>
                    
                    {/*Variables Reporte 1*/}
                    {this.state.predict === 1 ? (
                        <div>
                            <h4>Variable Independiente (Fecha):</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.x_name} onChange={(e) => this.setState({x_name: e.target.value})}/>
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText id="lastname2" type="text" value={this.state.x} onChange={(e) => this.setState({x: e.target.value})} />
                                </div>
                            </div>
                            <h4>Variables Dependientes (Nuevos y Pais):</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.y_name} onChange={(e) => this.setState({y_name: e.target.value})}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText  id="lastname2" type="text" value={this.state.y} onChange={(e) => this.setState({ y: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.z_name} onChange={(e) => this.setState({ z_name: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText  id="lastname2" type="text" value={this.state.z} onChange={(e) => this.setState({ z: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <h4>Parámetros:</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Pais</label>
                                    <InputText id="firstname2" type="text" value={this.state.pais} onChange={(e) => this.setState({ pais: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Fecha Predicción (yyyy-mm-dd)</label>
                                    <InputText  id="lastname2" type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep1 }/>
                        </div>
                    ) : null}

                    {/*Variables Reporte 2*/}
                    {this.state.predict === 2 ? (
                        <div>
                            <h4>Variable Independiente (Fecha):</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.x_name} onChange={(e) => this.setState({x_name: e.target.value})}/>
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText id="lastname2" type="text" value={this.state.x} onChange={(e) => this.setState({x: e.target.value})} />
                                </div>
                            </div>
                            <h4>Variables Dependientes (Totales y Pais):</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.y_name} onChange={(e) => this.setState({y_name: e.target.value})}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText  id="lastname2" type="text" value={this.state.y} onChange={(e) => this.setState({ y: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Nombre</label>
                                    <InputText id="firstname2" type="text" value={this.state.z_name} onChange={(e) => this.setState({ z_name: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Campo Archivo</label>
                                    <InputText  id="lastname2" type="text" value={this.state.z} onChange={(e) => this.setState({ z: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <h4>Parámetros:</h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname2">Pais</label>
                                    <InputText id="firstname2" type="text" value={this.state.pais} onChange={(e) => this.setState({ pais: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Fecha Predicción (yyyy-mm-dd)</label>
                                    <InputText  id="lastname2" type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep2 }/>
                        </div>
                    ) : null}
                </Card>
            </div>
            // <div>
            //     <InputText type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
            //     <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep1 }/>
            // </div>
            
        )
    }
}

export default Variables