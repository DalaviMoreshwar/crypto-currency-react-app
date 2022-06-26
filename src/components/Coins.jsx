import React from "react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import CoinItem from "./CoinItem";
import "./Coins.css";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {coins.map((coin) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#f4f4f4" }}
              key={coin.id}
              to={`/coin/${coin.id}`}
              element={<Coin />}
            >
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
