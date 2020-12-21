import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { doScore, name, score, description } = this.props;
    const disabled = this.props.score === undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${disabled ? 'active' : 'disabled'}`} 
        onClick={disabled ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{!disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;