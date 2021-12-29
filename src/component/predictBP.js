import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Predict = () => {

  var [listDataInserted,setListDataInserted] = useState([])
  var [output,setoutput] = useState("")

  return (
	<div>        
        <h1>Simulation credit</h1>  
        <form onSubmit={(e)=>{e.preventDefault();  
                      var Credit_History =document.getElementById("IDCredit_History");
                      var Education_Not_Graduate = document.getElementById('IDEducation_Not_Graduate');
                      var Self_Employed = document.getElementById('IDSelf_Employed');
                      var ApplicantIncome=document.getElementById("IDApplicantIncome");
                      var LoanAmount = document.getElementById('IDLoanAmount');
                      var Loan_Amount_Term = document.getElementById('IDLoan_Amount_Term');
                              if(
                                Credit_History.value ==="Credit_History" ||
                                Education_Not_Graduate.value === "Education_Not_Graduate"||
                                Self_Employed.value === "Self_Employed"||
                               
                                ApplicantIncome.value === "0"||
                               
                                LoanAmount.value === "0"||
                                Loan_Amount_Term.value === "0"
                              ){
                                alert("Remplire tous les champs")
                              }
                              else{
                                axios.post("http://localhost:5000/predict_BP",{  
                                  Credit_History:Credit_History.value,
                                  Education_Not_Graduate:Education_Not_Graduate.value,
                                  Self_Employed:Self_Employed.value,
                                
                                  ApplicantIncome:ApplicantIncome.value,
                                 
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
                                Education_Not_Graduate.selectedIndex=0
                                Self_Employed.selectedIndex=0
           
                                ApplicantIncome.value=0
                             
                                LoanAmount.value=0
                                Loan_Amount_Term.value=0
                                
                              }
                        }}
                      > 
        <select  name="Credit_History"  placeholder="Credit_History"  id="IDCredit_History">
                                          <option selected disabled hidden>Credit_History</option>
                                          <option  >Yes</option>

                                          <option  >No</option>
                                          
     </select>
     <br/>

   
     <br/>
     <select name="Education_Not Graduate" placeholder="Education_Not Graduate" required="required" id="IDEducation_Not_Graduate">
    <option selected disabled hidden>Education_Not Graduate</option>

                                          <option  >Yes</option>
                                          <option  >No</option>
                                          
     </select>
     <br/>
    <select name="Self_Employed" placeholder="Self_Employed" required="required" id="IDSelf_Employed">
    <option selected disabled hidden>Self_Employed</option>

                                          <option  >Yes</option>
                                          <option  >No</option>
                                          
     </select>
     <br/>

		<input type="text" name="ApplicantIncome" placeholder="ApplicantIncome" id="IDApplicantIncome" required="required" />
    



    <input type="text" name="LoanAmount" placeholder="LoanAmount" id="IDLoanAmount" required="required" />

		<input type="text" name="Loan_Amount_Term" placeholder="Loan_Amount_Term" id="IDLoan_Amount_Term" required="required" />


        <button type="submit" class="btn btn-primary btn-block btn-large"
                        
                        
                  
                          
                          >Predict</button>
    

    <input className="output" type="text" id="IDOutput" value={output} onChange={(e) => setoutput(e.target.value)} disabled={true}/>
    </form>


   
    </div>
  )
}

export default Predict;