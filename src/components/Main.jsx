import React from "react";
import { FirstImage } from "./Images/FirstImage";
import { SecondImage } from "./Images/SecondImage";
import { Table } from "react-bootstrap";

export const Main = () => {
  let width = window.innerWidth;
  return (
    <div className="bg-dark" style={{ fontFamily: "sans-serif" }}>
      <FirstImage width={width - 20} />
      <div className="table-responsive">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy / Sell Price</th>
              <th scope="col">Difference</th>
              <th scope="col">Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>WazirX</td>
              <td>₹ 40,49,595</td>
              <td>₹ 40,49,439 / ₹ 40,49,595</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Bitbns</td>
              <td>₹ 40,49,595</td>
              <td>₹ 40,49,439 / ₹ 40,49,595</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Giotus</td>
              <td>₹ 40,49,595</td>
              <td>₹ 40,49,439 / ₹ 40,49,595</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
            <tr>
              <td scope="row">4</td>
              <td>Colodax</td>
              <td>₹ 40,49,595</td>
              <td>₹ 25,75,167 / ₹ 26,08,984</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
            <tr>
              <td scope="row">5</td>
              <td>Zebpay</td>
              <td>₹ 40,49,595</td>
              <td>₹ 40,49,439 / ₹ 40,49,595</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
            <tr>
              <td scope="row">6</td>
              <td>CoinDCX</td>
              <td>₹ 40,49,595</td>
              <td>₹ 40,49,439 / ₹ 40,49,595</td>
              <td className="text-info">6.04 %</td>
              <td className="text-info">▲ ₹ 2,30,623</td>
            </tr>
          </tbody>
        </table>
      </div>
      <SecondImage width={width - 20} />
    </div>
  );
};
