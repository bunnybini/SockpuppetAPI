let FirstName = "";
let LastName = "";
let NamePrefix = "";
let Address = "";
let Email = "";
let UserName = "";
let Birthday = "";
let FavColor = "";
let Phone = "";
let Agent = "";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
  });
  // -- make carContainers nonvisable
  document.getElementById("cardContainers").style.display = "none";

  document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("loading").textContent = "Loading...";

    console.log("--Submitted");
    var firstNameChecked = document.getElementById("firstNameCheckbox").checked;
    var lastNameChecked = document.getElementById("lastNameCheckbox").checked;
    var namePrefixChecked =
      document.getElementById("namePrefixCheckbox").checked;
    var addressChecked = document.getElementById("addressCheckbox").checked;
    var emailChecked = document.getElementById("emailCheckbox").checked;
    var userChecked = document.getElementById("userCheckbox").checked;
    var phoneChecked = document.getElementById("phoneCheckbox").checked;
    var birthdayChecked = document.getElementById("birthdayCheckbox").checked;
    var colorChecked = document.getElementById("colorCheckbox").checked;
    var agentChecked = document.getElementById("agentCheckbox").checked;

    const dndApiUrl = "https://sockpuppet.onrender.com" + "/submit";
    // remove elment
    document.getElementById("myForm").remove();
    document.getElementById("submitBtn").remove();
    document.getElementById("SECtitle").remove();

    fetch(dndApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstNameChecked,
        lastNameChecked,
        namePrefixChecked,
        addressChecked,
        emailChecked,
        userChecked,
        phoneChecked,
        birthdayChecked,
        colorChecked,
        agentChecked,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("loading").remove();
        // -- make carContainers visable
        document.getElementById("cardContainers").style.display = "grid";

        const message = data.result;
        dataResult = message;
        processResult(message);
      })
      .catch((error) => {
        console.error("Error:", error);
        const cardContainer = document.getElementById("cardContainers");
        cardContainer.textContent = "Error in submitting data.";
      });
  });
});

// This function will process the fetched data and extract information
function processResult(result) {
  let splits = result.split("<br>");

  function splitData(keyword, data) {
    let extractedValue = "";
    data.forEach((item) => {
      if (item.includes(keyword)) {
        let parts = item.split(":");
        extractedValue = parts.length > 1 ? parts[1].trim() : "";
      }
    });
    return extractedValue;
  }

  // Extract specific information
  FirstName = splitData("First name: ", splits);
  LastName = splitData("Last name: ", splits);
  NamePrefix = splitData("Name prefix: ", splits);
  Address = splitData("Address: ", splits);
  Email = splitData("Email: ", splits);
  UserName = splitData("User: ", splits);
  Birthday = splitData("Birth year: ", splits);
  FavColor = splitData("Favorite Color: ", splits);
  Phone = splitData("Phone: ", splits);
  Agent = splitData("Agent: ", splits);

  // Update the HTML with extracted values
  updateHtml();

  console.log("First Name:", FirstName);
  console.log("Last Name:", LastName);
}

function updateHtml() {
  document.getElementById("userName").innerText = UserName;
  document.getElementById("firstname").innerText = FirstName;
  document.getElementById("lastname").innerText = LastName;
  document.getElementById("namePrefix").innerText = NamePrefix;
  document.getElementById("address").innerText = Address;
  document.getElementById("email").innerText = Email;
  document.getElementById("birthday").innerText = Birthday;
  document.getElementById("favColor").innerText = FavColor;
  document.getElementById("phone").innerText = Phone;
  document.getElementById("agent").innerText = Agent;

  if (UserName) {
    document.getElementById("userID").innerText = "User Name";
  }
  if (FirstName) {
    document.getElementById("FristID").innerText = "First Name";
  }
  if (LastName) {
    document.getElementById("LastID").innerText = "Last Name";
  }
  if (NamePrefix) {
    document.getElementById("PreID").innerText = "Name Prefix";
  }
  if (Address) {
    document.getElementById("AddressID").innerText = "Address : ";
  }
  if (Email) {
    document.getElementById("EmailID").innerText = "Email : ";
  }
  if (Birthday) {
    document.getElementById("BirthID").innerText = "Birthday";
  }
  if (FavColor) {
    document.getElementById("FavID").innerText = "Fav Color : ";
  }
  if (Phone) {
    document.getElementById("PhoneID").innerText = "Phone : ";
  }
  if (Agent) {
    document.getElementById("AgentID").innerText = "Agent : ";
  }
}
