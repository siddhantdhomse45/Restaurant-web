import React from "react";


const Menu = () => {
  const menu = [
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-1.png',
      title: "Tasty and Healthy",
      price: "$15.99",
      oldPrice: "$20.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-2.png',
      title: "Delicious Pizza",
      price: "$12.99",
      oldPrice: "$18.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-3.png',
      title: "Yummy Burger",
      price: "$10.99",
      oldPrice: "$14.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-4.png',
      title: "Fresh Salad",
      price: "$9.99",
      oldPrice: "$13.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-5.png',
      title: "Pasta Perfection",
      price: "$11.99",
      oldPrice: "$15.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/menu-6.png',
      title: "Dessert Bliss",
      price: "$8.99",
      oldPrice: "$12.99",
    },
  ];
  
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <div className="price">
                {item.price} <span>{item.oldPrice}</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
