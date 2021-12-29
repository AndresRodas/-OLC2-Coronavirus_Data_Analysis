from io import StringIO
from logging import debug
from os import name
from flask import Flask, request, render_template
from flask.json import jsonify
from flask_cors import CORS, cross_origin
import csv

#SKLEARN
from matplotlib import colors, lines
import pandas as pd
import numpy as np
from sklearn import model_selection
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

app = Flask(__name__, static_folder='templates', static_url_path='')
CORS(app)

@app.route('/', methods=['GET'])
@cross_origin()
def func_home():
    test()
    return render_template('index.html')

@app.route('/testeo', methods=['POST'])
@cross_origin()
def func_post():
    #obteniendo FileStorage y convirtiendo a string
    str_vals = request.files['myFile'].read().decode('utf-8')
    #leyendo valores con panda
    dataframe = pd.read_csv(StringIO(str_vals))
    
    target = 'notas'
    #nos quedamos solo con horas X
    independiente = dataframe.drop(columns=target).columns
    modelo = LinearRegression()
    #agregamos variables al modelo
    modelo.fit(X=dataframe[independiente], y=dataframe[target])
    #se genera la linea predictiva y se agrega al frame
    dataframe["predicted"] = modelo.predict(dataframe[independiente])
    prediccion_test = dataframe[["notas", "predicted"]]
    #?
    X_t, X_test, y_t, y_test = train_test_split(dataframe[independiente], dataframe[target])
    
    #prediccion de Y para valor preciso
    predicted = modelo.predict([[10]])
   
    print(predicted)
    print(modelo.coef_) #pendiente b
    print(modelo.intercept_) #punto de corte a
    # y = a + bx

    y_pred = modelo.predict(X_test)

    #plt.scatter(X_test, y_test, color='red')
    #plt.scatter(X_test, y_pred, color='blue')
    #plt.plot(X_t, modelo.predict(X_t), color='black')
    plt.scatter(dataframe[independiente], dataframe[target], color='red')
    plt.plot(dataframe[independiente], dataframe["predicted"], color='black')
    plt.title('Notas vs Horas de estudio')
    plt.xlabel('Horas')
    plt.ylabel('Notas')

    plt.show()


    return "true"

def test():
    print("RUN!")

if __name__ == '__main__':
    app.run(debug=True, port=5000)