

function Price(props) {
    return (
        <ul>
            <li className=" italic font-bold tracking-widest mb-4">Price</li>
            {props.data.map(item => {
                const formattedPrice = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" })
                    .format(item.quote.USD.price);
                return <div className="mb-3" key={item.id}><li className="tracking-wide">{formattedPrice}</li></div>
            })}
        </ul>
    );
}

export default Price;
