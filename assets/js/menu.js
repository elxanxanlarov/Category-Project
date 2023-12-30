let menu__section=document.querySelector(".menu__section"),
    header__icon=document.querySelector(".header__icon"),
    menu__canel__icon=document.querySelector(".menu__canel__icon");



    header__icon.addEventListener("click",function(){
        menu__section.classList.add("active")

        

    })
    menu__canel__icon.addEventListener("click",function(){
        menu__section.classList.remove("active")
    
    })


function handleCategoryItemClick(categoryItem) {
    console.log(categoryItem.innerHTML);
  }
  
  