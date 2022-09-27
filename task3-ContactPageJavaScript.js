
          function clearForm() {
            document.getElementsByName("clear").reset();
         }
         function getPromoCode(){
        
            var selectedOption=myform.select[myform.select.selectedIndex].text
            var addPromoCode="-PROMO";
            addPromoCode=selectedOption.concat(addPromoCode);
        document.getElementById("promo").value=addPromoCode;
        
           
         }
        function validate(){
        
            var name=document.getElementById("myName").value;
            var email=document.getElementById("myEmail").value;
            var organization=document.getElementById("myOrganization").value;
            
            if (name==""){
             
               document.getElementById("validationMessage").innerHTML="Please fill all the required fields below";
               document.getElementById("labelText1").innerHTML="Name is Required";
             document.getElementById("labelText1").style.visibility="visible";
             document.getElementById("labelText1").style.color="red"; 
            }
            
            if(email==""){
                
                document.getElementById("validationMessage").innerHTML="Please fill all the required fields below"; 
                document.getElementById("labelText2").innerHTML="Email is Required";
                document.getElementById("labelText2").style.visibility="visible";
                document.getElementById("labelText2").style.color="red"; 
            }
            else{
            var regx=/^([a-z]+)\.([0-9]+)_([a-z]+)@([a-z]+)-([a-z]+)\.([a-z]+)\.([a-z]+)$/;
            if(!regx.test(email))
            {
             document.getElementById("labelText2").innerHTML="Email is InValid";
             document.getElementById("labelText2").style.visibility="visible";
             document.getElementById("labelText2").style.color="red";
            }
         }
         if(organization==""){
            document.getElementById("validationMessage").innerHTML="Please fill all the required fields below";
         }
        }
    
        
         function genderChange(value){
           var gender=value;
           
           
           if (gender=="Female"){
            alert("Hello Lady")
        
            
           }
           else{
        
            myAlert("Hello Sir");
            
           }

         }
        
         


       