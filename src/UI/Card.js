
function Card(props) {
    return (
        <div className="p-3 w-max sm:w-1/2">
            <p>{props.title}</p>
            <p className="text-white">{props.amount}</p>
        </div>
    );
}

export default Card;
