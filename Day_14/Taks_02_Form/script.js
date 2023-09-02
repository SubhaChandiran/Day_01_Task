// createElement
let firstDiv = document.createElement("div");
let form = document.createElement("form");

// CSS
firstDiv.setAttribute("id", "form-container");

// firstname label
let firstNameLabel = document.createElement("label");
firstNameLabel.textContent = "First Name : ";
form.appendChild(firstNameLabel);

// first name input field
let firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text"); // Set the input type to text
firstNameInput.setAttribute("name", "firstname"); // Set a name for the input
firstNameInput.setAttribute("placeholder", "Enter Your First Name");
firstNameInput.setAttribute("required", "true");
form.appendChild(firstNameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// lastname label
let lastNamelabel = document.createElement("label");
lastNamelabel.textContent = "Last Name : ";
form.appendChild(lastNamelabel);

// last name input field
let lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text"); // Set the input type to text
lastNameInput.setAttribute("name", "lastname"); // Set a name for the input
lastNameInput.setAttribute("placeholder", "Enter Your Last Name");
lastNameInput.setAttribute("required", "true");
form.appendChild(lastNameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// address label
let address = document.createElement("label");
address.textContent = "Address : ";
form.appendChild(address);

// address input field
let addressInput = document.createElement("textarea");
addressInput.setAttribute("name", "address"); // Set a name for the textarea
addressInput.setAttribute("placeholder", "Enter Your Address");
addressInput.setAttribute("required", "true");
form.appendChild(addressInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// pincode label
let pincode = document.createElement("label");
pincode.textContent = "Pincode : ";
form.appendChild(pincode);

// pincode input field
let pincodeInput = document.createElement("input");
pincodeInput.setAttribute("type", "number");
pincodeInput.setAttribute("name", "pincode"); // Set a name for the input
pincodeInput.setAttribute("placeholder", "Enter Your Pincode");
pincodeInput.setAttribute("required", "true");
form.appendChild(pincodeInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// state label
let state = document.createElement("label");
state.textContent = "State : ";
form.appendChild(state);

// state input field
let stateInput = document.createElement("input");
stateInput.setAttribute("type", "text");
stateInput.setAttribute("name", "state"); // Set a name for the input
stateInput.setAttribute("placeholder", "Enter Your State");
stateInput.setAttribute("required", "true");
form.appendChild(stateInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// country label
let country = document.createElement("label");
country.textContent = "Country : ";
form.appendChild(country);

// country input field
let countryInput = document.createElement("input");
countryInput.setAttribute("type", "text");
countryInput.setAttribute("name", "Country"); // Set a name for the input
countryInput.setAttribute("placeholder", "Enter Your Country");
countryInput.setAttribute("required", "true");
form.appendChild(countryInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// gender label
let genderLabel = document.createElement("label");
genderLabel.textContent = "Gender : ";
form.appendChild(genderLabel);

// male gender input field
let maleGenderInput = document.createElement("input");
maleGenderInput.setAttribute("type", "radio");
maleGenderInput.setAttribute("name", "gender");
maleGenderInput.setAttribute("value", "male");
maleGenderInput.setAttribute("required", "true");
let maleLabel = document.createElement("label");
maleLabel.textContent = "Male";
form.appendChild(maleLabel);
form.appendChild(maleGenderInput);

// female gender input field
let femaleGenderInput = document.createElement("input");
femaleGenderInput.setAttribute("type", "radio");
femaleGenderInput.setAttribute("name", "gender");
femaleGenderInput.setAttribute("value", "female");
let femaleLabel = document.createElement("label");
femaleLabel.textContent = "Female";
form.appendChild(femaleLabel);
form.appendChild(femaleGenderInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// food label
let food = document.createElement("label");
food.textContent = "Food : ";
form.appendChild(food);

// Array of food options
let foodOptions = [
  { name: "Coconut Chutney", value: "coconut-chutney" },
  { name: "Curry Leaf Rice", value: "curry-leaf-rice" },
  { name: "Pongal", value: "pongal" },
  { name: "Dosa", value: "dosa" },
  { name: "Uttapam", value: "uttapam" },
];

// Create checkboxes for food options
foodOptions.forEach((option) => {
  let foodCheckbox = document.createElement("input");
  foodCheckbox.setAttribute("type", "checkbox");
  foodCheckbox.setAttribute("name", "food");
  foodCheckbox.setAttribute("value", option.value);
  let foodLabel = document.createElement("label");
  foodLabel.textContent = option.name;
  form.appendChild(foodCheckbox);
  form.appendChild(foodLabel);
});
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// Submit button
let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");
form.appendChild(submitButton);

// Error message
let errorText = document.createElement("p");
errorText.style.color = "red";
form.appendChild(errorText);

firstDiv.appendChild(form);
document.body.appendChild(firstDiv);

// Form submission event listener
form.addEventListener("submit", function (event) {
  let selectedFoodCheckboxes = form.querySelectorAll(
    'input[name="food"]:checked'
  );

  if (selectedFoodCheckboxes.length < 2) {
    event.preventDefault(); // Prevent form submission
    errorText.textContent = "Please choose at least 2 food options.";
  } else {
    errorText.textContent = ""; // Clear the error message if there are at least 2 selections
  }
});
