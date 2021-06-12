import * as React from "react";

import "./index.scss";
import Container from "../../components/layouts/container/container";
import logo from "./images/logo.png";
import Sum from "../../components/MainView/Sum/Sum";
import UserSelection from "../../components/MainView/UserSelection/UserSelection";
import Table from "../../components/MainView/Table/Table";
interface IMainViewProps {}

const MainView: React.FunctionComponent<IMainViewProps> = (props) => {
  return (
    <main className="main">
      <Container>
        <img src={logo} alt="Логотип" className="main__logo" />
        <Sum />
        <div className="main__select-user">
          <UserSelection />
        </div>
        <Table />
      </Container>
    </main>
  );
};

export default MainView;
