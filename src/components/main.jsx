import style from "./main.module.css"
import comics from "../data/comics";


function Main() {


    const data = [...comics]





    return (

        <main className={style.main}>
            <div className={`${style.inner}  container`}>
                {data.map(comic => (

                    <div key={`comic-${comic.id}`} className={style.card}>
                        <img src={comic.thumb} alt="" />
                        <p>{comic.series}</p>
                    </div>
                ))}

            </div>


        </main>
    )
}

export default Main;