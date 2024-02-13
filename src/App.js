import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Exchanges from "./components/Exchanges";
import PageNotFound from "./UI/PageNotFound";

function App() {
    return (
        <div className="min-h-screen bg-dark-blue pt-6">
            <Header />
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/coins" element={<List />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
