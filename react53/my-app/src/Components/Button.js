const Button = ({clickHandler})=>{
    return(
        <button onClick = {clickHandler} >Click me</button>
    )
}


function clickHandler(e){
    console.log(e)
}
export default Button