let row = document.querySelector(".row");
for (customer of customers) {
  // Conatiner Element
  let parent = document.createElement("div");
  let customerDesc = document.createElement("div");
  customerDesc.classList.add("customer-desc");
  row.appendChild(parent);

  //Images
  let cusImg = document.createElement("img");
  cusImg.src = customer.picture.large;
  parent.classList.add("customer-block");
  parent.appendChild(cusImg);
  parent.appendChild(customerDesc);

  //Customer Names
  let customerName = document.createElement("div");
  customerName.classList.add("customer-name");
  customerDesc.appendChild(customerName);
  customerName.innerHTML = customer.name.first + " " + customer.name.last;

  //Customer Email
  let customerEmail = document.createElement("p");
  customerEmail.classList.add("email");
  customerEmail.innerHTML = customer.email;
  customerDesc.appendChild(customerEmail);

  //Customer Location
  let customerLocation = document.createElement("p");
  customerLocation.classList.add("location");
  customerLocation.innerHTML =
    customer.location.street + " " + customer.location.city;
  customerDesc.appendChild(customerLocation);
  let stateBlock = document.createElement("span");
  stateBlock.innerHTML = nameToAbbr(customer.location.state);
  customerLocation.appendChild(stateBlock);

  //Customer Date of Birth
  let dob = customer.dob;
  let dobFormat = "DOB: " + moment(dob).format("MMMM Do YYYY");
  let dobBlock = document.createElement("p");
  dobBlock.innerHTML = dobFormat;
  customerDesc.appendChild(dobBlock);

  //Customer Registered Year
  let custSince = document.createElement("p");
  let registered = customer.registered;
  let sinceFormat = moment(registered).format("YYYY");
  custSince.classList.add("since");
  customerDesc.appendChild(custSince);
  custSince.innerHTML = "since " + sinceFormat;
}
