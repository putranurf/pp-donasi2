import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import Layout from './components/layout/layout'

// Import Pages
import Main from './pages/main'
import Dashboard from './pages/dashboard'
import Login from './pages/Auth/'

function App() {
  return (
    <Router>
      <Switch>
        {/* Auth Route */}
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        {/* Loign */}
        {/* End Auth Route */}
        
        {/* Main Route */}
        <Layout>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Layout>
        {/* End Main Route */}
      </Switch>
    </Router>
  );
}

export default App;
