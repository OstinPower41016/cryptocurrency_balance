import * as React from "react";

import { useAppSelector } from "../../../hooks/redux";
import "./Sum.scss";
interface ISumProps {}

const Sum: React.FunctionComponent<ISumProps> = (props) => {
  const state = useAppSelector((state) => state.sum);

  return (
    <section className="sum">
      <div className="sum__wrapper">
        <div className="sum__item">
          <span className="sum__item-title">Общий баланс (сумма):</span>
          <span className="sum__item-value">{state.totalBalance}</span>
        </div>
        <div className="sum__item">
          <span className="sum__item-title">В ордерах (сумма):</span>
          <span className="sum__item-value">{state.inOrders}</span>
        </div>
        <div className="sum__item">
          <span className="sum__item-title">Свободный объем (сумма):</span>
          <span className="sum__item-value">{state.freeVolume}</span>
        </div>
      </div>
    </section>
  );
};

export default Sum;
