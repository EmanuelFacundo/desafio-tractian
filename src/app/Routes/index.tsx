import { BrowserRouter, Route, Switch } from "react-router-dom"

import Company from "../../components/Company"
import Home from "../../components/Home"

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:slug" exact component={Company} />
      </Switch>
    </BrowserRouter>
  )
}