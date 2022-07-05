import React, { Component } from 'react'
import "../css/Moviecard.css"

export default class Moviecard extends Component {

  render() {
    return (
      <div className='moviecard'>
          <div className='moviecard__img'><img src={this.props.img}/></div>
          <div className='moviecard__rate'>{this.props.rate.toFixed(1)}</div>
          <div className='moviecard__name'>{this.props.name}</div>
      </div>
    )
  }
}
