import { HashRouter, Route, Routes } from "react-router-dom";
import Channels from "./Channels";
import Home from "./Home";

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv" element={<Channels />} />
            </Routes>
        </HashRouter>
    );
}