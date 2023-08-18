function sendMail() 
    
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_uv3nr7t";
    const templateID = "template_aa35hcp";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

function validation(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
if( name ==='' || email ===''){
alert("Please fill all fields...!!!!!!");
return false;
}else if(!(email).match(emailReg)){
alert("Invalid Email...!!!!!!");
return false;
}else{
return true;
}
}

  

