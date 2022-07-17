import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Router from "./routes/Router";
import { useEffect, useState } from "react";
import menudisplay from "./helper/menudisplay"

function App() {

  useEffect(() => {
    menudisplay();
  }, []);

  return (
    <>
      <Header /> 
      
      <Router />
      
      <Footer />
    </>
  );
}

export default App;
