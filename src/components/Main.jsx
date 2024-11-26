import { useRecoilValue } from "recoil";
import pageState from "../store/pageState";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import searchState from "../store/searchState";

function Main() {
  console.log("Main Render");
  useEffect(() => {
    console.log("Main mount");
    return () => console.log("Main unmount");
  }, []);
  const [number, setNumber] = useState(0);

  const searchValue = useRecoilValue(searchState);
  const pageValue = useRecoilValue(pageState);

  const { data, isFetched, isLoading, isStale } = useQuery({
    queryKey: ["images", searchValue, pageValue],
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    console.log("data loading");
  }

  if (isStale) {
    console.log("stale");
  }

  if (isFetched) {
    console.log(data);
  }

  const handleClick2 = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div className="main">
      <h1>Main</h1>
      <h3>localState: {number}</h3>
      <h3>RecoilState: {pageValue}</h3>
      {data &&
        data.map((item) => {
          return (
            <img
              src={item.urls.small}
              key={item.id}
              style={{ width: "50px" }}
            />
          );
        })}
      <button onClick={handleClick2}>State +</button>
    </div>
  );
}

export default React.memo(Main);
