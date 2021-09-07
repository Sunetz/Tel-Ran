import Card from "./Card"
import "../css/CardList.css"

const CardList = ({cards})=>{
    return(
        <div className='card-list'>
            {cards.map((card, index)=><Card 
            key = {index}
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
            src={card.src}
            
            />)}
            
        </div>
    )
} 

export default CardList