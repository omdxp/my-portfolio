import { FC } from "react";
import Navbar from "../../components/shared/Navbar";
import Home from "../../components/shared/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "../../components/shared/Create";
import BlogDetails from "../../components/shared/BlogDetails";
import NotFound from "../../components/shared/NotFound";

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
