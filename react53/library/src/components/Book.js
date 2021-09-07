import '../css/Book.css'
import Counter from './Counter';

export default function Book({title, author, description, src}){
    return (
        <div className='book'>
            <div className='wrapper'><img src={src} alt={title}/></div>
            <h4>{author}</h4>
            <h3>{title}</h3>            
            <p>{description ?? 'no description'}</p>
            <hr/>
            <Counter />
            
        </div>
    )
}