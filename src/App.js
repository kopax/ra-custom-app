// in src/App.js
import React from 'react';
import { render } from 'react-dom';

// redux, react-router, redux-form, saga, and material-ui
// form the 'kernel' on which react-admin runs
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// prebuilt react-admin features
import {
  adminSaga,
  TranslationProvider,
} from 'react-admin';
import simpleRestClient from 'ra-data-simple-rest';
import createReducers from 'ra-core/lib/reducer';
import { registerResource } from 'ra-core/lib/actions/resourcesActions';
// your app components
import Dashboard from './Dashboard';
import { PostList, PostCreate, PostEdit, PostShow } from './Post';
import { CommentList, CommentEdit, CommentCreate } from './Comment';
import { UserList, UserEdit, UserCreate } from './User';
// your app labels
import i18nProvider from './i18nProvider';

// create a Redux app

const reducer = createReducers({}, 'en', i18nProvider('en'));
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const store = createStore(reducer, undefined, compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));
store.dispatch(registerResource([{ name: 'posts' }, { name: 'comments' }, { name: 'users' }]));
const dataProvider = simpleRestClient('http://path.to.my.api/');
sagaMiddleware.run(adminSaga(dataProvider, i18nProvider));

// bootstrap redux and the routes
const App = () => (
    <Provider store={store}>
      <TranslationProvider>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  My admin
                </Typography>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/posts" hasCreate render={(routeProps) => <PostList resource="posts" {...routeProps} />} />
              <Route exact path="/posts/create" render={(routeProps) => <PostCreate resource="posts" {...routeProps} />} />
              <Route exact path="/posts/:id" hasShow render={(routeProps) => <PostEdit resource="posts" {...routeProps} />} />
              <Route exact path="/posts/:id/show" hasEdit render={(routeProps) => <PostShow resource="posts" {...routeProps} />} />
              <Route exact path="/comments" hasCreate render={(routeProps) => <CommentList resource="comments" {...routeProps} />} />
              <Route exact path="/comments/create" render={(routeProps) => <CommentCreate resource="comments" {...routeProps} />} />
              <Route exact path="/comments/:id" render={(routeProps) => <CommentEdit resource="comments" {...routeProps} />} />
              <Route exact path="/users" hasCreate render={(routeProps) => <UserList resource="users" {...routeProps} />} />
              <Route exact path="/users/create" render={(routeProps) => <UserCreate resource="users" {...routeProps} />} />
              <Route exact path="/users/:id" render={(routeProps) => <UserEdit resource="users" {...routeProps} />} />
            </Switch>
          </MuiThemeProvider>
        </ConnectedRouter>
      </TranslationProvider>
    </Provider>
);

export default App;