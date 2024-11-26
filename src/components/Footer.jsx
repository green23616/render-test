import { useSetRecoilState } from "recoil";
import pageState from "../store/pageState";
import React, { useEffect } from "react";
import searchState from "../store/searchState";

function Footer() {
  console.log("Footer Render");
  useEffect(() => {
    console.log("Footer mount");
    return () => console.log("Footer unmount");
  }, []);

  const setPage = useSetRecoilState(pageState);
  const setSearch = useSetRecoilState(searchState);

  const handleClick = () => {
    setSearch("Japan");
  };

  return (
    <div className="footer">
      <h3>Footer</h3>
      <button onClick={handleClick}>Recoil +</button>
    </div>
  );
}

export default React.memo(Footer);
