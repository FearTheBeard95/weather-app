import logo from './logo.svg';
import Header from './components/Header'
import Weather from './components/CurrentWeather/weather'
import About from './pages/About'
import Help from './pages/Help'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import configureStore from './store/store'
import Search from './components/Search/search'
import { Provider } from 'react-redux'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />
          <Search />
          <Switch>
            <Route path="/">
              <Weather />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
