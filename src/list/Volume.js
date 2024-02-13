
function Volume(props) {
    return (
        <ul className="hidden md:block">
            <li className=" italic font-bold tracking-widest mb-4 md:visible">Volume</li>
            {props.data.map(item => {
                const formattedVolume = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" })
                    .format(item.quote.USD.volume_24h);
                return <div className="mb-3" key={item.id}><li className="tracking-wider" >{formattedVolume}</li></div>
            })}
        </ul>
    )
}

export default Volume
