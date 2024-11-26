import { selector } from "recoil";
import pageState from "./pageState";

export default selector({
  key: "pageSelectorState",
  get: ({ get }) => {
    const page = get(pageState);

    return page * 2;
  },
});
