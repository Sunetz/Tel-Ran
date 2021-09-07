export default function Title(props){
    console.log(props)
    return(
        <h1>{props.title ? props.title : 'Hallochen!'}</h1>
    )
}