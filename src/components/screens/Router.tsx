import { HashRouter, Route, Routes } from "react-router-dom";
import Channels from "./Channels";
import ChannelsPrintable from "./ChannelsPrintable";
import Home from "./Home";

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv" element={<Channels />} />
                <Route path="/tvprint" element={<ChannelsPrintable />} />
            </Routes>
        </HashRouter>
    );
}