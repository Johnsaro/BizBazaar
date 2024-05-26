// Sidebar Link Click Event
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      console.log("Clicked:", event.currentTarget); // Log the clicked element
      console.log("Target:", target); // Log the target URL
      if (target) {
        window.location.href = target;
      }
    });
  });
});

// Get the modal
const modal = document.getElementById("addUserModal");

// Get the button that opens the modal
const btn = document.getElementById("addUserBtn");

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
document.getElementById("addUserForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const profilePicture = document.getElementById("profilePicture").value;
  const role = document.getElementById("role").value;

  addUserCard(fullname, username, profilePicture, role);

  modal.style.display = "none";
});

const addUserCard = (fullname, username, profilePicture, role) => {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `
        <div class="user-info">
            <img src="${profilePicture}" alt="Profile Picture">
            <div class="user-details">
                <p>${fullname}</p>
                <p>@${username.toLowerCase()}</p>
                <p>${role}</p>
            </div>
        </div>
        <div class="dots" onclick="toggleDropdown()">⋮</div>
        <div class="dropdown">
            <a href="#">Remove</a>
            <a href="#">Edit</a>
            <a href="#">Assign Roles</a>
        </div>
    `;
  document.querySelector(".main-grid").appendChild(userCard); // before document.body.appendChild(userCard);
  // new code appended to the .main-grid container,
  // used .querySelector

  console.log(`
  name: ${fullname};
  username: ${username};
  role: ${role};
  `);
};

const toggleDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
};

const updateUserCard = () => {
  const userCard = document.querySelector(".user-card");
  if (userCard) {
    const userDetails = userCard.querySelector(".user-details");

    // Modify user details
    userDetails.innerHTML = `
        <p>New Name</p>
        <p>@newusername</p>
        <p>New Role</p>
    `;

    // You can add more modifications to the user card here
  }
};
// <!--
// const removeUser = () => {
// const userCard = document.querySelector(".user-card");

// if (userCard) {
//   // Remove the user card
//   userCard.remove();
//   // Provide feedback to the user
//   alert("User has been removed.");
// } else {
//   // Display an error message if the user card is not found
//   alert("User card element not found. Unable to remove user.");
// }
// };

// // Call the function to update the user card
// updateUserCard(); -->
// User-card-list Dropdown function
