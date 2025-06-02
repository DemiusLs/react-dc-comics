
import style from "./footer.module.css"

function Footer() {

    return (

        <footer className={style.footer}>


            <div className={style.container}>

                <div className={style.col}>
                    <ul className={style.list}>
                        <h2>dc comics</h2>
                        <li><a href="">Characters</a> </li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Video</a></li>
                        <li><a href="">News</a></li>
                    </ul>

                    <ul className={style.list}>
                        <h2>shop</h2>
                        <li><a href="">Shop DC</a> </li>
                        <li><a href="">Shop DC Collectibles</a></li>
                    </ul>
                </div>




                <ul className={style.list}>
                    <h2>dc</h2>
                    <li><a href="">Terms Of Use</a> </li>
                    <li><a href="">Privacy policy(New)</a></li>
                    <li><a href="">Ad Choices</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Subscriptions</a></li>
                    <li><a href="">Talent Workshops</a></li>
                    <li><a href="">CPSC Certificates</a></li>
                    <li><a href="">Ratings</a></li>
                    <li><a href="">Shop Help</a></li>
                    <li><a href="">Contact US</a></li>
                </ul>


                <ul className={style.list}>
                    <h2>sites</h2>
                    <li><a href="">DC</a> </li>
                    <li><a href="">MAD Magazine</a></li>
                    <li><a href="">DC Kids</a></li>
                    <li><a href="">DC Universe</a></li>
                    <li><a href="">DC Power Visa</a></li>

                </ul>

                <div className={style.wrapper}> </div>




            </div>
        </footer>
    )
}

export default Footer;