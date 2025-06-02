import style from "./bluebanner.module.css"
function BlueBanner() {

    return (

        <div className={style.banner}>

            <div className={style.container}>

                <ul className= {style.list}>
                    <li> <a href="">
                        <img src="../img/buy-comics-digital-comics.png" alt="digital comics" />
                        <p>digital comics</p>
                    </a></li>

                    <li> <a href="">
                        <img src="../img/buy-comics-merchandise.png" alt="dc merchandise" />
                        <p>dc merchandise</p>
                    </a></li>

                    <li> <a href="">
                        <img src="../img/buy-comics-subscriptions.png" alt="subscription" />
                        <p>subscription</p>
                    </a></li>

                    <li> <a href="">
                        <img src="../img/buy-comics-shop-locator.png" alt="comic shop locator" />
                        <p>comic shop locator</p>
                    </a></li>

                    <li> <a href="">
                        <img src="../img/buy-dc-power-visa.svg" alt="dc power visa" />
                        <p>dc power visa</p>
                    </a></li>
                </ul>
            </div>

        </div>
    )
}

export default BlueBanner;