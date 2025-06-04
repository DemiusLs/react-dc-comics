const CardComponent = ({ thumb , series , style}) => {

    return (

        <div  className={style.card}>
            <img src={thumb} alt="" />
            <p>{series}</p>
        </div>)
}

export default CardComponent;