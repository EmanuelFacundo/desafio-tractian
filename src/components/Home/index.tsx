import React, { ChangeEvent } from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from './reducer/action'
import { assetsType, stateType } from './reducer/types'

import './style.scss'
import Asset from '../Asset'

class Home extends React.Component<stateProps, stateType>{

  _assets: Array<assetsType>
  _assetSearch: string

  constructor(props: stateProps) {
    super(props)

    this._assets = this.props.data.assets
    this._assetSearch = ""

    this.assetsRender = this.assetsRender.bind(this)
    this.setAssetSearch = this.setAssetSearch.bind(this)
  }

  setAssetSearch(name: ChangeEvent<HTMLInputElement>) {

    this._assetSearch = name.target.value ? name.target.value : ""
    this.forceUpdate()
  }

  componentDidMount() {
    this.props.getDB()
  }

  assetsRender(clickSearch?:boolean) {

    if(clickSearch){
      this.forceUpdate()
    }

    return this._assets.map(asset => {
      if (asset.name.match(this._assetSearch)) {
        const unitId = asset.unitId
        const companyId = asset.companyId
        return (
          <section key={asset.id} >
            <Asset
              asset={asset}
              unity={this.props.data.units[unitId - 1]}
              company={this.props.data.companies[companyId - 1]} />
          </section>
        )
      }
      return ""
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
              <input
                placeholder="Pesquisar ativo..."
                onChange={this.setAssetSearch}
                type="text"
              />
              <button onClick={() => this.assetsRender(true)} />
            </div>
          </span>
          <span className="bar"></span>
        </div>

        <div className="assets">
          {this._assets[1]?.id || this._assetSearch ? this.assetsRender() : <h3>Carregando...</h3>}
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