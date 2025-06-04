const CardComponent = ({id, thumb , series , style}) => {

    return (

        <div key={`comic-${id}`} className={style.card}>
            <img src={thumb} alt="" />
            <p>{series}</p>
        </div>)
}

export default CardComponent;