import React from "react";

import router from "./utils/router";
import { createAppContainer } from "react-navigation";
import CurrentUserProvider from "./utils/providers/CurrentUserProvider";
const AppContainer = createAppContainer(router);

export default function App() {
  return (
    
    <CurrentUserProvider>
      <AppContainer />
    </CurrentUserProvider>
    
  );
}