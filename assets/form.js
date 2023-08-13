// script.js
function Sendmail() {
  var params= {
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value,


  }
  emailjs.send("service_uv3nr7t", "template_eu45r6r", params).then(function(res{
    alert("Success" + res.status)
  }
    )
}