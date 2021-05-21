import React, { ChangeEvent } from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

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

  optionsg1 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Saúde dos Ativos'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: 0,
        style: {
          fontSize: '10px',
          fontFamily: 'Roboto'
        }
      },
      title: {
        text: 'Temperatura Máxima (°c)'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Saúde (%)'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Saúde',
      data: [
        ["", 0],
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#000000',
        align: 'right',
        format: '{point.y:.2f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '10px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  }

  optionsg2 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Coletas Uptime(Ligada)'
    },
    xAxis: {
      categories: [''],
      labels: {
        rotation: 0,
        style: {
          fontSize: '10px',
          fontFamily: 'Roboto'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Total Coletas / Total de Horas'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Total de Coletas',
      data: [0]
    },{
      name: 'Total de Horas de Coletas',
      data: [0]
    }]
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
      if(index === 1){
        const totalUptime = asset.metrics.totalUptime.toFixed(2)
        this.optionsg1.series[0].data.push([asset.name, asset.healthscore])
        this.optionsg2.xAxis.categories.push(asset.name)
        this.optionsg2.series[0].data.push(asset.metrics.totalCollectsUptime)
        this.optionsg2.series[1].data.push(parseFloat(totalUptime))
      }

      if (asset.name.match(this.assetSearch) && asset.unitId === index) {
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
        // console.log(unit.id)
        return (
          <div key={unit.id} className="units">
            <div className="nav">
              {index > 0 ? <span className="bar"></span> : ""}
              <div className="title">
                <h1>{unit.name}</h1>

              </div>
            </div>
            <section className="assets">
              {this.renderAssets(unit.id)}
            </section>
          </div>
        )
      }

      return ""
    })
  }

  render() {
    
    this.optionsg1.series[0].data.pop()
    this.optionsg2.xAxis.categories.pop()
    this.optionsg2.series[0].data.pop()
    this.optionsg2.series[1].data.pop()

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
          <section className="graphic">
            <HighchartsReact
              highcharts={Highcharts}
              // constructorType={'stockChart'}
              options={this.optionsg1}
            />
            <HighchartsReact
              highcharts={Highcharts}
              // constructorType={'stockChart'}
              options={this.optionsg2}
            />
          </section>
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
