import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";
import SearchResults from "./SearchResults"; 

const Browse = () => {
  const showSearch = useSelector((state) => state.search.showSearch);

  return (
    <div>
      <Header />
      <Search />
      {showSearch ? <SearchResults /> : ( 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
