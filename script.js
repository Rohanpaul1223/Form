document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
  
    console.log("User Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
  
    alert("Details have been printed to the console!");
  });
  