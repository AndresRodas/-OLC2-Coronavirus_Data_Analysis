import React from "react";

import { Fieldset } from 'primereact/fieldset';
import { InputText } from "primereact/inputtext";

class Home extends React.Component {
    render() {
        return (
            <div className="p-m-6">
                <h1>Coronavirus Data Analysis</h1>
                <Fieldset legend="Resumen" className="p-shadow-5" >
                    <p>Durante la emergencia sanitaria provocada por el COVID-19, se ha observado 
                        un notable incremento en la aplicación de nuevas tecnologías al campo de 
                        la salud y la investigación. Desde la creación de todo tipo de dispositivos 
                        inteligentes destinados a detectar el más mínimo síntoma indicativo de contagio, 
                        hasta el diseño de nuevos patrones de investigación en la cura del nuevo coronavirus.</p>
                    <p>Sin duda, la IA (Inteligencia Artificial) ha estado presente en todas y cada una 
                        de las etapas de esta pandemia, e incluso en momentos previos a ella. En este 
                        sentido, se trató de una startup canadiense –BlueDot- que, gracias a un algoritmo 
                        basado en inteligencia artificial, logró predecirlo.
                        Mediante el procesamiento y análisis de noticias de todos los países del mundo, 
                        junto con información relacionada con rutas de vuelos comerciales y brotes de 
                        enfermedades, pudieron predecir, no solo la existencia de una enfermedad 
                        potencialmente pandémica, sino también el epicentro de la enfermedad. Así mismo, 
                        como su trayectoria más inmediata.</p>
                    <p>Así, la aplicación de la IA en esta pandemia global ha supuesto un antes y un 
                        después en el campo epidemiológico, ya que no solo ha permitido establecer un 
                        mayor control sobre la propagación del virus, sino que ha participado activamente 
                        en el diagnóstico, tratamiento. e investigación para poner fin a este brote lo 
                        antes posible.</p>
                </Fieldset><br />
                <Fieldset legend="Predicción de Datos con Python" className="p-shadow-5">
                    <p>Entre los lenguajes de programación, Python es conocido como aquel que logra 
                        dominar todas las estadísticas, relacionadas con la minería de datos e incluso 
                        el aprendizaje automático, es software libre, por lo que muchas personas han 
                        podido usarlo para desarrollar sus soluciones dando un lugar que ha Bibliotecas 
                        muy interesantes donde se pueden encontrar casi todas las técnicas de machine 
                        learning que existen actualmente, por supuesto, tiene su parte negativa, y es 
                        que derivada del hecho de que muchas personas han aportado, tiene su sintaxis 
                        específica para cada caso, lo que hace aprendizaje un poco complejo.</p>
                    <p>Actualmente existe una solución muy viable, ya que Scikit-learn consiste en 
                        ser una estandarización conformada en una librería de código abierto, que 
                        intenta unificar en un mismo contexto todos los algoritmos y funciones posibles, 
                        ayudando en gran medida las fases de preprocesamiento, entrenamiento, 
                        optimización y validación. de los diferentes métodos predictivos utilizados.</p>
                    <p>Scikit-learn da la posibilidad de tener una gran cantidad de opciones de 
                        procesamiento de datos, de las cuales solo algunas serán utilizadas a lo 
                        largo de este informe, pero se recomienda poder buscar la documentación de esta 
                        herramienta que es muy útil para realizar este tipo. de predicciones como las que 
                        se encuentran a lo largo del documento. Un factor que hay que tener en cuenta 
                        respecto a la citada biblioteca es su alto nivel de madurez, con el que logra 
                        definir modelos predictivos que incluso se utilizan en producción, por lo que se 
                        toma como base para el desarrollo de las diferentes soluciones, encuentra se 
                        centrará en la metodología de regresión lineal.</p>
                </Fieldset><br />
                <Fieldset legend="Regresión Lineal" className="p-shadow-5">
                    <p>Este modelo de predicción se basa en la posibilidad de calcular una línea recta que
                         se acomode en la mayor medida posible a las diferentes muestras que se identifican
                          dentro de la población que se toma para el análisis.  La forma de calcularlo se 
                          basa en que la regresión lineal se enfoca en definir los parámetros que se 
                          encuentran o caracterizan una función lineal, y = mx + b, de tal forma que los 
                          errores cuadráticos en la medición que se realizan, pueden ser eliminado hasta 
                          cierto punto. A la línea definida por la función descrita anteriormente, minimizando 
                          la distancia de cada médico a la línea, manualmente no es tan complejo, aunque el 
                          propósito de las diferentes soluciones que se presentan es realizar un modelo totalmente
                           automatizado.</p>
                    <p>Los diferentes datos que se manejan en el informe no solo se tratan de esta forma, 
                        además en algunos casos no se tienen en cuenta solo 2 dimensiones para extraer alguna 
                        información, pero cuando se trata de datos tridimensionales, muchas veces es preferible 
                        optar para un Gradiente Descendente, el cual itera para poder seguir el proceso anterior, 
                        de tal manera que se encuentre la línea que mejor se ajuste al contorno definido por las 
                        muestras seleccionadas, lo que le otorga un mayor dato computacional, se usa frecuentemente 
                        en multidimensional casos.</p>
                </Fieldset><br />
                <Fieldset legend="Medida de Error" className="p-shadow-5">
                    <p>Como parte fundamental de los modelos con los que se definirá la información es que cuando 
                        existen problemas de esta naturaleza, ya sea machine learning o incluso ciencia de datos,
                         en muy raras ocasiones son exactos, principalmente si se trata de la predicción del avance. 
                         de un virus patológico, ya que los resultados que se producen son probables, suelen ser 
                         estimaciones, esta razón da como resultado que siempre debe existir algún mecanismo que 
                         pueda evaluar la variación que existe y se da a lo largo de los cálculos realizados, claro 
                         está para saber los resultados que se están presentando como su precisión, y que estos 
                         puedan ser objetiva y cuantificablemente comparables, aplicando otros métodos adicionales 
                         que puedan sustentar en función de sus características hacia el comportamiento del conjunto de datos.</p>
                </Fieldset><br />
                <Fieldset legend="Descripción" className="p-shadow-5">
                    <p>Esta aplicación tendrá como objetivo principal que un usuario pueda generar distintos análisis de 
                        información basados de un origen de datos (un archivo en Excel) y diferentes variables que se deberán 
                        configurar dentro del sistema según sea el ánalisis a realizar.  La aplicación deberá ser capaz 
                        de poder analizar y predecir lo siguiente:</p>
                    <p>● Tendencia de la infección por Covid-19 en un País.</p>
                    <p>● Predicción de Infertados en un País.</p>
                    <p>● Indice de Progresión de la pandemia.</p>                
                    <p>● Predicción de mortalidad por COVID en un Departamento.</p>
                    <p>● Predicción de mortalidad por COVID en un País.</p>
                    <p>● Análisis del número de muertes por coronavirus en un País.</p>
                    <p>● Tendencia del número de infectados por día de un País.</p>
                    <p>● Predicción de casos de un país para un año.</p>
                    <p>● Tendencia de la vacunación de en un País.</p>
                    <p>● Ánalisis Comparativo de Vacunaciópn entre 2 paises.</p>
                    <p>● Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo</p>
                    <p>● Ánalisis Comparativo entres 2 o más paises o continentes.</p>
                    <p>● Muertes promedio por casos confirmados y edad de covid 19 en un País.</p>
                    <p>● Muertes según regiones de un país - Covid 19.</p>
                    <p>● Tendencia de casos confirmados de Coronavirus en un departamento de un País.</p>
                    <p>● Porcentaje de muertes frente al total de casos en un país, región o continente.</p>
                    <p>● Tasa de comportamiento de casos activos en relación al número de muertes en un continente.</p>
                    <p>● Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País.</p>
                    <p>● Predicción de muertes en el último día del primer año de infecciones en un país.</p>
                    <p>● Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19.</p>
                    <p>● Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor</p>
                    <p>● Tasa de mortalidad por coronavirus (COVID-19) en un país.</p>
                    <p>● Factores de muerte por COVID-19 en un país.</p>
                    <p>● Comparación entre el número de casos detectados y el número de pruebas de un país.</p>
                    <p>● Predicción de casos confirmados por día</p>
                </Fieldset><br />
                <Fieldset legend="Datos del Estudiante" className="p-shadow-5">
                    <div className="p-col-12 p-md-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">Nombre</span>
                            <InputText value="José Andres Rodas Arrecis"/>
                            <span className="p-inputgroup-addon"><i className="pi pi-user"></i></span>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">Carnet</span>
                                <InputText value="2015 04220" />
                                <span className="p-inputgroup-addon"><i className="pi pi-wallet"></i></span>
                            </div>
                        </div>
                </Fieldset><br />
            </div>
        )
    }
}
export default Home