// form.js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name === "") {
      alert("Por favor, ingresa tu nombre");
      return;
    }
    
    if (email === "") {
      alert("Por favor, ingresa tu email");
      return;
    }
    
    alert("Formulario enviado correctamente");
  });
  