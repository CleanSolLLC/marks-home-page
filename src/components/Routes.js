import { Route, Switch } from "react-router-dom";
import About from "./About";

const Routes = () => {
  return (
   <>
     <Switch>
        <Route exact path="/" component={About}/>
     </Switch>  
   
   </>
  )
}