import React from 'react'
import NavBar from './components/NavBar'

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import history from './utils/history'

import PrivateRoute from "./components/PrivateRoute";
import Layout from './components/Layouts/Main'
// function App() {
//   return (
//     {/* other components removed for brevity */}

//     {/* NEW - Modify the /profile route to use PrivateRoute instead of Route */}
//     <PrivateRoute path="/profile" component={Profile} />
//   );
// }
function App() {
  return (
    <div className="App">
     
      {/* Don't forget to include the history module */}
      <Router history={history}>
      <Layout>
      <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
        </Layout>
        
      </Router>
    </div>
  )
}

export default App
