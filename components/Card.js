import style from '../styles/Card.module.css'
import Link from 'next/link';
function Card(props) {
    return (
        <Link href={props.url}>
            <div className={style.my_card} >
                <img src={props.Img} alt="" />
                <div className={style.my_cardTitle}>
                    <h1>{props.course_name}</h1>
                    <p>{props.fullform}</p>
                </div>
            </div>


        </Link>
    )
}

export default Card;