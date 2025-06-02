import style from "./footerbanner.module.css"
function FooterBanner() {

    return (

        <div className={style.banner}>

            <div className={style.container}>

                <a className={style.btnfoot} href="">sign-up now!</a>

                <ul className={style.list}>

                    <h2>follow us</h2>


                    <li> <a href="">
                        <img src="../img/footer-facebook.png" alt="facebook" />

                    </a></li>

                    <li> <a href="">
                        <img src="../img/footer-twitter.png" alt="twitter" />

                    </a></li>

                    <li> <a href="">
                        <img src="../img/footer-youtube.png" alt="youtube" />

                    </a></li>

                    <li> <a href="">
                        <img src="../img/footer-pinterest.png" alt="pinterest" />

                    </a></li>
                    <li> <a href="">
                        <img src="../img/footer-periscope.png" alt="periscope" />

                    </a></li>
                </ul>
            </div>

        </div>
    )
}

export default FooterBanner;