# [OLC2]Proyecto 2 - Coronavirus Data Analysis

- **Universidad de San Carlos de Guatemala**
- **Facultad de Ingenieria**
- **Escuela de Ciencias y Sistemas**
- **Organización de Lenguajes y Compiladores 2**
- **Ing. Luis Fernando Espino Barrios**
- **Aux. Haroldo Pablo Arias Molina**

## Datos del Estudiante

| Carne         | Nombre                      |
| --------      | --------                    |
| 201504220     | José Andres Rodas Arrecis   |

## Documentación

# MANUAL DE USUARIO
## Resumen
Durante la emergencia sanitaria provocada por el COVID-19, se ha observado un notable incremento en la aplicación de nuevas tecnologías al campo de la salud y la investigación. Desde la creación de todo tipo de dispositivos inteligentes destinados a detectar el más mínimo síntoma indicativo de contagio, hasta el diseño de nuevos patrones de investigación en la cura del nuevo coronavirus.

Sin duda, la IA (Inteligencia Artificial) ha estado presente en todas y cada una de las etapas de esta pandemia, e incluso en momentos previos a ella. En este sentido, se trató de una startup canadiense –BlueDot- que, gracias a un algoritmo basado en inteligencia artificial, logró predecirlo. Mediante el procesamiento y análisis de noticias de todos los países del mundo, junto con información relacionada con rutas de vuelos comerciales y brotes de enfermedades, pudieron predecir, no solo la existencia de una enfermedad potencialmente pandémica, sino también el epicentro de la enfermedad. Así mismo, como su trayectoria más inmediata.

Así, la aplicación de la IA en esta pandemia global ha supuesto un antes y un después en el campo epidemiológico, ya que no solo ha permitido establecer un mayor control sobre la propagación del virus, sino que ha participado activamente en el diagnóstico, tratamiento. e investigación para poner fin a este brote lo antes posible.

## Objetivo
Esta aplicación tendrá como objetivo principal que un usuario pueda generar distintos análisis de información basados de un origen de datos (un archivo en Excel) y diferentes variables que se deberán configurar dentro del sistema según sea el ánalisis a realizar.

## Página de Inicio
La página de inicio cuenta con un panel informativo, en donde se podra leer información referente al proyecto y a su funcionamiento.

