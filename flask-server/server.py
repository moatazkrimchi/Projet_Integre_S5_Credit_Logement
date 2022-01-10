from types import MethodType
from flask_cors.decorator import cross_origin
from flask_mysqldb import MySQL
import numpy as np
from flask import Flask, request, jsonify, render_template, json
import pickle
from flask_cors import CORS, cross_origin
import pandas as pd


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#base de données

app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = "root"
app.config['MYSQL_DB'] = "flaskapp"

mysql = MySQL(app)


model = pickle.load(open('prevision_credit.pkl', 'rb'))
model_BP = pickle.load(open('prevision_creditDT_BP.pkl', 'rb'))
model_CIH = pickle.load(open('prevision_creditRF_CIH.pkl', 'rb'))

# Menbers API Route
@app.route('/predict',methods=['POST','GET'])
@cross_origin()
def predict():

        data = request.get_json()
        data_cat = [data["Credit_History"],data["Gender"],data["Married"],data["Dependents"],data["Education_Not_Graduate"],data["Self_Employed"],data["Property_Area"]]
        list = []
        for v in data_cat:
            if (v == "Yes" or v == "Male"):
                v = 1
                list.append(v)
            elif (v == "No" or v == "Female"):
                v = 0
                list.append(v)
            elif (v == "0") :
                v = [0,0,0]
                list = list + v
            elif (v == "1") :
                v = [1,0,0]
                list = list + v
            elif (v == "2") :
                v = [0,1,0]
                list = list + v
            elif (v == "+3") :
                v = [0,0,1]
                list = list + v
            elif (v == "Semiurban") :
                v = [1,0]
                list = list + v
            elif (v == "Rural") :
                v = [0,0]
                list = list + v
            elif (v == "Urban") :
                v = [0,1]
                list = list + v  
        list.append(data["ApplicantIncome"])
        list.append(data["CoapplicantIncome"])
        list.append(data["LoanAmount"])
        list.append(data["Loan_Amount_Term"])
        print(list)
        final_features = [np.array(list, dtype=float)]
        prediction = model.predict(final_features)
        output = round(prediction[0], 2)
        print(output)

        # database
        list.append(str(output))
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO credit(Credit_History, Gender, Married, Dependents, Education_Not_Graduate, Self_Employed, Property_Area, ApplicantIncome, CoapplicantIncome , LoanAmount, Loan_Amount_Term, resultat) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",(data["Credit_History"],data["Gender"],data["Married"],data["Dependents"],data["Education_Not_Graduate"],data["Self_Employed"],data["Property_Area"],data["ApplicantIncome"],data["CoapplicantIncome"],data["LoanAmount"],data["Loan_Amount_Term"],output))
        mysql.connection.commit()
        cur.close()
        if(output == 1):
            output = "Crédit accordé"
        else :
            output = "Crédit non accordé"    
        
        return {'value' : str(output) }


@app.route('/predict_BP',methods=['POST','GET'])
@cross_origin()
def predict_BP():

        data = request.get_json()
        data_cat = [data["Credit_History"],data["Education_Not_Graduate"],data["Self_Employed"]]
        list = []
        for v in data_cat:
            if (v == "Yes" or v == "Male"):
                v = 1
                list.append(v)
            elif (v == "No" or v == "Female"):
                v = 0
                list.append(v)
    
        list.append(data["ApplicantIncome"])
        list.append(data["LoanAmount"])
        list.append(data["Loan_Amount_Term"])
        print(list)
        final_features = [np.array(list, dtype=float)]
        prediction = model_BP.predict(final_features)
        output = round(prediction[0], 2)
        print(output)

        # database
        list.append(str(output))
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO creditbp(Credit_History, Education_Not_Graduate, Self_Employed,ApplicantIncome, LoanAmount, Loan_Amount_Term, resultat) VALUES(%s, %s, %s, %s, %s, %s, %s)",(data["Credit_History"],data["Education_Not_Graduate"],data["Self_Employed"],data["ApplicantIncome"],data["LoanAmount"],data["Loan_Amount_Term"],output))
        mysql.connection.commit()
        cur.close()

       
        if(output == 1):
            output = "Crédit accordé"
        else :
            output = "Crédit non accordé"    
        
        return {'value' : str(output) }





# Menbers API Route
@app.route('/predict_CIH',methods=['POST','GET'])
@cross_origin()
def predict_CIH():

        data = request.get_json()
        data_cat = [data["Credit_History"],data["Dependents"],data["Property_Area"]]
        list = []
        for v in data_cat:
            if (v == "Yes" or v == "Male"):
                v = 1
                list.append(v)
            elif (v == "No" or v == "Female"):
                v = 0
                list.append(v)
            elif (v == "0") :
                v = [0,0,0]
                list = list + v
            elif (v == "1") :
                v = [1,0,0]
                list = list + v
            elif (v == "2") :
                v = [0,1,0]
                list = list + v
            elif (v == "+3") :
                v = [0,0,1]
                list = list + v
            elif (v == "Semiurban") :
                v = [1,0]
                list = list + v
            elif (v == "Rural") :
                v = [0,0]
                list = list + v
            elif (v == "Urban") :
                v = [0,1]
                list = list + v  
        list.append(data["ApplicantIncome"])
        list.append(data["CoapplicantIncome"])
        list.append(data["LoanAmount"])
        list.append(data["Loan_Amount_Term"])
        print(list)
        final_features = [np.array(list, dtype=float)]
        prediction = model_CIH.predict(final_features)
        output = round(prediction[0], 2)
        print(output)

         # database
        list.append(str(output))
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO creditcih(Credit_History, Dependents, Property_Area, ApplicantIncome, CoapplicantIncome , LoanAmount, Loan_Amount_Term, resultat) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)",(data["Credit_History"],data["Dependents"],data["Property_Area"],data["ApplicantIncome"],data["CoapplicantIncome"],data["LoanAmount"],data["Loan_Amount_Term"],output))
        mysql.connection.commit()
        cur.close()

       
        if(output == 1):
            output = "Crédit accordé"
        else :
            output = "Crédit non accordé"    
        
        return {'value' : str(output) }



@app.route('/vadmin',methods=['POST','GET'])
@cross_origin()
def vadmin():
        # database
        cur = mysql.connection.cursor()
        cur.execute("SELECT count(GENDER) from credit where GENDER='male'")
        male = cur.fetchall()
        cur.execute("SELECT count(GENDER) from credit where GENDER='Female'")
        female = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        data =[male[0][0],female[0][0]]
         
        response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
             )
        
        return response






if __name__ == "__main__":
    app.run(debug=True)