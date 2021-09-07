import '../css/Card.css'
import Button from './Button'
import Counter from './CounterF';

export default function Card({title, subtitle, text="unknown", src}){
    return (
        <div className='card'>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{text ?? 'no data'}</p>
            <img src={src} alt={title}/>
            <Button clickHandler={clickHandler}/>
            <Counter />
        </div>
    )
}
function clickHandler(e){
    console.log(e);
    document.querySelector('.card h2').innerHTML = 'Easy React'
}