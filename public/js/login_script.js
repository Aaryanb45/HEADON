
    function validateForm() 
    {
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            return false;
        }

        if (password.trim() === "") {
            alert("Please enter your password.");
            return false;
        }

        // Additional validation logic can be added here if needed
        
        // If all validations pass, you can submit the form or proceed with login
        // For now, just displaying an alert to indicate successful validation
        alert("Form submitted successfully!");
    }
