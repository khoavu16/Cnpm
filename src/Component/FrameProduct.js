import React, { useEffect, useState } from 'react'
import b4 from './img/b4.jfif';
import { Outlet } from "react-router-dom"
import axios from 'axios'


const api = {
  key: "f940561a277d552c3b894777566e82f2",
  base: "https://api.openweathermap.org/data/2.5/",
};

const FrameProduct = () => {

  useEffect(() => {
    getdata();
  }, []);

  const [listrender, setlistrender] = useState([]);
  const url = `${api.base}weather?q=HaNoi&units=metric&APPID=${api.key}`

  const getdata = async () =>{
    try{
      const a = await axios.get(url)
      setlistrender(a.data)
    }
    catch{
      alert("loi api")
    }
  }
  console.log(listrender?.main?.temp);
  return (
    <div className="product-area section">   


      <div className='font'>Nhiệt độ là: {listrender?.main?.temp}<sup>0</sup>C</div>
      <div className='font'>Tên thành phố {listrender?.name}</div>
      <div className='font'>Tên quốc gia: {listrender?.sys?.country}</div>


      <section className="page-section" id="about">
        <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Điểm đặt được ưa thích</h2>
                  <h3 className="section-subheading text-muted line_h3">Trải nghiệm ngay khi đặt chỗ nhanh chóng.</h3>
              </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Women Hot Collection</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                      <span className="new">New</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                      <span className="price-dec">30% Off</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                    <div className="product-price">
                      <span>$29.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                    <img className="img-fluid-chunhat" src={b4} alt="..." ></img>
                      <span className="out-of-stock">Hot</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                    <div className="product-price">
                      <span className="old">$60.00</span>
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>













      <section class="shop-home-list section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h4 class="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
                      <p class="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-list">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#"></img>
                      <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 no-padding">
                    <div class="content">
                      <h5 class="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                      <p class="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FrameProduct