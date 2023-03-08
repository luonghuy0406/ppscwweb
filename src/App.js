import React, { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return <div>
    ádasdasdsadassad
  </div>
  return (
    <HashRouter>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </HashRouter>
  );
}

export default App;
