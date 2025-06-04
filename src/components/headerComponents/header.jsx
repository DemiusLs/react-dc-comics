import style from "./header.module.css"
import headerList from "../../data/headerList";




function Header() {

    const logo = {
        path: "../img/dc-logo.png",
        alt: "logo DC "
    }






    return (

        <header className={style.header}>
            <div className={`container  ${style.inner}`}>
                <img className={style.logo} src={logo.path} alt={logo.alt} />

                <ul className={style.list}>
                    {headerList.map((curEl, index) => (
                        <li key={`head-list ${index}`}><a href={curEl.url} >{curEl.text} <div className={curEl.active ? style.active : ""}></div></a></li>
                    ))}

                </ul>
            </div>


        </header>
    )
}

export default Header;