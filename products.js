const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let mainFruits = document.querySelector(".fruits");

let mainDrinks = document.querySelector(".drinks");

let mainHygiene = document.querySelector(".hygiene");

let ulFruits = document.createElement("ul");
let ulDrinks = document.createElement("ul");
let ulHyguiene = document.createElement("ul");


products.forEach(element => {
  let productCard = document.createElement("li");
  let productMain = document.createElement("main");
  let productCategory = document.createElement("h5");
  let productTitle = document.createElement("h1");
  let productPrice = document.createElement("strong");
  let productImg = document.createElement("img");
  if (element.category == "Frutas") {
    mainFruits.appendChild(ulFruits);
    ulFruits.appendChild(productCard);
    productCard.append(productImg, productMain);
    productMain.append(productTitle, productCategory, productPrice);
    productCard.classList = "product";
    productMain.classList = "product-main";
    productTitle.innerText = element.title;
    productTitle.classList = "product-title";
    productCategory.innerText = element.category;
    productCategory.classList = "product-category";
    productPrice.innerText = `R$ ${element.price}`
    productPrice.classList = "product-price";
    if (element.image) {
      productImg.src = element.image;
    }
    else {
      productImg.src = "./img/products/no-img.svg";
    }
    productImg.alt = "Foto da fruta";
    productImg.title = "Foto";
    productImg.classList = "product-img";
  }
  if (element.category == "Bebidas") {
    mainDrinks.appendChild(ulDrinks);
    ulDrinks.appendChild(productCard);
    productCard.append(productImg, productMain);
    productMain.append(productTitle, productCategory, productPrice);
    productCard.classList = "product";
    productMain.classList = "product-main";
    productTitle.innerText = element.title;
    productTitle.classList = "product-title";
    productCategory.innerText = element.category;
    productCategory.classList = "product-category";
    productPrice.innerText = `R$ ${element.price}`
    productPrice.classList = "product-price";
    if (element.image) {
      productImg.src = element.image;
    }
    else {
      productImg.src = "./img/products/no-img.svg";
    }
    productImg.alt = "Foto da fruta";
    productImg.title = "Foto";
    productImg.classList = "product-img";
  }
  if (element.category == "Higiene") {
    mainHygiene.appendChild(ulHyguiene);
    ulHyguiene.appendChild(productCard);
    productCard.append(productImg, productMain);
    productMain.append(productTitle, productCategory, productPrice);
    productCard.classList = "product";
    productMain.classList = "product-main";
    productTitle.innerText = element.title;
    productTitle.classList = "product-title";
    productCategory.innerText = element.category;
    productCategory.classList = "product-category";
    productPrice.innerText = `R$ ${element.price}`
    productPrice.classList = "product-price";
    if (element.image) {
      productImg.src = element.image;
    }
    else {
      productImg.src = "./img/products/no-img.svg";
    }
    productImg.alt = "Foto da fruta";
    productImg.title = "Foto";
    productImg.classList = "product-img";
  }
});