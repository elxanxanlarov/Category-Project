  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    cards.innerHTML=""
      data.forEach((element) => {
      getData(element)
      // cardAddClick(element)
      // console.log(element);
      });
    });



console.log();
//! Event listeners
let categoryItems = document.querySelectorAll(".category__item");
let menuSection = document.querySelector(".menu__section");
let headerIcon = document.querySelector(".header__icon");
let menuCancelIcon = document.querySelector(".menu__canel__icon");
let menuCardBlock=document.querySelector('.menu__card__container')
let cards = document.querySelector(".cards");
let menuButton=document.querySelector('.menu__button')

let result=[]
// ! click

  categoryItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
      console.log(item.innerHTML);
      let url=item.textContent.toLowerCase();
      fetch(`https://fakestoreapi.com/products/category/${url}`)
      .then((res)=>res.json())
      .then(categorys=>{
        cards.innerHTML=""
        categorys.forEach(categoryData=>{
          getData(categoryData)
        })
      })
    })
    })

    function cardAddClick(e){
  let cardBlock=e.parentElement.parentElement.parentElement
  menuButton.classList.remove('dp__none')
  menuSection.classList.add("active");
  fetch(`https://fakestoreapi.com/products/${cardBlock.id}`)
  .then(res=>res.json())
  .then(product=>{
    let productPrice=product.price
    menuCardBlock.innerHTML+=`<div class="menu__cards__block">
    <div class="menu__img__block">
      <img src="${product.image}" alt="">
    </div>
    <div class="menu__card__info__block">
      <p class="menu__card__title">${product.title.substring(0, 25).concat('...')}</p>
      <div class="menu__price__input__block">
        <p><span class="menu__price">${productPrice}</span>$</p>
        <input value=1 type="number" onchange='updatePrice(this,${productPrice})'>
      </div>
    </div>`
  })
    }
    function updatePrice(e,price){
    let priceSpan=e.parentElement.firstElementChild.firstElementChild
    priceSpan.textContent=Number(e.value * price).toFixed(2)
    console.log(e.value);
    }
// ! get data
function getData(card){
  let {title,price,image,id}=card
  cards.innerHTML+=`
<div class="card-item" id='${id}' >
<div class="card__img">
  <img src="${image}" alt="Alt" />
</div>
<div class="card__content">
  <p>${title}</p>
  <div class="card__content-footer">
    <span class="card__content-footer-price">${price}</span>
    <span onclick="cardAddClick(this)" class="card__content-footer-icon">
      <i class="fa-solid fa-bag-shopping"></i>
    </span>
  </div>
</div>
</div>
`
}
// function search(serchTherm, key, data){
//     serchTherm=serchTherm.toLowerCase()
// let filterData=data.filter(item=>{
// let currentItemValue=item[key].toLowerCase();
// return currentItemValue.includes(serchTherm)
// })
// return filterData
// }

headerIcon.addEventListener("click", function () {
  menuSection.classList.add("active");
});
menuCancelIcon.addEventListener("click", function () {
  menuSection.classList.remove("active");
});




























// ! filterleme
// let  category__item=document.querySelectorAll(".category__item")
 
//   category__item.forEach((element)=>{
//     element.addEventListener('click',()=>{
//       let newCategoryText=element.innerHTML
// fetchProducts(newCategoryText);


//     })
//   })
























// filterCategories()


  // function filterCategories(categories){
  //   fetch(`https://fakestoreapi.com/products/categories/${categories}`)
  //     .then((res)=>res.json())
  //     .then((data) => {
  //       data.forEach((element) => {
  //         console.log(element);
  //         let { title, price, image } = element;
  
  //         cards.innerHTML += `
  //           <div class="card-item">
  //             <div class="card__img">
  //               <img src="${image}" alt="Alt" />
  //             </div>
  //             <div class="card__content">
  //               <p>${title}</p>
  //               <div class="card__content-footer">
  //                 <span class="card__content-footer-price">${price}</span>
  //                 <span class="card__content-footer-icon">
  //                   <i class="fa-solid fa-bag-shopping"></i>
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         `;
  //       });
  //     });
  // }

  
