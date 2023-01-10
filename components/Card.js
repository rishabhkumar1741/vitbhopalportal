import style from '../styles/Card.module.css'
function Card(props) {
    return (
        <div className={style.my_card} >
            <img src= {props.Img} alt="" />
            <div className={style.my_cardTitle}>
                <h1>{props.course_name}</h1>
                <p>{props.fullform}</p>
            </div>
        </div>)
}

export default Card;