+ ![](https://i.imgur.com/5iqoPiI.png)

+ ![](https://i.imgur.com/OWUNS7T.png)

## Carga de Datos
Para iniciar con la carga de datos hay que dirigirse al menu superior y seleccionar la opción de "Data", esta nos dirige a una pestaña en donde tenemos la opción de seleccionar un archivo el cual sera la fuente de nuestros datos.

+ ![](https://i.imgur.com/dhT9Bnu.png)

Seleccionamos la opción "Choose" y se abrira un explorador de archivos, unicamente tenemos que seleccionar el archivo y seleccionar la opcion "Upload"

+ ![](https://i.imgur.com/wQGGm7b.png)

## Parametrización de Variables
En el menú de parametrización de variables se despliega la opción de seleccionar la predicción que querramos, depende de la que elijamos se despliegan entradas de texto que tendremos que llenar.

+ ![](https://i.imgur.com/Nbn6EFk.png)

+ ![](https://i.imgur.com/2RtxWEZ.png)

Una vez llenado los parametros solicitados podemos dar click al boton de "Calcular" y automaticamente nos dirige a la seccion de resultados

## Resultados
### Reporte Gráfica
En los reportes contamos con una grafica la cual se despliega despues de ingresar las variables correspondientes, la grafica simboliza las variables (x,y) y las preducciones realizadas por medio de una regresion.

+ ![](https://i.imgur.com/JSvODIX.png)


### Reporte PDF
Adicional a la grafica, se genera un reporte en formato PDF haciendo una interpretacion de los datos calculados, para acceder a el unicamente hay que dar click en la pestaña "Reporte".

+ ![](https://i.imgur.com/GwZFsg5.png)

Si se necesita descargar el documento PDF unicamente hay que darle click al boton "Descargar Reporte" ubicado en la parte inferior izquierda del reporte.

+ ![](https://i.imgur.com/TTsCBkC.png)


# MANUAL TÉCNICO
## Resumen
Durante la emergencia sanitaria provocada por el COVID-19, se ha observado un notable incremento en la aplicación de nuevas tecnologías al campo de la salud y la investigación. Desde la creación de todo tipo de dispositivos inteligentes destinados a detectar el más mínimo síntoma indicativo de contagio, hasta el diseño de nuevos patrones de investigación en la cura del nuevo coronavirus.

Sin duda, la IA (Inteligencia Artificial) ha estado presente en todas y cada una de las etapas de esta pandemia, e incluso en momentos previos a ella. En este sentido, se trató de una startup canadiense –BlueDot- que, gracias a un algoritmo basado en inteligencia artificial, logró predecirlo. Mediante el procesamiento y análisis de noticias de todos los países del mundo, junto con información relacionada con rutas de vuelos comerciales y brotes de enfermedades, pudieron predecir, no solo la existencia de una enfermedad potencialmente pandémica, sino también el epicentro de la enfermedad. Así mismo, como su trayectoria más inmediata.

Así, la aplicación de la IA en esta pandemia global ha supuesto un antes y un después en el campo epidemiológico, ya que no solo ha permitido establecer un mayor control sobre la propagación del virus, sino que ha participado activamente en el diagnóstico, tratamiento. e investigación para poner fin a este brote lo antes posible.

## Objetivo
Esta aplicación tendrá como objetivo principal que un usuario pueda generar distintos análisis de información basados de un origen de datos (un archivo en Excel) y diferentes variables que se deberán configurar dentro del sistema según sea el ánalisis a realizar.

## Regresión Lineal
Este modelo de predicción se basa en la posibilidad de calcular una línea recta que se acomode en la mayor medida posible a las diferentes muestras que se identifican dentro de la población que se toma para el análisis. La forma de calcularlo se basa en que la regresión lineal se enfoca en definir los parámetros que se encuentran o caracterizan una función lineal, y = mx + b, de tal forma que los errores cuadráticos en la medición que se realizan, pueden ser eliminado hasta cierto punto. A la línea definida por la función descrita anteriormente, minimizando la distancia de cada médico a la línea, manualmente no es tan complejo, aunque el propósito de las diferentes soluciones que se presentan es realizar un modelo totalmente automatizado.

Los diferentes datos que se manejan en el informe no solo se tratan de esta forma, además en algunos casos no se tienen en cuenta solo 2 dimensiones para extraer alguna información, pero cuando se trata de datos tridimensionales, muchas veces es preferible optar para un Gradiente Descendente, el cual itera para poder seguir el proceso anterior, de tal manera que se encuentre la línea que mejor se ajuste al contorno definido por las muestras seleccionadas, lo que le otorga un mayor dato computacional, se usa frecuentemente en multidimensional casos.

## Cliente
Del lado del cliente se trabajo con el Framework React JS y se cuenta el siguiente sistema de archivos:

+ ![](https://i.imgur.com/VCp0AXw.png)

### Paginas
En la carpeta "Pages" se encuentran ubicadas las diferentes paginas que se cargaran al iniciar el proyecto de React, estas se componen de un componente principal llamado Menu, el cual se encarga de renderizar las demas paginas.

+ ![](https://i.imgur.com/QtqOAlb.png)

+ ![](https://i.imgur.com/fdrluiv.png)

### Servicios
Los servicios se componen de las diferentes consultas que se realizan al servidor y unicamente lo conforma un archivo llamado "DataService"

+ ![](https://i.imgur.com/BmxzUIE.png)

### Configuraciones
En configuraciones se encuentran archivos que serviran unicamente para ser usados por otras funciones, en este caso se compone unicamente de la url del servidor.

+ ![](https://i.imgur.com/rOcb5lu.png)

## Servidor
Del lado del servidor se trabajó con Python, en un único archivo principal llamado app.py

+ ![](https://i.imgur.com/NUi4eGe.png)

### Librerías
Las librerias utilizadas para el desarrollo del servidor fueron las siguientes:

+ ![](https://i.imgur.com/NUbw3I2.png)

Nótese que para el funcionamiento principal del servidor se utilizó la libreria "Flask".

### Endpoints
Los puntos de acceso al servidor se definieron de la siguiente manera:

+ ![](https://i.imgur.com/MReVWpw.png)

### Regresión Lineal con Sklearn

+ ![](https://i.imgur.com/0wNFt7G.png)

### Regresion Polinomial con Sklearn

+ ![](https://i.imgur.com/E6dLwLd.png)

## Datos del Estudiante

| Carne         | Nombre                      |
| --------      | --------                    |
| 201504220     | José Andres Rodas Arrecis   |
