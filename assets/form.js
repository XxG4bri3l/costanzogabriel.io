
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


function check(e) {
 // the 2 lines below will stop the default form submit action
  e.preventDefault();
  e.stopPropagation();
  var date = document.getElementById("email").value;
  if (!email) {
    alert("Please fill in all fields");
    return;
  }else {
    sendMail();
  }
}



  

