const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: "$119",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: "$149",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: "$109",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: "$129",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: "$99",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  let chooseProduct=products[0];
  const currentProductImg=document.querySelector(".productImg");
  const currentProductTitle=document.querySelector(".productTitle");
  const currentProductPrice=document.querySelector(".productPrice");
  const currentProductColors=document.querySelectorAll(".color");
  console.log(currentProductColors);
  const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
            //change the current slide
            wrapper.style.transform=`translateX(${-100*index}vw)`;

            //change the choosen product
            chooseProduct=products[index];
            //change text of current procuct
            /*currentProductColors[0].style.backgroundColor=chooseProduct.colors[0].code;
            currentProductColors[1].style.backgroundColor=chooseProduct.colors[1].code;*/
            currentProductColors.forEach((item,index)=>{
              item.style.backgroundColor=chooseProduct.colors[index].code;
            })
            currentProductTitle.textContent=chooseProduct.title;
            currentProductPrice.textContent=chooseProduct.price;
            currentProductImg.src=chooseProduct.colors[0].img;
            
    });
});
currentProductColors.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    currentProductImg.src=chooseProduct.colors[index].img;
  });
});
currentProductSizes.forEach((item)=>{
  item.addEventListener("click",()=>{
    currentProductSizes.forEach((item)=>{
      item.style.backgroundColor="white";
      item.style.color="black";
    });
    item.style.backgroundColor="black";
    item.style.color="white";
  })
});
const paymentScreen=document.querySelector(".payment");
const pressBuy=document.querySelector(".productButton");
pressBuy.addEventListener("click",()=>{
  paymentScreen.style.display="flex";
});
const pressCancel=document.querySelector(".close");
pressCancel.addEventListener("click",()=>{
  paymentScreen.style.display="none";
});


