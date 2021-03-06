import React from 'react'
import restaurantApi from '../api/restaurant';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

const ProductDetails = () => {

    // const Timer = () => {
        // const {initialMinute = 0,initialSeconds = 0} = props;
        // const [ minutes, setMinutes ] = useState(initialMinute);
        // const [seconds, setSeconds ] =  useState(initialSeconds);
    //     useEffect(()=>{
    //     let myInterval = setInterval(() => {
    //             if (seconds > 0) {
    //                 setSeconds(seconds - 1);
    //             }
    //             if (seconds === 0) {
    //                 if (minutes === 0) {
    //                     clearInterval(myInterval)
    //                 } else {
    //                     setMinutes(minutes - 1);
    //                     setSeconds(59);
    //                 }
    //             } 
    //         }, 1000)
    //         return ()=> {
    //             clearInterval(myInterval);
    //           };
    //     });
    
    //     return (
    //         <div>
    //         { minutes === 0 && seconds === 0
    //             ? null
    //             : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    //         }
    //         </div>
    //     )
    // }


    const today = new Date()
    const [listrender, setlistrender] = useState([]);
    const [listBook, setListBook] = useState([]);
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'))
    const [time, setTime] = useState("")
    const [name, setName] = useState("")
    const [tel, setTel] = useState(0)
    const {productId} = useParams()

    useEffect(() => {
        getdatarestaurant();
        // getBookReservations();
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

    // const getBookReservations = async () =>{
    //     try{
    //         const a = await restaurantApi.getBookRestaurant();
    //         setListBook(a.data);
    //     }
    //     catch (error) {
    //         alert(error)
    //     }
    // }


    // const renderRestaurant = () => {
    //     if(listBook){
    //       return listBook.map((item,index)=>{
    //         return (
    //             <div>{item.nameBook}</div>
    //         )
    //       })
    //     }
    // }




    const addReservations = async () => {
        try {      
            await restaurantApi.postBookRestaurant({
                idRestaurant:productId,
                dateBook: date,
                timeBook: time,
                nameBook: name,
                phoneBook: tel,
          });
          setTime("");
          setDate("");
          setName("");
          setTel(0);
          console.log(productId,date,time,name,tel);
        } catch (error) {
          console.log("loi");
        }
      };



    useEffect(() => {
        if (Date.parse(date)+100000000 < today.getTime()) {
            alert("Vui lo??ng cho??n la??i nga??y")
        }
    }, [date])


return (
    <div className="up_top">

        <section className="py-5"> 
            <div className="px-4 px-lg-5 my-5">
                <div className="gx-4 gx-lg-5">

                    <div className="col-md-12 slide-container mb-5 ">  
                        {listrender?.imagesRestaurants?.length > 0 ?                        
                            <Slide 
                            infinite = {true}
                            slidesToShow={3}
                            slidesToScroll={1}
                            dots={true}
                            >                          
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
                            <h1 className="display-2 fw-bolder mb-4 color_blue">{listrender.nameRestaurant}</h1>
                            <div className="fs-5 mb-2 color_text">
                                <span>??i??a Chi??: {listrender.addressRestaurant}</span>                            
                            </div>
                            <div className="fs-5 mb-2 ">                      
                                <span>Gia??: ${listrender.priceService}</span>
                            </div>
                            <div className="fs-5 mb-5">                      
                                <span>Gi???? m???? c????a: {new Date(Date.parse(listrender.startTIme)).toLocaleTimeString()}</span>
                            </div>
                            
                            <p className="lead">{listrender?.descriptionRestaurant}</p>
                            <div className="d-flex">
                                <Link
                                to={`/id/${listrender.idRestaurant}`}
                                >
                                    <button className="btn btn-outline-dark flex-shrink- inputdate mt-5" type="button">
                                        <i className="bi-cart-fill me-1"></i>
                                        Xem menu nha?? ha??ng
                                    </button>                          
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-3 nav'>
                            
                            <div className='box-book'>

                            <div className="fs-3 color_text">                      
                                <span>Th??m ??????t ch????</span>
                            </div>

                                <input 
                                className='inputdate mt-4 col-md-12'
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                ></input>   

                                <input 
                                className='inputdate mt-4 col-md-12'
                                type="time" 
                                value={time}
                                onChange={(e)=> setTime(e.target.value)}
                                >
                                </input>   



                                <input 
                                className='inputdate mt-4 col-md-12'
                                placeholder='Ho?? va?? t??n'
                                type="name"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                >

                                </input>


                                <input 
                                type="number" 
                                className="inputdate mt-4 col-md-12"
                                placeholder='Nh????p s???? ??i????n thoa??i'
                                value={tel}
                                onChange={(e)=> setTel(e.target.value)}
                                ></input>
 

                                {/* <select  
                                className='inputdate mt-4 col-md-12'
                                >
                                    <option value="">1 nguoi</option>
                                    <option value="">2 nguoi</option>
                                    <option value="">3 nguoi</option>
                                    <option value="">4 nguoi</option>
                                    <option value="">5 nguoi</option>
                                    <option value="">6 nguoi</option>
                                    <option value="">7 nguoi</option>
                                    <option value="">8 nguoi</option>
                                    <option value="">9 nguoi</option>
                                    <option value="">10 nguoi</option>
                                    <option value="">12 nguoi</option>
                                    <option value="">13 nguoi</option>
                                    <option value="">14 nguoi</option>
                                    <option value="">15 nguoi</option>
                                    <option value="">16 nguoi</option>
                                    <option value="">17 nguoi</option>
                                    <option value="">18 nguoi</option>
                                    <option value="">19 nguoi</option>
                                    <option value="">20 nguoi</option>
                                </select >  */}



                                <button 
                                className="btn btn-outline-dark flex-shrink-0 col-md-12 mt-5" 
                                type="button"
                                onClick={addReservations}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    ??????t ch????
                                </button>

                                {/* {renderRestaurant()} */}


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