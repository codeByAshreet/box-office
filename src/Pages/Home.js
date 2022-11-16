import React, { useState } from "react";
import ActorGrid from "../Components/Actor/ActorGrid";
import MainPageLayout from "../Components/MainPageLayout";
import ShowGrid from "../Components/Show/ShowGrid";
import { apiGet } from '../misc/config.js';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from "./Home.styled";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isSearchOption = searchOption === "shows";

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResult(result);
    });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResult = () => {
    if (result && result.length === 0) {
      return <div>404 NOT FOUND</div>;
    }
    if (result && result.length > 0) {
      return result[0].show ? <ShowGrid  data={result}/> : <ActorGrid data={result} />;
    }
    return null;
  };
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  console.log(searchOption);
  return (
    <div>
      <MainPageLayout>
        <SearchInput
          type="text"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <RadioInputsWrapper>
          <div>

          <label htmlFor="shows-search">
            Shows
            <input
              type="radio"
              value="shows"
              id="shows-search"
              checked={isSearchOption}
              onChange={onRadioChange}
              />
          </label>
              </div>
              <div>

          <label htmlFor="actor-search">
            Actors
            <input
              type="radio"
              value="people"
              id="actors-search"
              checked={!isSearchOption}
              onChange={onRadioChange}
              />
          </label>
              </div>
        </RadioInputsWrapper>
        <SearchButtonWrapper>

        <button type="button" onClick={onSearch}>
          search
        </button>
        </SearchButtonWrapper>
        {renderResult()}
      </MainPageLayout>
    </div>
  );
};

export default Home;
