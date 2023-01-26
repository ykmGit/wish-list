
import {
  HashRouter as Router,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

import { ButtonBases } from './pages/buttonBases'
// import { Home } from "../components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Editor } from "./pages/Editor";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
            <Route exact path="/">
              <ButtonBases />
              {/* <Home /> */}
            </Route>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/page3">
              <Page3 />
            </Route>
            <Route path="/editor">
              <Editor />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
