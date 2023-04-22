import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Atividade1 from './Atividade1';

function App() {
  const [alunos, setAlunos] = useState(['', '', '', '', '']);
  
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/atividade1">Atividade 1</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/Atividade1">
          <Atividade1 alunos={alunos} setAlunos={setAlunos} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
