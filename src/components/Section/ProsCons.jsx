import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  content: {
    borderLeft: '1px solid lightgrey',
    overflowY: 'auto'
  },
  contentTitle: {
    textAlign: 'center',
    borderBottom: '1px solid lightgrey'
  },
  listItem: {
    lineHeight: '30px',
  }
};

class ProsCons extends Component {

  state = {
    prosTarget: null,
    consTarget: null
  }

  prosChangeValue = (indexArray) => {
    this.setState({ prosTarget: indexArray, consTarget: null })
  }

  consChangeValue = (indexArray) => {
    this.setState({ consTarget: indexArray, prosTarget: null })
  }

  changeInputVal = (index, arr, event) => {
    if (event.target.value.length > 0) {
      const lastItemNum = arr.length - 1;
      if (lastItemNum === index) {
        arr.push('');
        this.props.updateProsCons(this.props.prosConsName, arr);
      }
    }
  }

  focusOut = (index, arr, event) => {
    if (event.target.value.length !== 0) arr.splice(index, 1, event.target.value);
    else if (arr.length === 1 || index === (arr.length - 1)) arr[index] = '';
    else arr.splice(index, 1);
    if (this.props.prosConsName === 'cons') this.setState({ consTarget: null });
    else this.setState({ prosTarget: null });
  }

  moveFocus = (index, arr, event) => {
    if (event.keyCode === 13) {
      this.focusOut(index, arr, event);
      if (this.props.prosConsName === 'cons') this.setState({ consTarget: this.state.consTarget + 1 });
      else this.setState({ prosTarget: this.state.prosTarget + 1 });
    }
  }

  render() {
    const { classes, prosConsName } = this.props;

    return (
      <Grid className={classes.content} item xs={6}>
        <div className={classes.contentTitle}>
          <h3>{prosConsName.toUpperCase()}</h3>
        </div>
        <div>
          <ol>
            {this.props.prosConsArr.map((item, index, arr) =>
              <li
                className={classes.listItem}
                key={index}
                onClick={this.props.prosConsName === 'cons' ? this.consChangeValue.bind(this, index, arr)
                  : this.prosChangeValue.bind(this, index, arr)}
              >
                {this.state.prosTarget === index || this.state.consTarget === index ?
                  <input
                    type='text'
                    defaultValue={item}
                    onKeyDown={this.moveFocus.bind(this, index, arr)}
                    onBlur={this.focusOut.bind(this, index, arr)}
                    onInput={this.changeInputVal.bind(this, index, arr)}
                    autoFocus
                  /> : item}
              </li>)}
          </ol>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProsCons);