import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setsearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    setsearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, [searchValue]);
  const handler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search ">
      <form onSubmit={handler} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Serach here</label>
          <input
            id="name"
            type="text"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
