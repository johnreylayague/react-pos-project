import Sidebar from "./components/Sidebar/Sidebar.tsx";
import MainContentArea from "./components/MainContentArea/MainContentArea";
import { BoxStyled } from "./SalesStyles.ts";

const Sales = () => {
  return (
    <>
      <BoxStyled>
        <MainContentArea />
        <Sidebar />
      </BoxStyled>
    </>
  );
};

export default Sales;
