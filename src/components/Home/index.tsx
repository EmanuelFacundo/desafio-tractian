import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from './reducer/action'
import { stateType } from './reducer/types'

class Home extends React.Component<stateProps, stateType>{
  constructor(props: stateProps) {
    super(props)
  }
  componentDidMount() {
    this.props.getDB()
  }

  render() {
    console.log(this.props.data)
    return (
      <h1>HOME</h1>
    )
  }

}

type stateProps = {
  data: any;
  getDB: any;
}

const mapStateToProps = (state: stateProps) => ({ 
  data: state.data?.state ? 
  state.data?.state : 
  state.data 
})
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ 
  getDB 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)