import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFoundPage = () => {
    const { push } = useHistory();

    const handleClick = () => {
        push("/");
    };

  return (
    <div className="App">
      <h1>Oops Page not Found! :(</h1>
      <button onClick={handleClick}>go to home</button>
    </div>
  );
};

export default PageNotFoundPage;