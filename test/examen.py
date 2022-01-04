#SKLEARN
from re import X
# from matplotlib import colors, lines
import pandas as pd
from datetime import date
import numpy as np
from scipy.sparse import data
from sklearn import model_selection
from sklearn.linear_model import LinearRegression
# import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score


#leyendo valores con panda
#dataframe = pd.read_csv('data.csv', encoding='latin-1')
dataframe = pd.read_excel('full_data.xlsx')
dataframe = dataframe.fillna(0)
print(dataframe)
pais = 'Afghanistan'
targetX = 'date'
targetY = 'total_cases'
targetZ = 'location'
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
#?
#X_t, X_test, y_t, y_test = train_test_split(dataframe[independiente], dataframe[target])

#prediccion de Y para valor preciso
predicted = modelo.predict([[30]])

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
# y = a + bx

# y_pred = modelo.predict(X_test)


# plt.scatter(dataframe[independiente], dataframe[target], color='red')
# plt.plot(dataframe[independiente], dataframe["predicted"], color='black')
# plt.title('Notas vs Horas de estudio')
# plt.xlabel('Horas')
# plt.ylabel('Notas')

# plt.show()