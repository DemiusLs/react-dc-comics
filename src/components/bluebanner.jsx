import style from "./bluebanner.module.css"
function BlueBanner() {

    const arr = [{
        text: "digital comics",
        src: "../img/buy-comics-digital-comics.png",
        url: "/digitalcomics",
        alt: "digital comics",
    }, {
        text: "dc merchandise",
        src: "../img/buy-comics-merchandise.png",
        url: "/dcmerchandise",
        alt: "dc merchandise",
    }, {
        text: "subscription",
        src: "../img/buy-comics-subscriptions.png",
        url: "/subscription",
        alt: "subscription",
    }, {
        text: "comic shop locator",
        src: "../img/buy-comics-shop-locator.png",
        url: "/comicshoplocator",
        alt: "comic shop locator",
    }, {
        text: "dc power visa",
        src: "../img/buy-dc-power-visa.svg",
        url: "/dcpowervisa",
        alt: "dc power visa",
    },
    ]

    return (

        <div className={style.banner}>

            <div className={style.container}>

                <ul className={style.list}>

                    {arr.map((curEl, index) => (

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