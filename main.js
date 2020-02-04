let row = document.querySelector(".row");
for (customer of customers) {
  let parent = document.createElement("div");
  let customerDesc = document.createElement("div");
  customerDesc.classList.add("customer-desc");
  row.appendChild(parent);
  let cusImg = document.createElement("img");
  cusImg.src = customer.picture.large;
  parent.classList.add("customer-block");
  parent.appendChild(cusImg);
  parent.appendChild(customerDesc);
  let customerName = document.createElement("div");
  customerName.classList.add("customer-name");
  customerDesc.appendChild(customerName);
  customerName.innerHTML = customer.name.first + " " + customer.name.last;
  let customerEmail = document.createElement("p");
  customerEmail.classList.add("email");
  customerEmail.innerHTML = customer.email;
  customerDesc.appendChild(customerEmail);
  let customerLocation = document.createElement("p");
  customerLocation.classList.add("location");
  customerLocation.innerHTML =
    customer.location.street + " " + customer.location.city;
  customerDesc.appendChild(customerLocation);
  let dob = customer.dob;
  let dobFormat = "DOB " + moment(dob).format("MMMM Do YYYY");
  let dobBlock = document.createElement("p");
  dobBlock.innerHTML = dobFormat;
  customerDesc.appendChild(dobBlock);
  let stateBlock = document.createElement("span");
  stateBlock.innerHTML = nameToAbbr(customer.location.state);
  customerLocation.appendChild(stateBlock);
}
