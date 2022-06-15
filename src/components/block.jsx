function Block(props){
    return(
        <div className = "block" style = {{backgroundImage: `url(${props.imgsrc})`}}>
            <h5>{props.text}</h5>
        </div>
    );
}

export default Block;