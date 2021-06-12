import * as React from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";

import "./UserSelection.scss";
import arrow from "./images/arrow.png";
import { getQuery, setQuery } from "../../../utils/query";
interface IUserSelectionProps {}

const UserSelection: React.FunctionComponent<IUserSelectionProps> = (props) => {
  const [currentUser, setCurrentUser] = React.useState<string>("");
  const [isVisibleSelectOptions, setSelectOptions] = React.useState(false);
  const history = useHistory();

  const clickButtonHandler = (e: React.MouseEvent<HTMLElement>) => {
    setSelectOptions(!isVisibleSelectOptions);
    // @ts-ignore
    const clickOnOption = e.target.getAttribute("data-userid");
    if (clickOnOption) {
      setQuery(history, { userId: clickOnOption });
    }
  };

  React.useEffect(() => {
    setCurrentUser(`Пользователь ${getQuery(history, "userId") || "1"}`);
  }, [history.location.search]);

  return (
    <button className="select" onClick={(e) => clickButtonHandler(e)}>
      <div className="select__wrapper">
        <span>{currentUser}</span>
        <img src={arrow} alt="arrow" />
      </div>

      <div className={cn("select__options", { "select__options--active": isVisibleSelectOptions })}>
        <div className="select__option" data-userid="1">
          Пользователь 1
        </div>
        <div className="select__option" data-userid="2">
          Пользователь 2
        </div>
      </div>
    </button>
  );
};

export default UserSelection;
