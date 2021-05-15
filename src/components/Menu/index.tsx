import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { companiesType } from './reducer/types'
import { getCompanies } from './reducer/action'

import "./style.module.scss"

class Menu extends React.Component<stateProps, companiesType>{

  componentDidMount(){
    this.props.getCompanies()
  }

  companiesRender() {
    const companies = this.props.companies.list
    return companies.map(company => {
      return (
        <ul key={company.id}>
          <li>
            <a href="/">
              <h1>{company.name}</h1>
            </a>
          </li>
        </ul>
      )
    })
  }

  render() {
    const companies = this.props.companies.list
    return (
      <aside>
        <input type="checkbox"  id="hamburg" />
        <label htmlFor="hamburg">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav id="hamburg">
          <ul>
            <li>
              <a href="/">
                <h1>Home</h1>
              </a>
            </li>
          </ul>
          {companies.length > 0 ? this.companiesRender() : ''}
        </nav>
      </aside>
    )
  }

}

type stateProps = {
  companies: companiesType
  getCompanies: () => (dispatch: Dispatch<AnyAction>) => void;
}

const mapStateToProps = (state: stateProps) => ({
  companies: state.companies
})
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
  getCompanies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)