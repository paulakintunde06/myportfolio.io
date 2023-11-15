import { serviceID, templateID, publicKey} from "./confidential.js";

function sendMail() {
     var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,

     }
     console.log(params)

     emailjs.send(serviceID, templateID, params)
          .then(
     res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res)
          alert("your message sent successfully")
     }
).catch(err => console.log(err))
}