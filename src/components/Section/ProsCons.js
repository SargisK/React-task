import React, {Component} from 'react';
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

  state={
    prosTarget: null,
    consTarget: null
  }

  prosChangeValue = (i) => {
    this.setState({prosTarget: i, consTarget: null}) 
  }

  consChangeValue = (i) => {
    this.setState({consTarget: i, prosTarget: null}) 
  }

  changeInputVal = (i, arr, e) => {   
    if (e.target.value.length > 0)  {
      let lastItemNum = arr.length - 1; 
      if (lastItemNum === i) {
        arr.push('')       
        this.props.updateProsCons(this.props.prosConsName, arr)        
      }          
    }   
  }

  focusOut = (i, arr, e) => {
    if (e.target.value.length !== 0) {
      arr.splice(i, 1, e.target.value)
    } else {
      if (arr.length === 1 || i === (arr.length - 1)) {
        arr[i] = '';
      } else {
        arr.splice(i, 1)     
      }
    }
    if (this.props.prosConsName === 'cons') this.setState({consTarget: null});
    else this.setState({prosTarget: null});
  }

  moveFocus = (i, arr, e) => {
    if (e.keyCode === 13) {
      this.focusOut(i, arr, e);     
      if (this.props.prosConsName === 'cons') this.setState({consTarget: this.state.consTarget + 1});  
      else this.setState({prosTarget: this.state.prosTarget + 1});   
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid className={classes.content} item xs={6}>
        <div className={classes.contentTitle}>
            <h3>{this.props.prosConsName.toUpperCase()}</h3>
        </div>                   
        <div>
          <ol> 
            {this.props.prosConsArr.map((item, i, arr) =>
              <li 
                  className={classes.listItem}
                  key={i}
                  onClick={this.props.prosConsName === 'cons' ? this.consChangeValue.bind(this, i, arr) 
                  : this.prosChangeValue.bind(this, i, arr)}
              >
                {this.state.prosTarget === i || this.state.consTarget === i ?
                  <input 
                    type='text'
                    defaultValue={item} 
                    onKeyDown={this.moveFocus.bind(this, i, arr)}
                    onBlur={this.focusOut.bind(this, i, arr)} 
                    onInput={this.changeInputVal.bind(this, i, arr)}                  
                    autoFocus
                  /> : item}                                
              </li>
            )} 
          </ol>
        </div> 
      </Grid>        
    )
  }
}

export default withStyles(styles)(ProsCons);