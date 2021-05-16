import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from './reducer/action'
import { stateType } from './reducer/types'

import './style.scss'

class Home extends React.Component<stateProps, stateType>{

  componentDidMount() {
    this.props.getDB()
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="home">
        <div className="title">
          <span className="textAndInput">
            <h1>ATIVOS</h1>
            <div>
              <input placeholder="Pesquisar ativo..." type="text" />
              <button></button>
            </div>
          </span>
          <span className="bar"></span>
        </div>
      </div>
    )
  }

}

type stateProps = {
  data: stateType;
  getDB: () => (dispatch: Dispatch<AnyAction>) => void;
}

const mapStateToProps = (state: stateProps) => ({
  data: state.data
})
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
  getDB
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)