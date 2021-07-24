import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Action from "./pages/movies/Action";
import Comedy from "./pages/movies/Comedy";
import Netflixoriginal from "./pages/movies/Netflixoriginal";
import Trending from "./pages/movies/Trending";
import Documentry from "./pages/movies/Documentry";
import Horror from "./pages/movies/Horror";
import Romance from "./pages/movies/Romance";
import Login from "./pages/login/Login";



function App() {
  const user = true;
  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/action-movies">
              <Action />
            </Route>
            <Route exact path="/comedy-movies">
              <Comedy />
            </Route>
            <Route exact path="/netflix-original">
              <Netflixoriginal />
            </Route>
            <Route exact path="/trending-movies">
              <Trending />
            </Route>
            <Route exact path="/documentry">
              <Documentry />
            </Route>
            <Route exact path="/horror-movies">
              <Horror />
            </Route>
            <Route exact path="/romantic-movies">
              <Romance />
            </Route>
          </Switch>)}
      </Router>
    </>
  );
}

export default App;
