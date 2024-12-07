import React from "react";

const Review = () => {
  const review = [
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/pic-1.png',
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/pic-2.png',
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/pic-3.png',
    },
  ];

  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index}>
              <img
                src="https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/quote-img.png"
                alt="quote"
                className="quote"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={item.img} className="user" alt="user" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review