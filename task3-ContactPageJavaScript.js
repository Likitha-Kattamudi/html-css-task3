
          function clearForm() {
            document.getElementsByName("clear").reset();
         }
         function getPromoCode(){
        
            var selectedOption=myform.select[myform.select.selectedIndex].text
            var addPromoCode="-PROMO";
            addPromoCode=selectedOption.concat(addPromoCode);
        document.getElementById("myPromoCode").value=addPromoCode;
        
           
         }
        function validate(){
      
        
            var name=document.getElementById("myName").value;
            var email=document.getElementById("myEmail").value;
            var organization=document.getElementById("myOrganization").value;
            
            var telephoneNo=document.getElementById("myTelephoneNo").value;
            
            var city=document.getElementById("myCity").value;
            
            var promoCode=document.getElementById("myPromoCode").value;
            
            var webSiteAddress=document.getElementById("myWebSiteAddress").value;
            
            var myLikings=document.getElementById("myLikings").value;
            
            var aboutOrganisation=document.getElementById("aboutOrganisation").value;
            var female=document.getElementById("female");
            var male=document.getElementById("male");
            var modeIsEmail=document.getElementById("modeIsEmail");
      
            var phone=document.getElementById("phone");
            var both=document.getElementById("both");
            var state=myform.select[myform.select.selectedIndex].text;
            
            
            if (name==""){
             
               document.getElementById("validationMessage").innerHTML="Please fill all the required fields below";
               document.getElementById("labelText1").innerHTML="Name is Required";
             document.getElementById("labelText1").style.visibility="visible";
             document.getElementById("labelText1").style.color="red"; 
            }
            if(organization==""){
               document.getElementById("validationMessage").innerHTML="Please fill all the required fields below";
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
            if(female.checked==true){
               localStorage.setItem('gender',female.value);
            }
            if(male.checked==true){
               localStorage.setItem('gender',male.value);
            }
            if(modeIsEmail.checked==true){
               localStorage.setItem('mode',modeIsEmail.value);
            }
            if(phone.checked==true){
               localStorage.setItem('mode',phone.value);
            }
            if(both.checked==true){
               localStorage.setItem('mode',both.value);
            }
         
            localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('organization',organization);
            localStorage.setItem('telephoneNo',telephoneNo);
            localStorage.setItem('city',city);
            localStorage.setItem('state',state);
            localStorage.setItem('promoCode',promoCode);
            localStorage.setItem('webSiteAddress',webSiteAddress);
            localStorage.setItem('aboutOrganisation',aboutOrganisation);
            localStorage.setItem('myLikings',myLikings);
         }
         
        
    
        
         function genderChange(value){
           var gender=value;
           
           
           if (gender=="female"){
            alert("Hello Lady")
           }
           else{
        
            alert("Hello Sir");
            
           }
         }
         function loadData(){
             {
                 document.getElementById("myName").value=localStorage.getItem('name');
                 document.getElementById("myEmail").value=localStorage.getItem('email');
                 document.getElementById("myOrganization").value=localStorage.getItem('organization');
                 document.getElementById("myTelephoneNo").value=localStorage.getItem('telephoneNo');
                 document.getElementById("myCity").value=localStorage.getItem('city');
                 document.getElementById("myPromoCode").value=localStorage.getItem('promoCode');
                 document.getElementById("myWebSiteAddress").value=localStorage.getItem('webSiteAddress');
                 document.getElementById("myLikings").value=localStorage.getItem('myLikings');
                 document.getElementById("aboutOrganisation").value=localStorage.getItem('aboutOrganisation');
                 //document.getElementById("myGender").value=localStorage.getItem('gender');
                 document.getElementById("myState").value=localStorage.getItem('state');
                 if(localStorage.getItem('mode')==modeIsEmail.value){
                  variableToCheck=document.getElementById("modeIsEmail");
                  variableToCheck.checked=true;
                 }
                 if(localStorage.getItem('mode')==phone.value){
                  variableToCheck=document.getElementById("phone");
                  variableToCheck.checked=true;
                 }
                 if(localStorage.getItem('mode')==both.value){
                  variableToCheck=document.getElementById("both");
                  variableToCheck.checked=true;
                 }
                 if(localStorage.getItem('gender')==female.value){
                  variableToCheck=document.getElementById("female");
                  variableToCheck.checked=true;
                 }
                 if(localStorage.getItem('gender')==male.value){
                  variableToCheck=document.getElementById("male");
                  variableToCheck.checked=true;
                 }
                 
             }
         }
        
         


       