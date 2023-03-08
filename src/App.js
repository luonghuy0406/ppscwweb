import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import  {publicRoutes} from './routes'
import {DefaultLayout} from './components/Layout'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index)=>{
              const Layout = route.layout === null ? Fragment : DefaultLayout             
              const Page = route.component
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      <Page/>
                    </Layout>
                  }/>
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
