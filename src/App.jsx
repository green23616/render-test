import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import searchState from "./store/searchState";
import pageState from "./store/pageState";

function App() {
  console.log("App render");
  useEffect(() => {
    console.log("App mount");
    return console.log("App unmount");
  }, []);

  const [number, setNumber] = useState(0);

  const searchValue = useRecoilValue(searchState);
  const pageValue = useRecoilValue(pageState);

  const API_URL = "https://api.unsplash.com/search/photos";
  const API_KEY = "pAEouZcfIjwAylXEegT3seeJ5uAtN9-lmD29z0VLQIw";
  const PER_PAGE = 30;

  const { data, isFetched, isLoading } = useQuery({
    queryKey: ["images", searchValue, pageValue],
    queryFn: async () => {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      return res.data.results;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  if (isLoading) {
    console.log("data loading");
  }
  if (isFetched) {
    console.log(data);
  }

  return (
    <div className="App">
      <h1 className="App__title">Render Test</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        localState +
      </button>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
``;
