import React, {Component} from 'react'

export default class Image extends Component {
  render(props) {
    return (
      
      
      <div>
      <img src={this.props.link} alt="cat fight"/>
      </div>
    );
  }
}