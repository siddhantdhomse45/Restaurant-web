import React from "react";


const Products = () => {
  const product = [
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/product-1.png',
      title: "Fresh Coffee",
      price: "$15.99",
      oldPrice: "$20.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/product-2.png',
      title: "Premium Tea",
      price: "$12.99",
      oldPrice: "$18.99",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/product-3.png',
      title: "Organic Juice",
      price: "$10.99",
      oldPrice: "$14.99",
    },
  ];
  

  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  {item.price} <span>{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
