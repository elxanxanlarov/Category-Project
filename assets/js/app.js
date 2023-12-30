function fetchProducts() {
  let cards = document.querySelector(".cards");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let { title, price, image } = element;

        cards.innerHTML += `
          <div class="card-item">
            <div class="card__img">
              <img src="${image}" alt="Alt" />
            </div>
            <div class="card__content">
              <p>${title}</p>
              <div class="card__content-footer">
                <span class="card__content-footer-price">${price}</span>
                <span class="card__content-footer-icon">
                  <i class="fa-solid fa-bag-shopping"></i>
                </span>
              </div>
            </div>
          </div>
        `;
      });
    });
}

fetchProducts()

//! Event listeners

let categoryItems = document.querySelector(".category__items");
let menuSection = document.querySelector(".menu__section");
let headerIcon = document.querySelector(".header__icon");
let menuCancelIcon = document.querySelector(".menu__canel__icon");



headerIcon.addEventListener("click", function () {
  menuSection.classList.add("active");
});

menuCancelIcon.addEventListener("click", function () {
  menuSection.classList.remove("active");
});




// ! filterleme


let  category__item=document.querySelectorAll(".category__item")
 
  category__item.forEach((element)=>{
    element.addEventListener('click',()=>{
      let newCategoryText=element.innerHTML
fetchProducts(newCategoryText);


    })
  })
  function filterCategories(categories){
    fetch(`https://fakestoreapi.com/products/categories/${categories}`)
      .then((res)=>res.json())
      .then((data) => {
        data.forEach((element) => {
          console.log(element);
          let { title, price, image } = element;
  
          cards.innerHTML += `
            <div class="card-item">
              <div class="card__img">
                <img src="${image}" alt="Alt" />
              </div>
              <div class="card__content">
                <p>${title}</p>
                <div class="card__content-footer">
                  <span class="card__content-footer-price">${price}</span>
                  <span class="card__content-footer-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </span>
                </div>
              </div>
            </div>
          `;
        });
      });
  }

  
