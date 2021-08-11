const Rating = (props) => {
    const { rating } = props;
    var star = [];
    for (var i = 0; i < 5; i++) {        
        i < Number(rating) ? star.push(<i className='fas fa-star' key={i}></i>) : star.push(<i className='far fa-star' key={i}></i>);
    }
    return star;    
}
export default Rating;