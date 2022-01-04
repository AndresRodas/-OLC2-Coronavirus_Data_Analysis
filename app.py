from io import StringIO
from os import name
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
from scipy.sparse import data

#SKLEARN
from sklearn.preprocessing import PolynomialFeatures
import pandas as pd
import numpy as np
from sklearn import model_selection
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from datetime import datetime as dt

app = Flask(__name__, static_folder='templates', static_url_path='')
CORS(app)

@app.route('/', methods=['GET'])
@cross_origin()
def func_home():
    return render_template('index.html')

@app.route('/report1/<var_x>/<var_y>/<var_z>/<pred>/<pais>', methods=['POST'])
@cross_origin()
def rep1(var_x, var_y, var_z, pred, pais):
    pred_tmp = dt.strptime(pred, '%Y-%m-%d').date().toordinal()
    #obteniendo FileStorage y convirtiendo a string
    str_vals = request.files['myFile'].read().decode('utf-8')
    #leyendo valores con panda
    dataframe = pd.read_csv(StringIO(str_vals))
    dataframe = dataframe.loc[dataframe[var_z] == pais]

    dataframe['date_ordinal'] = pd.to_datetime(dataframe[var_x]).apply(lambda date: date.toordinal())

    x = np.asarray(dataframe['date_ordinal']).reshape(-1, 1)
    y = dataframe[var_y]

    """Configurar regresión polinomial"""
    pf = PolynomialFeatures(degree = 2)
    x_trans = pf.fit_transform(x)

    regr = LinearRegression()
    regr.fit(x_trans, y)

    y_pred = regr.predict(x_trans)
    dataframe["predict"] = y_pred
    rmse = np.sqrt(mean_squared_error(y, y_pred))
    r2 = r2_score(y, y_pred)

    """Predicción"""
    x_new_min = pred_tmp
    x_new_max = pred_tmp
    x_new = np.linspace(x_new_min, x_new_max, 10)
    x_new = x_new[:, np.newaxis]

    x_trans = pf.fit_transform(x_new)

    ret_val = { 
        'x': dataframe[var_x].values.tolist(), 
        'y': dataframe[var_y].values.tolist(), 
        'predict_list': dataframe['predict'].values.tolist(),
        'predict_val': regr.predict(x_trans)[0],
        'pendiente': regr.coef_[len(regr.coef_)-1],
        'rmse': rmse,
        'r2': r2
        }
    return jsonify(ret_val) 

@app.route('/report2/<targetX>/<targetY>/<targetZ>/<pred>/<pais>', methods=['POST'])
@cross_origin()
def rep2(targetX, targetY, targetZ, pred, pais):
    x_tmp = targetX
    pred_tmp = dt.strptime(pred, '%Y-%m-%d').date().toordinal()

    #obteniendo FileStorage y convirtiendo a string
    str_vals = request.files['myFile'].read().decode('utf-8')
    #leyendo valores con panda
    dataframe = pd.read_csv(StringIO(str_vals))

    # pais = 'Afghanistan'
    # targetX = 'date'
    # targetY = 'total_cases'
    # targetZ = 'location'
    dataframe = dataframe.loc[dataframe[targetZ] == pais]
    dataframe['date_ordinal'] = pd.to_datetime(dataframe[targetX]).apply(lambda date: date.toordinal())

    targetX = 'date_ordinal'
    #targetY = dataframe[['total_cases']]
    print(targetX)
    print(targetY)
    print(dataframe)
    #nos quedamos solo con horas X
    #independiente = dataframe.drop(columns=target).columns
    modelo = LinearRegression()
    #agregamos variables al modelo
    modelo.fit(X=dataframe[[targetX]], y=dataframe[[targetY]])
    #se genera la linea predictiva y se agrega al frame
    dataframe["predicted"] = modelo.predict(dataframe[[targetX]])
    prediccion_test = dataframe[[targetX, targetY, "predicted"]]
    print(prediccion_test)
    #prediccion de Y para valor preciso
    predicted = modelo.predict([[pred_tmp]])
    #err
    errorcito = mean_squared_error(dataframe[[targetY]], dataframe[["predicted"]])
    ##asdsad
    rmse = np.sqrt(errorcito)
    r2 = r2_score(dataframe[[targetY]], dataframe[["predicted"]])
    print(predicted)
    print('*****PENDIENTE*****')
    print(modelo.coef_) #pendiente b
    print('*****CORTE*****')
    print(modelo.intercept_) #punto de corte a
    print('*****ERROR*****')
    print(errorcito)
    ret_val = { 
        'x': dataframe[[x_tmp]].values.tolist(), 
        'y': dataframe[targetY].values.tolist(), 
        'predict_list': dataframe['predicted'].values.tolist(),
        'predict_val': predicted[0][0],
        'pendiente': modelo.coef_[len(modelo.coef_)-1][0],
        'error': errorcito,
        'rmse': rmse,
        'r2': r2
        }
    return jsonify(ret_val) 



def lineal(x, y, pred, dataframe):
    #variables
    var_ind_x = x
    var_dep_y = y
    var_pred = pred
    #nos quedamos solo con horas X
    modelo = LinearRegression()
    #agregamos variables al modelo
    modelo.fit(X=dataframe[[var_ind_x]], y=dataframe[[var_dep_y]])
    #se genera la linea predictiva y se agrega al frame
    dataframe["predicted"] = modelo.predict(dataframe[[var_ind_x]])
    #prediccion_test = dataframe[["notas", "predicted"]]
    X_t, X_test, y_t, y_test = train_test_split(dataframe[[var_ind_x]], dataframe[[var_dep_y]])
    
    #prediccion de Y para valor preciso
    predicted = modelo.predict([[var_pred]])
   
    print(predicted)
    print(modelo.coef_) #pendiente b
    print(modelo.intercept_) #punto de corte a
    # y = a + bx

    y_pred = modelo.predict(X_test)

def polinomial(var_x, var_y, pred, dataframe):

    x = np.asarray(dataframe[var_x]).reshape(-1, 1)
    y = dataframe[var_y]

    """Configurar regresión polinomial"""
    pf = PolynomialFeatures(degree = 2)
    x_trans = pf.fit_transform(x)

    regr = LinearRegression()
    regr.fit(x_trans, y)

    y_pred = regr.predict(x_trans)
    dataframe["predict"] = y_pred
    rmse = np.sqrt(mean_squared_error(y, y_pred))
    r2 = r2_score(y, y_pred)

    print('RMSE: ', rmse)
    print('R^2: ', r2)

    """Predicción"""
    x_new_min = pred
    x_new_max = pred
    x_new = np.linspace(x_new_min, x_new_max, 50)
    x_new = x_new[:, np.newaxis]

    x_trans = pf.fit_transform(x_new)
    print("****************PREDICT*********************")
    print(regr.predict(x_trans)[0])
    print("*************DATAFRAME*********************")
    print(dataframe)



if __name__ == '__main__':
    app.run(debug=True, port=5000)