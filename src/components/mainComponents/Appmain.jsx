import style from "./main.module.css"
import comics from "../../data/comics";
import CardComponent from "./CardComponent";


function AppMain() {


    const data = [...comics]





    return (

        <main className={style.main}>
            <div className={`${style.inner}  container`}>
                {data.map(comic => (
                    <CardComponent id={comic.id} thumb={comic.thumb} series={comic.series} style={style} />

                ))}

            </div>


        </main>
    )
}

export default AppMain;