import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

// import { assetsType, unitsType, usersType } from './types'
import { getDB } from '../Home/reducer/action'
import { stateType } from '../Home/reducer/types'
import { assetsType, unitsType, usersType } from './types'

type stateCompanyType ={
  assets: Array<assetsType>;
  units: Array<unitsType>;
  users: Array<usersType>;
  match: any;
  getDB: () => (dispatch: Dispatch<AnyAction>) => void;
}

class Company extends React.Component<stateCompanyType, stateProps>{

  assetsCompany: Array<assetsType>
  companyId = this.props.match.url.slice(this.props.match.url.length - 1)

  constructor(props: stateCompanyType){
    super(props)

    this.assetsCompany = this.props.assets
    this.companyId = parseInt(this.companyId)

  }
  componentDidMount(){
    this.props.getDB()
  }
  
  render() {
    this.assetsCompany = this.props.assets.filter(asset => {

      return asset.companyId === this.companyId ? asset : null
      
    })
    return (
      <h1>Company</h1>
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
