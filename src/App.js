import React, { Component,Fragment} from 'react'
import renderRoutes from "@utils/renderRouter"
import {baseConfigRoutes} from "@router"
import {Switch,Redirect} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            {renderRoutes(baseConfigRoutes)}
            <Redirect from="/" to="/home" exact/>
          </Switch>
      </Fragment>
    )
  }
}

export default App;
