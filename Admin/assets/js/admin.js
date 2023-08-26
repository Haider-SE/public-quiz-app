const getAllRolesAPI = "https://localhost:44383/getAllRoles";
const addUserApi = "https://localhost:44383/addUser";
//variables
const userForm = document.querySelector(".form-add-user");
const role = document.querySelector(".form-Role > .form-select");

document.addEventListener("DOMContentLoaded", () => {
  getAllRoles();
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    AddUser();
  });
});

const getAllRoles = () => {
  const role = document.querySelector(".form-Role > .form-select");

  fetch(getAllRolesAPI)
    .then((response) => response.json()) // This line is added to parse JSON
    .then((data) => {
      // Use 'data' instead of 'response' for JSON data
      data.forEach((element) => {
        // Use 'forEach' to iterate through the data array
        role.innerHTML += `
            <option value="${element.roleID}">${element.roleName}</option>
          `;
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const AddUser = () => {
  userForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    const userData = {
      firstName: userForm.firstName.value,
      lastName: userForm.lastName.value,
      email: userForm.email.value,
      role: role.value,
    };

    fetch(addUserApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header
      },
      mode: "cors", // Add CORS mode
      body: JSON.stringify(userData), // Convert userData to JSON format
    })
      .then((response) => {
        console.log(response);
        // Handle response here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};
