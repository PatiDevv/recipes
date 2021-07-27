import HomePage from './HomePage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Recipes from './Recipes';
import { routes } from '../routes';
import NotFound from './NotFound';
import DetailsRecipe from './DetailsRecipe';
import { Provider } from 'react-redux';
import store from '../redux';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.recipes} component={Recipes} />
          <Route exact path={routes.recipe} component={DetailsRecipe} />
          <Route path={routes.notfound} component={NotFound} />
          <Route path={'*'} render={() => <Redirect to={routes.notfound} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
