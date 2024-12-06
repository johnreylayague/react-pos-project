import React from "react";
import Header from "./components/Header/Header";
import GeneralOptionList from "./components/GeneralOptionList/GeneralOptionList";

type GeneralProps = {};

const General: React.FC<GeneralProps> = (props) => {
  const {} = props;

  return (
    <>
      <Header title="General" />
      <GeneralOptionList />
    </>
  );
};

export default General;
