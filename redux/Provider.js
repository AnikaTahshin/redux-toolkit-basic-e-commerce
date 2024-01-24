"use client";

import store from "./store";
import { Provider } from "react-redux";
export default function ProviderFun({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
