import React from "react";
import { useLocation, useParams } from "react-router-dom";
import HeaderSales from "./components/HeaderSales/HeaderSales.tsx";
import HeaderItem from "./components/HeaderItem/HeaderItem.tsx";
import HeaderAddNewItem from "./components/HeaderAddNewItem/HeaderAddNewItem.tsx";
import { ButtonBase } from "@mui/material";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import Ticket from "./components/Ticket/Ticket.tsx";
import useScrollTrigger from "@mui/material/useScrollTrigger";

type PublicHeaderProps = {};

const PublicHeader: React.FC<PublicHeaderProps> = (props) => {
  const {} = props;

  const location = useLocation();
  const params = useParams();

  let content: JSX.Element | null = null;

  if (location.pathname === "/sales") {
    content = <HeaderSales />;
  }

  // if (location.pathname === "/item") {
  // content = <HeaderItem title="Items" subTitleText="All Items" subTitleType="dropdown" />;
  // }

  // if (location.pathname === "/item/category") {
  //   content = <HeaderItem title="Items" subTitleText="Categories" subTitleType="text" />;
  // }

  // if (
  //   location.pathname === "/item/category/create" ||
  //   location.pathname === `/item/category/create/${params.id}`
  // ) {
  //   content = <HeaderAddNewItem link="/item/category" title={"Create category"} />;
  // }

  // if (location.pathname === "/item/create") {
  //   content = <HeaderAddNewItem link="/item" title={"Create Item"} />;
  // }

  // if (location.pathname === `/item/edit/${params.itemId}`) {
  //   content = <HeaderAddNewItem link="/item" title={"Edit item"} />;
  // }

  // if (location.pathname === "/sales/ticket") {
  //   content = <Ticket backLink="sales" />;
  // }

  // if (location.pathname === "/sales/ticket/charge") {
  //   content = <Ticket backLink="sales/ticket" />;
  // }

  return <>{content}</>;
};

export default PublicHeader;
