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
}

console.log(customers);
