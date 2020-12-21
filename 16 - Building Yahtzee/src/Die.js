import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

class Die extends Component {
  static defaultProps = {
    numberWords: [faDiceOne, faDiceTwo,faDiceThree, faDiceFour, faDiceFive, faDiceSix],
    val: 1
  };

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let icon = numberWords[val - 1];
    let classes = 'Die ';
    if (locked) classes += 'Die-locked';
    if (rolling) classes += ' Die-rolling'; 

    return (
        <FontAwesomeIcon 
          icon={icon}
          className={`Die ${classes}`}
          onClick={this.handleClick}
          disabled={disabled}
        />
    );
  }
}

export default Die;
