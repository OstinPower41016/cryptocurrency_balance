import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";

import { setSumData } from "../../../store/Sum/sumSlice";
import { getQuery } from "../../../utils/query";
import { getUser } from "../../api/user";
import "./Table.scss";
interface ITableProps {}

const getExtraUpdateClass = (newValue: string, prevValue?: string) => {
  if (!prevValue) {
    return;
  }

  if (+prevValue > +newValue) {
    return "red";
  } else if (+prevValue < +newValue) {
    return "green";
  }
};

const Table: React.FunctionComponent<ITableProps> = (props) => {
  const history = useHistory();
  const { search } = useLocation();
  const [tableFC, setTableData] = React.useState<React.FC[]>([]);
  const [currentData, setCurrentDate] = React.useState<any>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userId = getQuery(history, "userId") || undefined;
    const fetchUserData = async () => {
      const response = await getUser(userId);
      const dataPreparation = response.map((data: any) => {
        const prevData = currentData?.find(({ coin }: any) => coin === data.coin);
        return (
          <tr key={data.id}>
            <td>
              <div className="table__coin-cell">
                <img src={data.coin_img} alt="Иконка валюты" className="table__icon" />
                <span>
                  {data.coin_name}({data.coin})
                </span>
              </div>
            </td>
            <td className={cn("table__cell", getExtraUpdateClass(data.price, prevData?.price))}>
              {data.price}
            </td>
            <td className={cn("table__cell", getExtraUpdateClass(data.balance, prevData?.balance))}>
              {data.balance}
            </td>
            <td className={cn("table__cell", getExtraUpdateClass(data.frozen, prevData?.frozen))}>
              {data.frozen}
            </td>
            <td
              className={cn(
                "table__cell",
                getExtraUpdateClass(data.available, prevData?.available),
              )}
            >
              {data.available}
            </td>
          </tr>
        );
      });
      setTableData(dataPreparation);
      setCurrentDate(response);
      dispatch(setSumData({ data: response }));
    };

    fetchUserData();
    const idInterval = setInterval(fetchUserData, 10000);

    return () => clearInterval(idInterval);
  }, [search]);

  return (
    <table className="table">
      <thead>
        <tr>
          <td className="table__coin">Монета</td>
          <td>Курс к USDT</td>
          <td>Общий баланс</td>
          <td>В ордерах</td>
          <td>Свободный объем</td>
        </tr>
      </thead>
      <tbody>{tableFC}</tbody>
    </table>
  );
};

export default Table;
