import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import MainPage from "pages/MainPage.js";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/components/:type/:subtype/:name">
    //       <ComponentRenderer />
    //     </Route>
    //     <Route path="/components/:type/:name">
    //       <ComponentRenderer />
    //     </Route>
    //     <Route path="/thank-you">
    //       <ThankYouPage />
    //     </Route>
    //     <Route path="/">
    //       <MainLandingPage />
    //     </Route>
    //   </Switch>
    // </Router>
    <MainPage />
  );
}
