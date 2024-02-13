

function Change(props) {
    return (
        <ul>
            <li className=" italic font-bold tracking-widest mb-4">24h %</li>
            {props.data.map(item => {
                return <div className="mb-3" key={item.id}><li className={`tracking-wider ${item.quote.USD.percent_change_24h >= 0 ? "text-green" : "text-red"}`} >{`%${item.quote.USD.percent_change_24h.toFixed(2)}`}</li></div>
            })}
        </ul>
    );
}

export default Change;
