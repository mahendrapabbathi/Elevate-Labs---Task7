const API_URL = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("user-list");
const errorDiv = document.getElementById("error");
const reloadBtn = document.getElementById("reload");

async function fetchUsers() {
  userList.innerHTML = "";
  errorDiv.textContent = "";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");

    const users = await response.json();

    users.map(user => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `
        <strong>Name:</strong> ${user.name}<br/>
        <strong>Email:</strong> ${user.email}<br/>
        <strong>Address:</strong> ${user.address.street}, ${user.address.city}
      `;
      userList.appendChild(div);
    });
  } catch (err) {
    errorDiv.textContent = "Failed to fetch data. " + err.message;
  }
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();