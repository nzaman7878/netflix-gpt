import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <SearchBar />
    </div>
  );
};
export default Search;