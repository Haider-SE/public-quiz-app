const getAllRolesAPI = "https://localhost:44383/getAllRoles";

document.addEventListener("DOMContentLoaded", () => {
  getAllRoles();
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
