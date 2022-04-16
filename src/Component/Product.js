const Product = () => {
    return (
		<header className="header">
            <div className="grid">
                <div className="header-with-search">
                    <div className="header-search">

                        <div className="header-search-input-wrap">
                            <input type="text" className="header-search-input" placeholder="Tim o day ne"> </input>
                            <div className="header-search-history">
                                <h3 className="header-search-history-heading">Linh Su Tim Kiem</h3>
                                <ul className="header-search-history-list">
                                    <li className="header-search-history-item">
                                        <a href="">Kem duong da</a>
                                    </li>
                                    <li className="header-search-history-item">
                                        <a href="">Kem tri mun</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="header-search-select">
                            <span className="header-search-select-label"> Trong Shop </span>
                            <i className="header-search-select-label-i ti-angle-down"></i>
                            <ul className="header-search-option">
                                <li className="header-search-option-item header-search-option-item--active">
                                    <span>Trong Shop</span>
                                    <i className="ti-check"></i>
                                </li>

                                <li className="header-search-option-item">
                                    <span>Ngoai Shop</span>
                                    <i className="ti-check"></i>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="header-search-btn">
                            <i className="header-search-btn-icon ti-search"></i>
                        </div>
                    </div>

                    <div className="header-cart">

                        <div className="header-cart-wrap">
                            <i className="header__cart-icon ti-shopping-cart"></i>
                            <span className="header__cart-notice">3</span>

                            <div className="header__cart-list">
                                <img src="playstore.jpg" alt="" className="header__cart-no-cart-img"></img>
                                <span className="header__cart-list-no-cart-msg">Chua co san Phan</span>

                                <h4 className="header__cart-heading">San pham da them</h4>
                                <ul className="header__cart-list-item">

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho RolexTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 tháng</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className=" header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className=" header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className=" header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className="header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name">Dong Ho Rolex</h5>
                                                <div className="cach">
                                                    <span className="header__cart-item-price">2.000.000</span>
                                                    <span className="header__cart-item-multiply">x</span>
                                                    <span className="header__cart-item-qnt">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-description">
                                                    Phan Loai: Bac
                                                </span>
                                                <span className=" header__cart-item-remove">Xoa</span>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                                <button className="header__cart-view-cart btn btn--primary">Xem Gio Hang</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
			
  )
}

export default Product