import React from 'react'
import restaurantApi from '../api/restaurant';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

const ProductDetails = () => {

    const Timer = () => {
        const {initialMinute = 0,initialSeconds = 0} = props;
        const [ minutes, setMinutes ] = useState(initialMinute);
        const [seconds, setSeconds ] =  useState(initialSeconds);
        useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
    
        return (
            <div>
            { minutes === 0 && seconds === 0
                ? null
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            }
            </div>
        )
    }





    ///
    const today = new Date()
    const [listrender, setlistrender] = useState([]);
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'))
    const {productId} = useParams()

    useEffect(() => {
        getdatarestaurant();
    }, []);

    const getdatarestaurant = async () =>{
        try{
            const a = await restaurantApi.getRestaurant(`${productId}`);
            setlistrender(a.data);
        }
        catch (error) {
            alert(error)
        }
    }



    useEffect(() => {
        if (Date.parse(date) < today.getTime()) alert('abc')
    }, [date])
    

    console.log(date);
    


return (
    <div className="up_top">

        <section className="py-5"> 
            <div className="px-4 px-lg-5 my-5">
                <div className="gx-4 gx-lg-5">

                    <div className="col-md-12 slide-container mb-5 ">  
                        {listrender?.imagesRestaurants?.length > 0 ?                        
                            <Slide>                          
                                {listrender.imagesRestaurants.map((item,index) => (
                                    <div 
                                    key={index}
                                    >
                                        <img className="mt-10 mb-5 mb-md-0 col-md-12" src={item.urlRestaurant} alt="..." />
                                    </div>                               
                                    )
                                )}                              
                            </Slide>                                       
                        : null } 
                    </div>

                    <div className=" row col-md-12">
                        <div className="col-md-9">
                            <div className="small mb-2">SKU: {listrender.idRestaurant}</div>
                            <h1 className="display-2 fw-bolder mb-4">{listrender.nameRestaurant}</h1>
                            <div className="fs-5 mb-2">
                                <span>Địa Chỉ: {listrender.addressRestaurant}</span>                            
                            </div>
                            <div className="fs-5 mb-2">                      
                                <span>Giá: ${listrender.priceService}</span>
                            </div>
                            <div className="fs-5 mb-5">                      
                                <span>Giờ mở cửa: {new Date(Date.parse(listrender.startTIme)).toLocaleTimeString()}</span>
                            </div>
                            
                            <p className="lead">{listrender?.descriptionRestaurant}</p>
                            <div className="d-flex">
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Đặt chỗ
                                </button>
                                <Link
                                to={`/id/${listrender.idRestaurant}`}
                                >
                                    <button className="btn btn-outline-dark flex-shrink-0 menu" type="button">
                                        <i className="bi-cart-fill me-1"></i>
                                        Menu
                                    </button>                          
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-3 nav'>
                            
                            <div className='box-book'>
                                <input 
                                className='inputdate mt-5 col-md-12'
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                ></input>   

                                <input 
                                className='inputdate mt-4 col-md-12'
                                type="time" 
                                // value={date} 
                                // onChange={(e) => setDate(e.target.value)} 
                                ></input>      

                                {Timer()}                        
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> 
    )
}

export default ProductDetails;