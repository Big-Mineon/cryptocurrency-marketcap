import { useEffect, useState } from "react";

import Card from "../UI/Card";
import Loading from "../UI/Loading";

function Header() {

    const [totalCurrency, setTotalCurrency] = useState(0);
    const [btcDom, setBtcDom] = useState(0);
    const [totalMcap, setTotalMcap] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGeneralData() {
            const response = await fetch(`/api/global-metrics/quotes/latest?CMC_PRO_API_KEY=dca22541-b717-4053-8bc5-608d8e173179`);
            const data = await response.json();
            setTotalCurrency(data.data.total_cryptocurrencies);
            setBtcDom(data.data.btc_dominance);
            setTotalMcap(data.data.quote.USD.total_market_cap);
            setTotalVolume(data.data.quote.USD.total_volume_24h);
            setLoading(false);
        }
        fetchGeneralData();
    }, []);

    const formattedNumber = new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 5 }).format(totalCurrency);
    const formattedTotalMcap = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(totalMcap);
    const formattedTotalVolume = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(totalVolume);

    return (
        <header className="bg-light-blue text-gray-light font-bold flex flex-wrap max-w-7xl p-4 mx-5 rounded-2xl border-2 border-green lg:max-w-full lg:flex-nowrap">
            {loading && <Loading />}

            {!loading && <>
                <Card title="Total Cryptocurrencies" amount={formattedNumber} />
                <Card title="BTC Dominance" amount={`${btcDom.toFixed(2)}%`} />
                <Card title="Total Marketcap" amount={formattedTotalMcap} />
                <Card title="Total Volume 24h" amount={formattedTotalVolume} />
            </>}
        </header>
    );
}

export default Header;
