import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Playlists } from './pages/Playlists';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/playlists" component={Playlists} />
      </Switch>
    </BrowserRouter>
  );
}
