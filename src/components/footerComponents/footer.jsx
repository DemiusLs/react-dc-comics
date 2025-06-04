
import style from "./footer.module.css"
import footerList from "../../data/footerList.js"

function Footer() {
    

    return (

        <footer className={style.footer}>


            <div className={`${style.inner}  container`}>

                <div className={style.col}>

                    {footerList.col1.map((curList, index) => (

                        <ul key={`list-${index}`} className={style.list}>
                            <h2>{curList.list}</h2>

                            {curList.elements.map((curEl, index2) => (
                                <li key={`${curList.list}-${index2}`}><a href={curEl.link}>{curEl.text}</a> </li>

                            ))}
                        </ul>
                    ))}





                </div>

                {footerList.col2.map((curList, index) => (

                    <ul key={`list-${index}`} className={style.list}>
                        <h2>{curList.list}</h2>

                        {curList.elements.map((curEl, index2) => (
                            <li key={`${curList.list}-${index2}`}><a href={curEl.link}>{curEl.text}</a> </li>

                        ))}
                    </ul>
                ))}









            </div>
        </footer>
    )
}

export default Footer;