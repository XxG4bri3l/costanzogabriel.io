function sendMail() {
{
  var val = document.getElementById('{!$Component.RenewalForm.configblock.configsecblock.confignewopp.newopp}').value;
  var oval = document.getElementById('{!$Component.RenewalForm.configblock.configsecblock.configopport.existopp}').value;
   if ( val == '' && oval == '') {
    alert('Enter Opportunity Details');
    return false;
    }
    else if ( val != '' && oval != '') {
     alert('Enter either existing opportunity or new opporutnity');
     return false;
     }
  


    
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

   return true;
  }


