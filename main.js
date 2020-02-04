let row = document.querySelector(".row");
for (customer of customers) {
  let parent = document.createElement("div");
  row.appendChild(parent);
  let cusImg = document.createElement("img");
  console.log(cusImg);
  cusImg.src = customer.picture.large;
  parent.classList.add("customer-block");
  console.log(cusImg);
  parent.appendChild(cusImg);
}
