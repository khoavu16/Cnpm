import{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Outlet } from "react-router-dom"
import restaurantApi from '../api/restaurant';




const FrameProduct = () => {


  const [editId, setEditId] = useState(null);
  const [listrender, setlistrender] = useState([]);
  // const [food, setfood] = useState();

  useEffect(() => {
    getdatarestaurant();
    // getdatafood();
  }, []);

  useEffect(() => {
    getRestaurantId();
  }, [editId]);
 
 

  const getdatarestaurant = async () =>{
    try{
      const a = await restaurantApi.getAllRestarant();
      setlistrender(a.data);
    }
    catch{
      alert("loi api")
    }
  }

  const getRestaurantId = async () =>{
    try{
      const a = await restaurantApi.getRestaurant(editId);
    }
    catch{
      alert("loi api")
    }
  }

  // const getdatafood = async () =>{
  //   try{
  //     const a = await foodtApi.getAllFood();
  //     setfood(a.data);
  //   }
  //   catch{
  //     alert("loi api")
  //   }
  // }


  // const renderFood = () => {
  //   if(food){
  //     return food.map((item,index)=>{
  //       return (
  //         <div class="single-list">
  //           <div key={index} class="row">
  //             <div class="col-lg-6 col-md-6 col-12">
  //               <div class="list-image overlay">
  //                 <img src="https://via.placeholder.com/115x140" alt="#"></img>
  //                 <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
  //               </div>
  //             </div>
  //             <div class="col-lg-6 col-md-6 col-12 no-padding">
  //               <div class="content">
  //                 <h4 class="title"><a href="#">{item.nameFood}</a></h4>
  //                 <p class="price with-discount">${item.priceFood}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )
  //     })
  //   }
  // }
  
  const renderRestaurant = () => {
    if(listrender){
      return listrender.map((item,index)=>{
        return (
          <Link 
          key={index} 
          className="col-xl-3 col-lg-4 col-md-4 col-12"
          to={`/frameproduct/${item.idRestaurant}`}
          >
            <div className="single-product">
              <div className="product-img">
                <a href="#">
                  <img className="img-fluid-chunhat" src={item.imagesRestaurants[0]?.urlRestaurant} alt="..." ></img>                
                </a>
                <div className="button-head">
                  <div className="product-action">
                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="ti-eye"></i><span>Xem sản phẩm</span></a>
                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Số lượt thích: {item.likes}</span></a>
                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                  </div>
                  <div className="product-action-2">
                    <a title="Add to cart" href="#">Thêm vào giỏ</a>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="product-details.html">{item.nameRestaurant}</a></h3>
                <div className="product-price">
                  <span>${item.priceService}</span>
                </div>
              </div>
            </div>
          </Link>
        )
      })
    }
  }
  return (
    <div className="product-area section">       
      <header className="masthead">
          <div className="container">
              <div className="masthead-subheading">Chào mừng đến với chúng tôi!</div>
              <div className="masthead-heading text-uppercase">GonT hân hạnh phục vụ</div>
              <a className="btn btn-primary btn-xl text-uppercase" href="#services">Đặt chỗ ngay</a>
          </div>
      </header>

      <section className="page-section" id="about">
        <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Điểm đặt được ưa thích</h2>
                  <h3 className="section-subheading text-muted line_h3">Trải nghiệm ngay khi đặt chỗ nhanh chóng.</h3>
              </div>
            <div className="row">{renderRestaurant()}</div>
        </div>
      </section>
    </div>
  )
}

export default FrameProduct