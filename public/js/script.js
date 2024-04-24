 function validateForm() {
      var arrivalDate = document.getElementById("arrivalDate").value;
      var departureDate = document.getElementById("departureDate").value;
      var adults = document.getElementById("adults").value;
      var children = document.getElementById("children").value;

      // Simple validation
      if (arrivalDate === "" || departureDate === "" || adults === "" || children === "") {
        alert("Please fill in all fields.");
        return false;
      }

      // Additional validation if needed
      // You can check if arrivalDate is before departureDate, etc.

      return true;
    }
