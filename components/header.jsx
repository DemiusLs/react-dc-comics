import style from "./header.module.css"

const arr =["characters", "comics", "movies" ,"tv", "games" ,"collectibles", "video" ,"fans" , "news" , "shop"]

function Header() {

    const logo = {
        path: "../img/dc-logo.png",
        alt: "logo DC "
    }



    return (

        <header className={style.header}>
            <div className={style.container}>
                <img className={style.logo} src={logo.path} alt={logo.alt} />

                <ul className={style.list}>
                    <li><a href="">characters <div className={style.active}></div></a> </li>
                    <li><a href="">comics</a></li>
                    <li><a href="">movies</a></li>
                    <li><a href="">tv</a></li>
                    <li><a href="">games</a></li>
                    <li><a href="">collectibles</a></li>
                    <li><a href="">video</a></li>
                    <li><a href="">fans</a></li>
                    <li><a href="">news</a></li>
                    <li><a href="">shop</a></li>
                </ul>
            </div>


        </header>
    )
}

export default Header;