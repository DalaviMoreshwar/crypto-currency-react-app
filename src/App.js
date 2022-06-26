import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";

const _URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(_URL)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
