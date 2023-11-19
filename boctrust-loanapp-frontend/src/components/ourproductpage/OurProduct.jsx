import PropTypes from "prop-types"
import { useState, useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../mockdatabase/products.json";
import Headline from "../shared/Headline";
import Header from "../shared/Header";
import TopCard from "../shared/TopCard";
import ProductBtn from "../ourproductpage/ProductBtn";
import "../ourproductpage/OurProduct.css";
import ProductImage from "./ProductImage";
import ProductListCard from "./ProductListCard";

const OurProduct = ({productTitle, headerImg}) => {
  // data from json file
  const products = data.products;
  
  // filter using productTitle
  const currentProduct = data.products.filter(
    (product) =>
      product.productName.toLowerCase() === productTitle.toLowerCase()
  );

  const { image, productName, description, benefits, features } = currentProduct[0];

  // component state
  const [img, setImg] = useState(image);
  const [name, setName] = useState(productName);
  const [desc, setDesc] = useState(description);
  const [benefit, setBenefit] = useState(benefits);
  const [feature, setFeature] = useState(features);
  
  // create object of products, key is category and value is array of products
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // function to handle button click and change image, description, benefits and features
  const changeProduct = (id) => {
    const product = products.find((product) => product.id === id);
    setImg(product.image);
    setName(product.productName);
    setDesc(product.description);
    setBenefit(product.benefits);
    setFeature(product.features);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header imgurl={headerImg} />
      <div className="container">
        <div className="row">
          {/* left side container */}
          <div className="col-md-8 col-sm-12">
            {/* top row container */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="ProductTitle">
                  <Headline
                    color="#593d0e"
                    spacer="18px 0 78px 0"
                    text={name}
                  />
                </div>
                <ProductImage url={img} altText={name} />
              </div>
              <div className="col-md-6 col-sm-12">
                <TopCard
                  size="18px"
                  align="left"
                  spacer={"28px 0"}
                  text={desc}
                />
              </div>
            </div>

            {/* bottom row container */}
            <div className="row" data-aos="fade-up">
              <div className="col-md-6 col-sm-12 DetailsCard">
                <Headline
                  color="#593d0e"
                  size="18px"
                  spacer="18px"
                  align="left"
                  text="Benefits"
                />
                {benefit.map((benefit) => (
                  <ProductListCard key={benefit} li={benefit} />
                ))}
              </div>
              <div className="col-md-6 col-sm-12 DetailsCard">
                <Headline
                  color="#593d0e"
                  size="18px"
                  spacer="18px"
                  align="left"
                  text="Features"
                />
                {feature.map((feature) => (
                  <ProductListCard key={feature} li={feature} />
                ))}
              </div>
            </div>
          </div>

          {/* right side container */}
          <div className="col-md-4 col-sm-12 Category">
            {Object.keys(productsByCategory).map((category) => {
              return (
                <div key={category} data-aos="fade-up">
                  <Headline
                    color="#fff"
                    spacer="8px 0"
                    text={category.toUpperCase()}
                  />
                  <div className="BtnContainer">
                    {productsByCategory[category].map(({ id, productName }) => (
                      <ProductBtn
                        key={id}
                        text={productName}
                        func={() => changeProduct(id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

OurProduct.propTypes = {
  headerImg: PropTypes.string,
  productTitle: PropTypes.shape({
    toLowerCase: PropTypes.func
  })
}

export default OurProduct;
