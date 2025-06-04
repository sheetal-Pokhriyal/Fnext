const registrationform = document.getElementById("registrationform");
if(registrationform){
    registrationform.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms= document.getElementById("terms").checked;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";
   
    if (!fullName || !email || !password || !confirmPassword) {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
    }

    if (!terms) {
        errorMsg.textContent = "You must accept the Terms and Conditions.";
        return;
    }

    
    console.log("Registration successful!");
   
    Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: `Welcome, ${fullName}!`,
        confirmButtonColor: '#3085d6',
   });

    document.getElementById("registrationform").reset();
});
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    console.log("Login successful!");
   
    Swal.fire({
        icon: 'success',
        title: 'Login Successfully!',
        text: `Welcome!`,
        confirmButtonColor: '#3085d6',
   });

    document.getElementById("loginForm").reset();
});
