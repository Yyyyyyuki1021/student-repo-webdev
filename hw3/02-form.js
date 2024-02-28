// Add your code here
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    let isEmpty = true;
    for (const key in data) {
      if (data[key] !== "") {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      console.log("Form is empty");
    } else {
      console.log(`========= Form Submission =========
            Name: ${data.name}
            Username: ${data.username}
            Email: ${data.email}
            Date of Birth: ${data.dob}
            Preferred Pronouns: ${data.pronouns}`);

      form.reset();
    }
  });
});
