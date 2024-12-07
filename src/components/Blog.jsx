import React from "react";


const Blog = () => {
  const blog = [
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/blog-1.jpeg',
      title: "Tasty and Refreshing Spices",
      date: "21st May, 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/blog-2.jpeg',
      title: "Delicious Recipes to Try",
      date: "15th June, 2021",
      description:
        "Explore new ways to cook with fresh ingredients and delicious spices.",
    },
    {
      img: 'https://raw.githubusercontent.com/walifile/react-resturant-website-theme/main/src/assets/images/blog-3.jpeg',
      title: "Health Benefits of Organic Food",
      date: "10th July, 2021",
      description:
        "Discover how organic food can improve your lifestyle and wellbeing.",
    },
  ];
  
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <a href="#" className="title">
                  {item.title}
                </a>
                <span>by admin / {item.date}</span>
                <p>{item.description}</p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
