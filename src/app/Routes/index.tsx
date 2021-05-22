import { BrowserRouter, Route, Switch } from "react-router-dom"

import Company from "../../components/Company"
import Home from "../../components/Home"
import Not from "../../components/NotFound"

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:slug/:1" exact component={Company} />
        <Route path="/:slug/:slug" component={Not} />
      </Switch>
    </BrowserRouter>
  )
}