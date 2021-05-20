import React, { ChangeEvent } from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from '../Home/reducer/action'
import { stateType } from '../Home/reducer/types'
import { assetsType, unitsType, usersType } from './types'

import './style.scss'
import Asset from '../Asset'

type stateCompanyType = {
  assets: Array<assetsType>;
  units: Array<unitsType>;
  users: Array<usersType>;
  match: any;
  getDB: () => (dispatch: Dispatch<AnyAction>) => void;
}

class Company extends React.Component<stateCompanyType, stateProps>{

  unitSearch = ""
  assetSearch = ""
  assetsCompany: Array<assetsType>
  company = {
    id: parseInt(this.props.match.url
      .slice(this.props.match.url.length - 1)),
    name: ""
  }

  constructor(props: stateCompanyType) {
    super(props)

    this.assetsCompany = this.props.assets

    this.setUnitSearch = this.setUnitSearch.bind(this)
    this.setAssetSearch = this.setAssetSearch.bind(this)
  }
  componentDidMount() {
    this.props.getDB()
  }

  setAssetSearch(asset: ChangeEvent<HTMLInputElement>) {
    this.assetSearch = asset.target.value ? asset.target.value : ""
    this.forceUpdate()
  }

  setUnitSearch(unit: ChangeEvent<HTMLInputElement>) {
    this.unitSearch = unit.target.value ? unit.target.value : ""
    this.forceUpdate()
  }

  renderAssets(index: number) {
    return this.props.assets.map(asset => {
      if (asset.name.match(this.assetSearch)) {
        return (
          <section key={asset.id}>
            <Asset asset={asset} />
          </section>
        )
      }

      return ""
    })
  }

  renderUnits() {
    return this.props.units.map((unit, index) => {
      if (unit.name.match(this.unitSearch)) {
        return (
          <div key={unit.id} className="units">
            <div className="nav">
              {index > 0 ? <span className="bar"></span> : ""}
              <div className="title">
                <h1>{unit.name}</h1>

              </div>
            </div>
            <section className="assets">
              {this.renderAssets(index)}
            </section>
          </div>
        )
      }

      return ""
    })
  }

  render() {

    this.assetsCompany = this.props.assets.filter(asset => {
      return asset.companyId === this.company.id ? asset : null
    })

    if (this.assetsCompany.length > 0) {
      this.company.name = this.props.match.url
        .slice(1, (this.props.match.url.length - 2))
        .replace("-", " ")

      return (
        <div className="company">
          <div className="companyContainer">
            <h1>{this.company.name}</h1>
            <div className="inputs">
              <span className="input">
                <input
                  placeholder="Pesquisar unidade..."
                  type="text"
                  onChange={this.setUnitSearch}
                />
                <button></button>
              </span>
            <span className="input">
              <input
                placeholder="Pesquisar ativo..."
                type="text"
                onChange={this.setAssetSearch}
              />
              <button></button>
            </span>
            </div>
          </div>
          <span className="bar"></span>
          {this.renderUnits()}
        </div>
      )
    }

    return (
      <>

      </>
    )

  }
}

type stateProps = {
  data: stateType;
}

const mapStateToProps = (state: stateProps, ownProps: string) => ({
  assets: state.data.assets,
  units: state.data.units,
  users: state.data.users,
  match: ownProps.match
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
  getDB
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Company)
