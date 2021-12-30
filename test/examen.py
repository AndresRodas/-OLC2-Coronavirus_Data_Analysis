#SKLEARN
from re import X
from matplotlib import colors, lines
import pandas as pd
import numpy as np
from sklearn import model_selection
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split


#leyendo valores con panda
dataframe = pd.read_csv('data.csv', encoding='latin-1')
targetX = 'Anio'
targetY = 'Republica'
#nos quedamos solo con horas X
#independiente = dataframe.drop(columns=target).columns
modelo = LinearRegression()
#agregamos variables al modelo
modelo.fit(X=dataframe[[targetX]], y=dataframe[[targetY]])
#se genera la linea predictiva y se agrega al frame
dataframe["predicted"] = modelo.predict(dataframe[[targetX]])
prediccion_test = dataframe[[targetX, targetY, "predicted"]]
print(prediccion_test)
#?
#X_t, X_test, y_t, y_test = train_test_split(dataframe[independiente], dataframe[target])

#prediccion de Y para valor preciso
predicted = modelo.predict([[2050]])

print(predicted)
print('*****PENDIENTE*****')
print(modelo.coef_) #pendiente b
print('*****CORTE*****')
print(modelo.intercept_) #punto de corte a
# y = a + bx

# y_pred = modelo.predict(X_test)


# plt.scatter(dataframe[independiente], dataframe[target], color='red')
# plt.plot(dataframe[independiente], dataframe["predicted"], color='black')
# plt.title('Notas vs Horas de estudio')
# plt.xlabel('Horas')
# plt.ylabel('Notas')

# plt.show()