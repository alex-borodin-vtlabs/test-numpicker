import React, { Component } from 'react';
import './NumPicker.css';

class NumPicker extends Component {

  state = {
    open: false,
  }

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    options:  React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    value: React.PropTypes.number,
  }

  pick(x) {
    this.props.onChange(x);
  }

  toggleInput() {
    this.setState({open: !this.state.open});
  }

  changeInput(e) {
    if (e.key === 'Enter')
      {
        const value = isNaN(parseInt(e.target.value)) ? null : parseInt(e.target.value);
        this.pick(value);
        this.setState({open: false});
      }

  }

  render() {
    const options = this.props.options.map((x) => {
      return (
        <button
          className={ (x === this.props.value) ? 'btn active' : 'btn' }
          key={x}
          onClick={ this.pick.bind(this, x) }
          >
          {x}{' '}
        </button>
      );
    });
    const input = (this.state.open) ? <span className="input">
                                        <input
                                          className="input"
                                          onKeyPress={this.changeInput.bind(this)}
                                          type="text"
                                          autoFocus="true"
                                        />
                                       <button className="btn close" onClick={this.toggleInput.bind(this)}>
                                         &times;
                                       </button>
                                     </span> : ''
    const otherNumber = (this.props.options.indexOf(this.props.value) === -1 && this.props.value != null);
    return (
      <div>
        <h6>How many players?</h6>
        <div className="numPicker">
          { options }
          <button
            className={ otherNumber ? 'btn active' : 'btn'}
            onClick={ this.toggleInput.bind(this) }>
              { otherNumber ? this.props.value : '...'}
          </button>
          { input }
        </div>
      </div>
    );
  }
}

export default NumPicker;
