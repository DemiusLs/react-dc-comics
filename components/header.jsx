import style from "./header.module.css"

const arr = [
    {
        text: "characters",
        url: "/",
        active: true
    },
    {
        text: "movies",
        url: "/movies",
        active: false
    },
    {
        text: "tv",
        url: "/tv",
        active: false
    },
    {
        text: "games",
        url: "/games",
        active: false
    },
    {
        text: "collectibles",
        url: "/collectibles",
        active: false
    },
    {
        text: "video",
        url: "/video",
        active: false
    },
    {
        text: "fans",
        url: "/fans",
        active: false
    },
    {
        text: "news",
        url: "/news",
        active: false
    },
    {
        text: "shop",
        url: "/shop",
        active: false
    },
]


function Header() {

    const logo = {
        path: "../img/dc-logo.png",
        alt: "logo DC "
    }





    return (

        <header className={style.header}>
            <div className={`container + ${style.inner}`}>
                <img className={style.logo} src={logo.path} alt={logo.alt} />

                <ul className={style.list}>
                    {arr.map((curEl, index) => (
                        <li><a key={`head-list ${index}`} href={curEl.url} >{curEl.text} <div className={curEl.active ? style.active : ""}></div></a></li>
                    ))}

                </ul>
            </div>


        </header>
    )
}

export default Header;