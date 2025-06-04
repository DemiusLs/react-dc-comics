import style from "./bluebanner.module.css"
import blueBannerList from "../../data/blueBannerList";

function BlueBanner() {



    return (

        <div className={style.banner}>

            <div className={`${style.inner}  container`}>

                <ul className={style.list}>

                    {blueBannerList.map((curEl, index) => (

                        <li key={`bluebann-${index}`}> <a href={curEl.url}>
                            <img src={curEl.src} alt={curEl.alt} />
                            <p>{curEl.text}</p>
                        </a></li>

                    ))}

                </ul>
            </div>

        </div>
    )
}

export default BlueBanner;