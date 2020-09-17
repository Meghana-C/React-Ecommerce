import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import ProductList from './components/productList';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/' component ={ProductList} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
