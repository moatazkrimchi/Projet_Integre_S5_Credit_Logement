import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../style/predictCIH.css'


const Predict = () => {

  var [listDataInserted,setListDataInserted] = useState([])
  var [output,setoutput] = useState("")

  return (
	<div>        
        <h1 className='titre'>Bienvenue au service BMCI</h1>  
        <form onSubmit={(e)=>{e.preventDefault();  
                      var Credit_History =document.getElementById("IDCredit_History");
                      var Gender=document.getElementById("IDGender");
                      var Married=document.getElementById("IDMarried");
                      var Dependents=document.getElementById("IDDependents");
                      var Education_Not_Graduate = document.getElementById('IDEducation_Not_Graduate');
                      var Self_Employed = document.getElementById('IDSelf_Employed');
                      var Property_Area = document.getElementById('IDProperty_Area');
                      var ApplicantIncome=document.getElementById("IDApplicantIncome");
                      var CoapplicantIncome=document.getElementById("IDCoapplicantIncome");
                      var LoanAmount = document.getElementById('IDLoanAmount');
                      var Loan_Amount_Term = document.getElementById('IDLoan_Amount_Term');
                              if(
                                Credit_History.value ==="Credit_History" ||
                                Gender.value=== "Gender" ||
                                Married === "Married" ||
                                Dependents.value === "Dependents" ||
                                Education_Not_Graduate.value === "Education_Not_Graduate"||
                                Self_Employed.value === "Self_Employed"||
                                Property_Area.value === "Property_Area"||
                                ApplicantIncome.value === "0"||
                                CoapplicantIncome.value === "0"||
                                LoanAmount.value === "0"||
                                Loan_Amount_Term.value === "0"
                              ){
                                alert("Remplire tous les champs")
                              }
                              else{
                                axios.post("http://localhost:5000/predict",{  
                                  Credit_History:Credit_History.value,
                                  Gender:Gender.value,
                                  Married:Married.value,
                                  Dependents:Dependents.value,
                                  Education_Not_Graduate:Education_Not_Graduate.value,
                                  Self_Employed:Self_Employed.value,
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
                                Gender.selectedIndex=0
                                Married.selectedIndex=0
                                Dependents.selectedIndex=0
                                Education_Not_Graduate.selectedIndex=0
                                Self_Employed.selectedIndex=0
                                Property_Area.selectedIndex=0
                                ApplicantIncome.value=0
                                CoapplicantIncome.value=0
                                LoanAmount.value=0
                                Loan_Amount_Term.value=0
                                
                              }
                        }}
                      > 
        <select className='op' name="Credit_History"  placeholder="Credit_History"  id="IDCredit_History">
                                          <option selected disabled hidden>Credit_History</option>
                                          <option  >Yes</option>

                                          <option  >No</option>
                                          
     </select>
     <br/>

    <select className='op'  name="Gender"  placeholder="Gender"  id="IDGender">
                                          <option selected disabled hidden>Gender</option>
                                          <option  >Male</option>

                                          <option  >Female</option>
                                          
     </select>
     <br/>

    <select className='op' name="Married" placeholder="Married"  id="IDMarried">
                                           <option selected disabled hidden>Married</option>

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
		
    <select className='op' name="Education_Not Graduate" placeholder="Education_Not Graduate" required="required" id="IDEducation_Not_Graduate">
    <option selected disabled hidden>Education_Not Graduate</option>

                                          <option  >Yes</option>
                                          <option  >No</option>
                                          
     </select>
     <br/>
    <select className='op' name="Self_Employed" placeholder="Self_Employed" required="required" id="IDSelf_Employed">
    <option selected disabled hidden>Self_Employed</option>

                                          <option  >Yes</option>
                                          <option  >No</option>
                                          
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

        <button type="submit" class="btn btn-primary btn-block btn-large"
                        
                        
                  
                          
                          >Predict</button>
    
    <br/>
    <input className='in' placeholder="Prévsion Crédit"  type="text" id="IDOutput" value={output} onChange={(e) => setoutput(e.target.value)} disabled={true}/>
    </form>


   
    </div>
  )
}

export default Predict;