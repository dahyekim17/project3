import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  let arr = [];
  // (arr = 1), 2;

  let [products, setProducts] = React.useState([]);
  //useEffect(axios()=>{})
  //ustEffect(()=>{실행문},[])
  useEffect(() => {
    axios
      .get(
        "https://21cb039c-6516-496c-991c-bf475fa4b749.mock.pstmn.io/products"
      )
      .then((res) => {
        products = res.data.products;


        setProducts(products);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/Dior-Logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/d_b_1.jpg" alt="" />
        </div>
        <h2>2022-2023 가을-겨울 컬렉션</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div class="product-card" key={idx}>
                <Link className="product-link" to={`/product/${idx}`}>
                  <div>
                    <img
                      class="product-img"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                  <div class="product-content">
                    <span class="product-name">{product.name}</span>
                    <span class="product-price">{product.price}원</span>
                    <div class="product-seller">
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default MainPage;
