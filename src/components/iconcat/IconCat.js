const IconCat = (props)=>{
    if (props.category === '0'){
        return(
            <i className="fas fa-car"></i>
        )
    } else{
        return(
            <i className="fas fa-motorcycle"></i>
        )
    }
}
export default IconCat