const Product = () => {
    return (
    <div className="home-product home-product-item-wrapper">
        <div className="grid__row">
            <div className="grid__column-2-4">
                <a href="#" className="home-product-item ">
                    <div className="home-product-item-img"></div>
                    <h4 className="home-product-item__name"> Tay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 tháng</h4>
                    
                    <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000</span>
                        <span className="home-product-item__price-current">999.000</span>
                    </div>

                    <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__liked">
                            <i className="home-product-item__like-icon-empty ti-heart-broken"></i>
                            <i className="home-product-item__like-icon-fill ti-heart"></i>
                        </span>

                        <div className="home-product-item__rating">
                            <i className="home-product-item__star--gold ti-star"></i>
                            <i className="home-product-item__star--gold ti-star"></i>
                            <i className="home-product-item__star--gold ti-star"></i>
                            <i className="home-product-item__star--gold ti-star"></i>
                            <i className="ti-star"></i>
                        </div>
                        <span className="home-product-item__sold"> 88 da ban</span>
                    </div>

                    <div className="home-product-item__origin">
                        <span className="home-product-item__brand"> Whoo</span>
                        <span className="home-product-item__origin-name">Nhat Ban</span>
                    </div>

                    <div className="home-product-item__favourite">
                        <i className="ti-check"></i>
                        <span>Yeu thich</span> 
                    </div>

                    <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">10%</span>
                        <span className="home-product-item__sale-off-label">Giảm</span>
                    </div>
                </a>
            </div>      
        </div>                              
    </div>
  )
}

export default Product