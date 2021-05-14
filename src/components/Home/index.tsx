import React from 'react'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getDB } from './reducer/action'
import { stateType } from './reducer/types'

class Home extends React.Component<stateProps, stateType>{
  
  componentDidMount() {
    this.props.getDB()
  }

  render() {
    console.log(this.props.data)
    return (
      <>
      </>
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