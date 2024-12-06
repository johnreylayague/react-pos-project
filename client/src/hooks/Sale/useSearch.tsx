import React from "react";

export const useSearch = () => {
  const [searchData, setSearchData] = React.useState({
    searchInputValue: "",
    isSearch: false,
  });

  const handleOnClearSearchInput = () => {
    setSearchData((prevSearchData) => {
      return { ...prevSearchData, searchInputValue: "" };
    });
  };

  const handleOnUpdateSearchInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    setSearchData((prevSearchData) => {
      return { ...prevSearchData, searchInputValue: value };
    });
  };

  return {
    searchInputValue: searchData.searchInputValue,
    handleOnUpdateSearchInput,
    handleOnClearSearchInput,
  };
};
