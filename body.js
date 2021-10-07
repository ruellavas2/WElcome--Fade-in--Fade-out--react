import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import App from "./App";



const Body = () => {
    return (
        <div>
          <Switch> 
                <Route path="/WELCOME.COM?welcome=john">
                    <App />
                </Route>
                
            </Switch>  
        </div>
    )
}

export default Body

