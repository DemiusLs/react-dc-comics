import style from "./appmain.module.css"
import CardComponent from "./CardComponent";


function AppMain({ comics }) {
    return (

        <main className={style.main}>
            <div className={`${style.inner}  container`}>
                {comics.map(comic => (
                    <CardComponent key={`comic-${comic.id}`} thumb={comic.thumb} series={comic.series} style={style} />

                ))}

            </div>


        </main>
    )
}

export default AppMain;