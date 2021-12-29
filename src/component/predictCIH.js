import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../style/predictCIH.css'


const Predict = () => {

  var [listDataInserted,setListDataInserted] = useState([])
  var [output,setoutput] = useState("")

  return (
	<div>        
        <h1  className='titre'><strong>Bienvenue au service CIH Bank</strong></h1> 

            


        <form onSubmit={(e)=>{e.preventDefault();  
                      var Credit_History =document.getElementById("IDCredit_History");
                      
                      var Dependents=document.getElementById("IDDependents");
                     
                      var Property_Area = document.getElementById('IDProperty_Area');
                      var ApplicantIncome=document.getElementById("IDApplicantIncome");
                      var CoapplicantIncome=document.getElementById("IDCoapplicantIncome");
                      var LoanAmount = document.getElementById('IDLoanAmount');
                      var Loan_Amount_Term = document.getElementById('IDLoan_Amount_Term');
                              if(
                                Credit_History.value ==="Credit_History" ||
                               
                                Dependents.value === "Dependents" ||
                                
                                Property_Area.value === "Property_Area"||
                                ApplicantIncome.value === "0"||
                                CoapplicantIncome.value === "0"||
                                LoanAmount.value === "0"||
                                Loan_Amount_Term.value === "0"
                              ){
                                alert("Remplire tous les champs")
                              }
                              else{
                                axios.post("http://localhost:5000/predict_CIH",{  
                                  Credit_History:Credit_History.value,
                                 
                                  Dependents:Dependents.value,
                                  
                                  Property_Area:Property_Area.value,
                                  ApplicantIncome:ApplicantIncome.value,
                                  CoapplicantIncome:CoapplicantIncome.value,
                                  LoanAmount:LoanAmount.value,
                                  Loan_Amount_Term:Loan_Amount_Term.value
                                })
                    .then(
                      res =>{
                        console.log(res);
                        setoutput(res.data.value)
                      }
                    ).catch(
                      error => {
                        console.log(error)
                      }
                    )        
                                Credit_History.selectedIndex=0
                               
                                Dependents.selectedIndex=0
                               
                                Property_Area.selectedIndex=0
                                ApplicantIncome.value=0
                                CoapplicantIncome.value=0
                                LoanAmount.value=0
                                Loan_Amount_Term.value=0
                                
                              }
                        }}
                      > 
        <select  className='op'  name="Credit_History"  placeholder="Credit_History"  id="IDCredit_History">
                                          <option selected disabled hidden>Credit_History</option>
                                          <option  >Yes</option>

                                          <option  >No</option>
                                          
     </select>
     <br/>

    
 
     
    <select className='op' name="Dependents" placeholder="Dependents" required="required" id="IDDependents">
    <option selected disabled hidden>Dependents</option>

                                          <option  >0</option>
                                          <option  >1</option>
                                          <option  >2</option>
                                          <option  >+3</option>
                                          
     </select>
     <br/>
		
   

    <select className='op' name="Property_Area" placeholder="Property_Area" required="required" id="IDProperty_Area">
    <option selected disabled hidden>Property_Area</option>

                                          <option  >Semiurban</option>
                                          <option  >Rural</option>
                                          <option  >Urban</option>

                                          
     </select>
     <br/>

		<input className='in' type="text" name="ApplicantIncome" placeholder="ApplicantIncome" id="IDApplicantIncome" required="required" />
    
    <br/>


    <input className='in' type="text" name="CoapplicantIncome" placeholder="CoapplicantIncome" id="IDCoapplicantIncome"/>
    <br/>
    <input className='in' type="text" name="LoanAmount" placeholder="LoanAmount" id="IDLoanAmount" required="required" />
    <br/>
		<input className='in' type="text" name="Loan_Amount_Term" placeholder="Loan_Amount_Term" id="IDLoan_Amount_Term" required="required" />
    <br/>

        
    

    <br/>
    <button type="submit" class="btn btn-primary btn-block btn-large"
                        
                        
                  
                          
                        >Predict</button>

<br/>
<br/>

<input className='in' type="text" name="Prévsion Crédit" placeholder="Prévsion Crédit" id="IDOutput" value={output} onChange={(e) => setoutput(e.target.value)} disabled={true}/>


    </form>
    




  

   
    </div>
  )
}

export default Predict;