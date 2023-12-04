document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    var firstNameChecked = document.getElementById("firstNameCheckbox").checked;
    var lastNameChecked = document.getElementById("lastNameCheckbox").checked;
    var namePrefixChecked =
      document.getElementById("namePrefixCheckbox").checked;
    var addressChecked = document.getElementById("addressCheckbox").checked;
    var cityChecked = document.getElementById("cityCheckbox").checked;
    var emailChecked = document.getElementById("emailCheckbox").checked;
    var userChecked = document.getElementById("userCheckbox").checked;
    var phoneChecked = document.getElementById("phoneCheckbox").checked;
    var birthdayChecked = document.getElementById("birthdayCheckbox").checked;
    var colorChecked = document.getElementById("colorCheckbox").checked;
    var agentChecked = document.getElementById("agentCheckbox").checked;

    const dndApiUrl = "https://sockpuppet.onrender.com" + "/submit";
    console.log(dndApiUrl);

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
        cityChecked,
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
        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = data.result;
      })
      .catch((error) => {
        console.error("Error:", error);
        const resultContainer = document.getElementById("result");
        resultContainer.textContent = "Error in submitting data.";
      });
  });
});
