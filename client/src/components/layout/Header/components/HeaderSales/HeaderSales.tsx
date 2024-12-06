import { AppBarStyled } from "./HeaderSales";
import SearchToolbar from "../SearchToolbar/SearchToolbar";
import NavigationToolbar from "../NavigationToolbar/NavigationToolbar";
import { storeProps } from "../../../../../store/index.ts";
import { useSelector } from "react-redux";

type HeaderSalesProps = {};

const HeaderSales: React.FC<HeaderSalesProps> = () => {
  const isSearch = useSelector((state: storeProps) => state.search.isSearch);

  return (
    <AppBarStyled position="fixed" color="success">
      {isSearch ? <SearchToolbar /> : <NavigationToolbar />}
    </AppBarStyled>
  );
};

export default HeaderSales;
