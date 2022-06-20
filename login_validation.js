// Login Validation

function validateForm() {
    let login_id = document.getElementById('name_id').value;
    let password_id = document.getElementById('pass_id').value;
    if (login_id == '' && password_id == ''){
      alert("Textfields must be filled out");
    }
    else if (login_id == '') {
      alert("Username must be filled out");
    }
    else if (password_id == ''){
        alert("Password must be filled out");
    }
    else if (login_id != "Annie Peterson" && password_id != "annie123"){
        alert("Invalid credentials");
    }
    else if (login_id != "Annie Peterson"){
        alert("Invalid Username.");
    }
    else if (password_id != "annie123"){
        alert("Invalid Password");
    }
    else{
        window.location.href = "dashboard.html";
    }
}