
import style from "./footer.module.css"

function Footer() {

    const arr = [{
        list: "dc-comix",
        elements: [
            {
                text: "Characters",
                link: "/Characters",
            },
            {
                text: "Comics",
                link: "/Comics",
            },
            {
                text: "Movies",
                link: "/Movies",
            },
            {
                text: "TV",
                link: "/TV",
            },
            {
                text: "Games",
                link: "/Games",
            },
            {
                text: "Video",
                link: "/Video",
            }, {
                text: "News",
                link: "/News",
            },
        ]
    },
    {
        list: "shop",
        elements: [{
            text: "Shop DC",
            link: "/Shop-DC",
        },
        {
            text: "Shop DC Collectibles",
            link: "/Shop-DC-Collectibles",
        }]

    },

    ]

    const arr2 = [{
        list: "DC",
        elements: [{
            text: "Term Of Use",
            link: "/Terms_Of_Use",
        },
        {
            text: "Privacy policy(New)",
            link: "/Privacy_policy",
        },
        {
            text: "Ad Choices",
            link: "/Ad_Choices",
        },
        {
            text: "Advertising",
            link: "/Advertising",
        },
        {
            text: "Jobs",
            link: "/Jobs",
        },
        {
            text: "Subscriptions",
            link: "/Subscriptions",
        },
        {
            text: "Talent Workshops",
            link: "/Talent Workshops",
        }, {
            text: "CPSC Certificates",
            link: "/CPSC_Certificates",
        }, {
            text: "Ratings",
            link: "/Ratings",
        }, {
            text: "Shop Help",
            link: "/Shop_Help",
        }, {
            text: "Contact US",
            link: "/Contact_US",
        },]
    },
    {
        list: "sites",
        elements: [{
            text: "DC",
            link: "/DC",
        },
        {
            text: "MAD Magazine",
            link: "/MAD_Magazine",
        },
        {
            text: "DC Kids",
            link: "/DC_Kids",
        },
        {
            text: "DC Universe",
            link: "/DC_Universe",
        },
        {
            text: "DC Power Visa",
            link: "/DC_Power_Visa",
        }]

    },]

    return (

        <footer className={style.footer}>


            <div className={style.container}>

                <div className={style.col}>

                    {arr.map((curList, index) => (

                        <ul key={`list-${index}`} className={style.list}>
                            <h2>{curList.list}</h2>

                            {curList.elements.map((curEl, index2) => (
                                <li key={`${curList.list}-${index2}`}><a href={curEl.link}>{curEl.text}</a> </li>

                            ))}
                        </ul>
                    ))}





                </div>

                {arr2.map((curList, index) => (

                    <ul key={`list-${index}`} className={style.list}>
                        <h2>{curList.list}</h2>

                        {curList.elements.map((curEl, index2) => (
                            <li key={`${curList.list}-${index2}`}><a href={curEl.link}>{curEl.text}</a> </li>

                        ))}
                    </ul>
                ))}




                <img className={style.image} src="../img/dc-logo-bg.png" alt="" />




            </div>
        </footer>
    )
}

export default Footer;