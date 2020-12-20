
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/container';
import ThemeProvider from './components/theme';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
