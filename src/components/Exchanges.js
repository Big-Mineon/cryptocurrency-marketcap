import React, { useEffect, useState } from "react";

import Container from "../UI/Container";
import Loading from "../UI/Loading";
import Button from "../UI/Button";

function Exchanges() {

    const [exchangeId, setExchangeId] = useState([]);
    const [exchangeData, setExchangeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchExchanges() {
            const response = await fetch(`/api/exchange/map?CMC_PRO_API_KEY=dca22541-b717-4053-8bc5-608d8e173179&limit=20&sort=volume_24h`);
            const data = await response.json();
            setExchangeId(data.data);
        }
        fetchExchanges();
    }, []);     // This function gets exchanges id

    let idArray = [];
    exchangeId.map(item => idArray.push(item.id));

    useEffect(() => {
        async function getExchangeInformations() {
            const response = await fetch(`/api/exchange/info?CMC_PRO_API_KEY=dca22541-b717-4053-8bc5-608d8e173179&id=${idArray.join()}`);
            const data = await response.json();
            setExchangeData(Object.entries(data.data));
            setLoading(false);
        }
        if (exchangeId.length > 0) getExchangeInformations();
    }, [exchangeId]);       // This function uses exchanges ids and fetch exchange informations

    return (
        <div className=" min-h-screen mb-12">
            <h1 className="font-extrabold text-2xl ml-5 my-12 text-white">Exchanges</h1>
            {loading && <Loading />}

            {!loading && <div className="flex flex-wrap">
                {exchangeData.map(item => {
                    return (
                        <React.Fragment key={item[0]}>
                            <Container>
                                <div className="flex justify-around items-center text-white">
                                    <img src={item[1].logo} alt="logo" />
                                    <h3 className="font-bold text-xl">{item[1].name}</h3>
                                </div>
                                <div className="flex gap-5 my-5 text-md font-semibold">
                                    <p>24h Spot Volume:</p>
                                    <p>{`${new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(item[1].spot_volume_usd)}`}</p>
                                </div>
                                <a href={item[1].urls.website[0]} target="_blank"><Button title="Go to Website" /></a>
                            </Container>
                        </React.Fragment>
                    );
                })}
            </div>}
        </div>
    );
}

export default Exchanges;
