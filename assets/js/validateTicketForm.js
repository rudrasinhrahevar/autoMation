function validateTicketForm() {
  const subject = document.getElementById("ticketSubject").value.trim();
  const category = document.getElementById("ticketCategory").value;
  const description = document.getElementById("ticketDescription").value.trim();

  // ✅ Basic Regex for subject: letters, numbers, punctuation allowed
  const subjectPattern = /^[a-zA-Z0-9\s.,!?-]{3,100}$/;

  // ✅ Validation Steps
  if (subject === "") {
    Swal.fire("Missing Subject", "Please enter a subject for your ticket.", "warning");
    return false;
  }

  if (!subjectPattern.test(subject)) {
    Swal.fire("Invalid Subject", "Subject must be 3–100 characters long and contain only letters, numbers, and basic punctuation.", "warning");
    return false;
  }

  if (category === "") {
    Swal.fire("Missing Category", "Please select a ticket category.", "warning");
    return false;
  }

  if (description === "") {
    Swal.fire("Missing Description", "Please provide a detailed description of your issue.", "warning");
    return false;
  }

  if (description.length < 15) {
    Swal.fire("Too Short", "Description should be at least 15 characters long.", "warning");
    return false;
  }

  // ✅ Success message
  Swal.fire({
    icon: "success",
    title: "Ticket Submitted!",
    text: "Your support ticket has been submitted successfully.",
    showConfirmButton: false,
    timer: 2000
  });

  // ❌ prevent form reload (you can set true if you actually submit later)
  return false;
}
