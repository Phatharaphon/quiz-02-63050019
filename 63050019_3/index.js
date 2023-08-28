const productsContainer = document.querySelector(".products-container");
const searchField = document.querySelector(".search-field ");

const getData = async () => {
  const response = await fetch("https://dummyjson.com/users?limit=6");
  const responseJson = await response.json();

  const { users } = responseJson;
  console.log(users);

  displayProducts(users);

  searchField.addEventListener("input", (event) => {
    const { value } = event.target;

    const filter = users.filter((el) => {
      //   return el.title.toLowerCase() === value.toLowerCase();
      return (
        el.firstName.toLowerCase().includes(value.toLowerCase()) ||
        el.university.toLowerCase().includes(value.toLowerCase())
      );
    });

    displayProducts(filter);
  });
};
const displayProducts = (arrayData) => {
  productsContainer.innerHTML = "";

  arrayData.forEach((element) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="product-card">
            <img
              src="${element.image}"
              alt="img"
            />
            <div class="card-content">
              <h3>${element.firstName}</h3>
              <p>${element.university}</p>
            </div>
            <div class="card-footer">
              <div>${element.age}</div>
              <div>$ ${element.weight}</div>
            </div>
          </div>`
          
    );
  });
};


getData();