

function Marketcap(props) {
    return (
        <ul className="hidden md:block">
            <li className=" italic font-bold tracking-widest mb-4">Marketcap</li>
            {props.data.map(item => {
                const formattedMarketCap = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" })
                    .format(item.quote.USD.market_cap);
                return <div className="mb-3" key={item.id}><li className="tracking-wider" >{formattedMarketCap}</li></div>
            })}
        </ul>
    );
}

export default Marketcap;
