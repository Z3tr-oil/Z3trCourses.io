
function login(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
          if (username === "admin" && password === "1234") {
            window.location.href = "index.html";    
            alert("Login successful!");
            
            } 
            else {
            document.getElementById("error").textContent = "Invalid username or password.";
            alert('something went wrong')
            }
};
