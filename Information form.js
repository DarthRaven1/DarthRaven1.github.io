function validateAndDisplay() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    let isValid = true;
  
    // Basic name and address validation (can be made more complex if needed)
    if (!name.trim()) {
      document.getElementById("nameError").textContent = "Please enter your name.";
      isValid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  
    if (!address.trim()) {
      document.getElementById("addressError").textContent = "Please enter your address.";
      isValid = false;
    } else {
      document.getElementById("addressError").textContent = "";
    }
  
    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    // Phone number format validation and formatting
    const phoneRegex1 = /^\d{3}-\d{3}-\d{4}$/;
    const phoneRegex2 = /^\(\d{3}\) \d{3}-\d{4}$/;
    const phoneRegex3 = /^\d{10}$/;
    const phoneRegex4 = /^1?\d{3}-\d{3}-\d{4}$/; // Allows optional leading 1
    const phoneRegex5 = /^1?\(\d{3}\) \d{3}-\d{4}$/; // Allows optional leading 1
    const phoneRegex6 = /^1?\d{10}$/; // Allows optional leading 1
  
    let formattedPhone = "";
  
    if (phoneRegex1.test(phone)) {
      formattedPhone = `1+(${phone.substring(0, 3)})-${phone.substring(4, 7)}-${phone.substring(8)}`;
    } else if (phoneRegex2.test(phone)) {
      formattedPhone = `1+(${phone.substring(1, 4)})-${phone.substring(6, 9)}-${phone.substring(10)}`;
    } else if (phoneRegex3.test(phone)) {
      formattedPhone = `1+(${phone.substring(0, 3)})-${phone.substring(3, 6)}-${phone.substring(6)}`;
    } else if (phoneRegex4.test(phone)) {
      const cleanedPhone = phone.startsWith('1') ? phone.substring(1) : phone;
      formattedPhone = `1+(${cleanedPhone.substring(0, 3)})-${cleanedPhone.substring(4, 7)}-${cleanedPhone.substring(8)}`;
    } else if (phoneRegex5.test(phone)) {
      const cleanedPhone = phone.startsWith('1') ? phone.substring(2) : phone;
      formattedPhone = `1+(${cleanedPhone.substring(0, 3)})-${cleanedPhone.substring(5, 8)}-${cleanedPhone.substring(9)}`;
    } else if (phoneRegex6.test(phone)) {
      const cleanedPhone = phone.startsWith('1') ? phone.substring(1) : phone;
      formattedPhone = `1+(${cleanedPhone.substring(0, 3)})-${cleanedPhone.substring(3, 6)}-${cleanedPhone.substring(6)}`;
    } else {
      document.getElementById("phoneError").textContent = "Please enter a valid US phone number format (e.g., 123-456-7890, (123) 456-7890, 1234567890).";
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("phoneError").textContent = "";
      document.getElementById("displayName").textContent = name;
      document.getElementById("displayAddress").textContent = address;
      document.getElementById("displayEmail").textContent = email;
      document.getElementById("displayPhone").textContent = formattedPhone;
      document.getElementById("displayInfo").style.display = "block";
      document.getElementById("userInfoForm").reset(); // Clear the form after successful submission
    } else {
      document.getElementById("displayInfo").style.display = "none"; // Ensure info is hidden if there are errors
    }
  }