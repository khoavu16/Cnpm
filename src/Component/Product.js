function Product() {
  return (
    <div class="home-product home-product-item-wrapper">
        <div class="grid__row">
            <div class="grid__column-2-4">
                <a href="#" class="home-product-item ">
                    <div class="home-product-item-img"></div>
                    <h4 class="home-product-item__name"> Tay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 tháng</h4>
                    
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">1.200.000</span>
                        <span class="home-product-item__price-current">999.000</span>
                    </div>

                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__liked">
                            <i class="home-product-item__like-icon-empty ti-heart-broken"></i>
                            <i class="home-product-item__like-icon-fill ti-heart"></i>
                        </span>

                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold ti-star"></i>
                            <i class="home-product-item__star--gold ti-star"></i>
                            <i class="home-product-item__star--gold ti-star"></i>
                            <i class="home-product-item__star--gold ti-star"></i>
                            <i class="ti-star"></i>
                        </div>
                        <span class="home-product-item__sold"> 88 da ban</span>
                    </div>

                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand"> Whoo</span>
                        <span class="home-product-item__origin-name">Nhat Ban</span>
                    </div>

                    <div class="home-product-item__favourite">
                        <i class="ti-check"></i>
                        <span>Yeu thich</span> 
                    </div>

                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">10%</span>
                        <span class="home-product-item__sale-off-label">Giảm</span>
                    </div>
                </a>
            </div>      
        </div>                              
    </div>
  )
}

export default Product