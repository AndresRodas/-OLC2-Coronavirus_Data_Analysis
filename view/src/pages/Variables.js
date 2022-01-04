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
            pred: '2022-10-11',
            depto: ''
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
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_1(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte1',
            title: 'Tendencia de la infección por Covid-19 en '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Tendencia de la infección por Covid-19 en '+this.state.pais,
                resumen: 'Cada país reporta los datos de forma ligeramente distinta y de forma inevitable no incluye las muertes y contagios que no han sido diagnosticados. En este reporte nos enfocamos en las tendencias dentro del pais ('+this.state.pais+') indicado en el área de parametrizacion, a medida que estos tratan de contener la propagación del virus, independientemente de si se están acercando o ya pasaron el pico de contagios, o si están experimentando un resurgir de contagios o muertes.  Para este calculo se toma como eje x los casos totales de covid del pais y como eje y los casos nuevos',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos.  En este caso los valores no crecen o decrecen de la misma manera, por ende una regresión linean no hubiera sido de gran ayuda para este cálculo.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las infecciones de '+this.state.pais+' para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas infectados' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas infectadas de dicho país.'),
                text2: 'Medida de Error:\n\nComo parte fundamental de los modelos con los que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep2 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_2(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte2',
            title: 'Predicción de Infectados en '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Predicción de Infectados en '+this.state.pais,
                resumen: 'Para la prediccion de infectados de determinado pais se tomó en cuenta una variable que represente el Dia y otra que represente los casos totales de Covid-19 que han habido hasta la fecha en dicho pais.  Generalmente se reportan los datos de forma ligeramente distinta y de forma inevitable no incluye las muertes y contagios que no han sido diagnosticados.  Es bien sabido que la propagación de la enfermedad está influenciada por la gente, la voluntad de adoptar conductas preventivas de salud pública que a menudo se asocian con la percepción pública del riesgo.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión lineal, debido al tipo de datos que podrian venir incluidos en el archivo de datos.  Los valores que se esperan encontrar en el archivo de entrada crecen o decrecen de la misma manera en una forma lineal, por ende una regresión linean se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas infectadas en '+this.state.pais+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas infectados' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas infectadas de dicho país.'),
                text2: 'Dato de Predicción:\n\nLa sección de parametrización de variables incluye una casilla en donde se ingresa un valor a predecir por la tendencia de las infecciones por Covid-19 en dicho país.  Esta variable toma el lugar del eje x o variable independiente y mediante la regresión predice cierto valor en y o variable dependiente.  Para este caso, la prediccion para '+this.state.pred+' es de: '+response.predict_val+'.  Si no se ingresó ningun valor para predecir, el valor por defecto es 2022-10-11.\n\nMedida de Error:\n\nComo parte fundamental del modelo de regresión lineal con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion lineal se registraron los siguientes coeficientes de error:\n\nError: '+response.error+'\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep3 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_3(this.props.data, this.state.x, this.state.y, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte3',
            title: 'Indice de Progresión de la Pandemia',
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            text: {
                title: 'Indice de Progresión de la Pandemia',
                resumen: 'La pandemia generada por la COVID-19 progresa diferente cuando llega a cada territorio, se comparó la progresión de casos de Coronavirus en la primera semana de la pandemia en cada país de la fuente de datos. Se realizó un estudio descriptivo, con la información de los casos confirmados en cada país, esto desde que se anunciara el primer caso en cada territorio.',
                text1: 'Indice de Progresion (m):\n\nLa tendencia y el indice de progresión de la pandemia a travez de los diferentes paises del mundo está definido por la tasa de crecimiento, o sea la pendiente de la regresion lineal en este caso.  Para el calculo de los datos actuales la pendiente es de: '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que el indice de progresion podemos decir que es de crecimiento en los casos de covid 19 en todo el mundo.\n\n\nM = (Y2-Y1)/(X2-X1)' : ', de esta manera notamos que la pendiente es negativa, por lo que podemos predecir que el indice de progresion de la pandemia disminuye, hay disminucion de casos en los paises del mundo, auque puede deberse porque no se sabe a ciencia cierta los casos que no son documentados y reportados.\n\n\nM = (Y2-Y1)/(X2-X1)'),
                text2: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión lineal, debido al tipo de datos que podrian venir incluidos en el archivo de datos.  Los valores que se esperan encontrar en el archivo de entrada crecen o decrecen de la misma manera en una forma lineal, por ende una regresión linean se acopla de buena manera al modelo y al calculo de las variables.\n\nMedida de Error:\n\nComo parte fundamental del modelo de regresión lineal con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion lineal se registraron los siguientes coeficientes de error:\n\nError: '+response.error+'\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)

    }

    Rep4 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_4(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.depto, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte4',
            title: 'Predicción de mortalidad por COVID en el Departamento de '+this.state.depto,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Predicción de mortalidad por COVID en el Departamento de'+this.state.depto,
                resumen: 'Cuando hablamos del número de muertes causada por la COVID-19, solemos referirnos a la tasa de letalidad, es decir, la probabilidad que tenemos de morir una vez que te contagias.  Con estos datos llegó a una mediana de tasa de letalidad del 0,23%. Esto significa que había un 50% de estudios por debajo de 0,23 % y un 50% de estudios por encima de esa cifra.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos no siempre son proporcionales entre sí.  Los valores que se esperan encontrar en el archivo de entrada no crecen o decrecen de la misma manera, por ende una regresión polinomial se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas fallecidas en '+this.state.depto+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas fallecidas por covid-19.' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas fallecidas por covid-19.'),
                text2: 'Dato de Predicción:\n\nSe busca predecir la cantidad de muertos por covid-19 en el departamento de '+this.state.depto+' para la fecha: '+this.state.pred+' y el valor predecido de contagio es: '+response.predict_val+'.  Anteriormente definimos la probabilidad de muerte por contagio por covid-19 asi que realizando el calculo tenemos que: '+parseInt(response.predict_val)+' * 0.23 = '+parseInt(response.predict_val)*0.23+' por lo que esa es la estimacion de fallecimientos para la fecha solicitada.\n\nMedida de Error:\n\nComo parte fundamental del modelo de regresión polinomial con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep5 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_4(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte5',
            title: 'Predicción de mortalidad por COVID en el Pais de '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Predicción de mortalidad por COVID en el Pais de'+this.state.pais,
                resumen: 'Cuando hablamos del número de muertes causada por la COVID-19, solemos referirnos a la tasa de letalidad, es decir, la probabilidad que tenemos de morir una vez que te contagias.  Con estos datos llegó a una mediana de tasa de letalidad del 0,23%. Esto significa que había un 50% de estudios por debajo de 0,23 % y un 50% de estudios por encima de esa cifra.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos no siempre son proporcionales entre sí.  Los valores que se esperan encontrar en el archivo de entrada no crecen o decrecen de la misma manera, por ende una regresión polinomial se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas fallecidas en '+this.state.depto+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas fallecidas por covid-19.' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas fallecidas por covid-19.'),
                text2: 'Dato de Predicción:\n\nSe busca predecir la cantidad de muertos por covid-19 en el Pais de '+this.state.pais+' para la fecha: '+this.state.pred+' y el valor predecido de fallecimientos es de: '+response.predict_val+'.\n\nMedida de Error:\n\nComo parte fundamental del modelo de regresión polinomial con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep6 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_4(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte6',
            title: 'Análisis del número de muertes por coronavirus en el Pais de '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Análisis del número de muertes por coronavirus en el Pais de '+this.state.pais,
                resumen: 'Hasta la fecha actual (inicios de 2022) las victimas fatales de covid-19 casi alcanzan los 300 millones de personas, y este numero sigue aumentando aunque no al mismo ritmo que antes.  La cantidad de pruebas con resultado positivo se estima multiplicando las pruebas realizadas por el porcentaje de resultados positivos. Es posible que la cantidad de pruebas con resultado positivo no sea igual a la cantidad de casos positivos debido a diferencias en los informes y a personas que se someten a más de una prueba.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos no siempre son proporcionales entre sí.  Los valores que se esperan encontrar como el numero de muertes por dia, no crecen o decrecen de la misma manera, puede que un dia mueran menos personas que el dia anterior, etc.  Por ende una regresión polinomial se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas fallecidas en '+this.state.depto+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas fallecidas por covid-19.' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas fallecidas por covid-19.'),
                text2: 'Medida de Error:\n\nComo parte fundamental del modelo de regresión polinomial con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep8 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_8(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pred, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte8',
            title: 'Predicción de casos en '+this.state.pais+' para un año',
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Predicción de casos en '+this.state.pais+' para un año',
                resumen: 'Para la prediccion de infectados de determinado pais se tomó en cuenta una variable que represente el Dia y otra que represente los casos totales de Covid-19 que han habido hasta la fecha en dicho pais.  Generalmente se reportan los datos de forma ligeramente distinta y de forma inevitable no incluye las muertes y contagios que no han sido diagnosticados.  Es bien sabido que la propagación de la enfermedad está influenciada por la gente, la voluntad de adoptar conductas preventivas de salud pública que a menudo se asocian con la percepción pública del riesgo.',
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos no siempre son proporcionales entre sí.  Los valores que se esperan encontrar como el numero de muertes por dia, no crecen o decrecen de la misma manera, puede que un dia mueran menos personas que el dia anterior, etc.  Por ende una regresión polinomial se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas fallecidas en '+this.state.depto+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas fallecidas por covid-19.' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas fallecidas por covid-19.'),
                text2: 'Dato de Predicción:\n\nLa sección de parametrización de variables incluye una casilla en donde se ingresa un valor a predecir por la tendencia de las infecciones por Covid-19 en dicho país.  Esta variable toma el lugar del eje x o variable independiente y mediante la regresión predice cierto valor en y o variable dependiente.  Para este caso, la prediccion para '+this.state.pred+' es de: '+response.predict_val+'.  Si no se ingresó ningun valor para predecir, el valor por defecto es 2022-10-11.\n\nMedida de Error:\n\nComo parte fundamental del modelo de regresión polinomial con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
            }
        }
        const report = Object.assign(response, names)
        this.props.callback(report)
    }

    Rep9 = async () => {
        if(this.props.data === null){
            alert("ERROR: No se ha cargado una fuente de datos o es incorrecta...")
            return
        }
        var name = this.props.data.name.split('.')
        var ext = name[name.length-1]
        const response = await this.dataService.Report_9(this.props.data, this.state.x, this.state.y, this.state.z, this.state.pais, ext)
        if( response === null) {
            alert("ERROR: Las variables ingresadas son incorrectas...")
            return
        }
        const names = {
            download_title: 'Reporte9',
            title: 'Tendencia de la vacunación en '+this.state.pais,
            x_name: this.state.x_name,
            y_name: this.state.y_name,
            predict_quest: this.state.pred,
            text: {
                title: 'Tendencia de la vacunación en '+this.state.pais,
                resumen: 'El cómputo mundial de dosis administradas se acerca a los 9.200 millones de inyecciones y la media de dosis diarias administradas gira en torno a los 30 millones diarios, aupada por las dosis de refuerzo en los países desarrollados, según los datos recogidos por Our World in Data sobre la vacunación en el mundo. La campaña avanza en alrededor de 200 territorios y países de todo el planeta, entre ellos '+this.state.pais, 
                text1: 'Tipo de Regresión:\n\nPara este tipo de reporte se implementó una regresión polinomial, debido al tipo de datos que podrian venir incluidos en el archivo de datos no siempre son proporcionales entre sí.  Los valores que se esperan encontrar como el numero de muertes por dia, no crecen o decrecen de la misma manera, puede que un dia mueran menos personas que el dia anterior, etc.  Por ende una regresión polinomial se acopla de buena manera al modelo y al calculo de las variables.\n\nTendencia:\n\nLa tendencia del gráfico anterior se define principalmente por su pendiente, que es la tasa de cambio de las personas fallecidas en '+this.state.depto+', para este caso el valor es de '+response.pendiente+(response.pendiente > 0 ? ', de esta manera notamos que la pendiente es positiva, por lo que es posible que estemos frente a un nuevo pico de personas fallecidas por covid-19.' : ', de esta manera notamos que la pendiente es negativa, por lo que puede significar una reduccion en las personas fallecidas por covid-19.'),
                text2: 'Medida de Error:\n\nComo parte fundamental del modelo de regresión polinomial con el que se definió la información es que incluso en la ciencia de datos, los datos mismos en muy raras ocasiones son exactos.  Para este modelo de regresion polinomial se registraron los siguientes coeficientes de error:\n\nRMSE: '+response.rmse+'\nR^2: '+response.r2
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


                    {/*Variables Reporte 3*/}
                    {this.state.predict === 3 ? (
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
                            <h4>Variables Dependientes (Infectados y Pais):</h4>
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
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep3 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 4*/}
                    {this.state.predict === 4 ? (
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
                            <h4>Variables Dependientes (Casos y Departamento):</h4>
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
                                    <label htmlFor="firstname2">Departamento (filtro)</label>
                                    <InputText id="firstname2" type="text" value={this.state.depto} onChange={(e) => this.setState({ depto: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Fecha Predicción (yyyy-mm-dd)</label>
                                    <InputText  id="lastname2" type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep4 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 5*/}
                    {this.state.predict === 5 ? (
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
                            <h4>Variables Dependientes (Casos y Pais):</h4>
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
                                    <label htmlFor="firstname2">Pais (filtro)</label>
                                    <InputText id="firstname2" type="text" value={this.state.pais} onChange={(e) => this.setState({ pais: e.target.value })}/>
                                    
                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="lastname2">Fecha Predicción (yyyy-mm-dd)</label>
                                    <InputText  id="lastname2" type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep5 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 6*/}
                    {this.state.predict === 6 ? (
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
                            <h4>Variables Dependientes (Casos y Pais):</h4>
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
                                    <label htmlFor="firstname2">Pais (filtro)</label>
                                    <InputText id="firstname2" type="text" value={this.state.pais} onChange={(e) => this.setState({ pais: e.target.value })}/>
                                    
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep6 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 7*/}
                    {this.state.predict === 7 ? (
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
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep1 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 8*/}
                    {this.state.predict === 8 ? (
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
                                    <label htmlFor="lastname2">Año Predicción</label>
                                    <InputText  id="lastname2" type="text" value={this.state.pred} onChange={(e) => this.setState({ pred: e.target.value })}/>
                                </div>
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep8 }/>
                        </div>
                    ) : null}


                    {/*Variables Reporte 9*/}
                    {this.state.predict === 9 ? (
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
                            <h4>Variables Dependientes (Vacunados y Pais):</h4>
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
                            </div>
                            <Button label="Calcular" icon="pi pi-check" onClick={ this.Rep9 }/>
                        </div>
                    ) : null}



                </Card>
            </div>
        )
    }
}

export default Variables