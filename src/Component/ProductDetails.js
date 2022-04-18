import React from 'react'
import restaurantApi from '../api/restaurant';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import foodtApi from "../api/food"

const ProductDetails = (props) => {
    const [listrender, setlistrender] = useState([]);
    const {productId} = useParams()

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getdatarestaurant();
        getDataMenu();
    }, []);

    const getdatarestaurant = async () =>{
        try{
            const a = await restaurantApi.getRestaurant(`${productId}`);
            setlistrender(a.data);
        }
        catch{
            alert("loi api")
        }
    }

    const getDataMenu = async() => {
        try{
            const a = await foodtApi.getMenuFood(`${productId}`);
            setMenu(a.data)
            console.log(a);
        }
        catch{
            alert("Loi API")
        }
    }

    const renderMenu = () => {
        if(menu){
            return menu.map((item,index)=>{
                return (
                    <div
                    key={index}
                    >
                        <div className="col mb-5">
                            <div className="card h-100">
                        
                                <img className="card-img-top" src={item.urlImage} alt="..." ></img>
                        
                                <div className="card-body p-4">
                                    <div className="text-center">
                                
                                        <h5 className="fw-bolder">{item.nameFood}</h5>
                            
                                        ${item.priceFood}
                                    </div>
                                </div>
                        
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

return (
    <div>

        <section className="py-5"> 
            <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                {/* <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={listrender.imagesRestaurants[0]?.urlRestaurant} alt="..." /></div> */}
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{listrender.nameRestaurant}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">$45.00</span> */}
                            <span>${listrender.priceService}</span>
                        </div>
                        <p className="lead">{listrender?.descriptionRestaurant}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5 mt-5">
                <h2 className="fw-bolder mb-4">Menu </h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {renderMenu()}
                </div> 
            </div> 
        </section>
    </div> 
    )
}

export default ProductDetails;