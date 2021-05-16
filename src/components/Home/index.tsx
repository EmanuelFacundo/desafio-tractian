import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from './reducer/action'
import { assetsType, stateType } from './reducer/types'

import './style.scss'
import Asset from '../Asset'

class Home extends React.Component<stateProps, stateType>{
  
  _assets:Array<assetsType>
  
  constructor(props:stateProps){
    super(props) 
    
    this._assets = this.props.data.assets
  }
  
  componentDidMount() {
    this.props.getDB()
  }
  
  assetsRender(){
    
    return this._assets.map(asset => {
      return (
        <section key={asset.id}>
          <Asset asset={asset} />
        </section>
      )
    })
  }
  
  render() {
    this._assets = this.props.data.assets

    return (
      <div className="home">
        <div className="menuHome">
          <span className="titleNav">
            <h1>ATIVOS</h1>
            <div>
              <input placeholder="Pesquisar ativo..." type="text" />
              <button></button>
            </div>
          </span>
          <span className="bar"></span>
        </div>

        <div className="assets">
          {this._assets[1]?.id ? this.assetsRender() : <h3>Carregando...</h3> }
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