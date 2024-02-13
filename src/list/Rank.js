

function Rank(props) {
    return (
        <ul>
            <li className=" italic font-bold tracking-widest mb-4">Rank</li>
            {props.data.map(item => {
                return <div className="mb-3" key={item.id}><li >{item.cmc_rank}</li></div>
            })}
        </ul >
    );
}

export default Rank;
