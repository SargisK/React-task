import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import ProsCons from './ProsCons'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  section: {
    width: '100%',
    height: '400px'
  },
  sectionContainer: {
    height: '100%'
  } 
}

class Section extends Component {

  state={
    pros: ["it's really tasty", "it's really tasty", "it's really tasty", "it's really tasty", ""],
    cons: ['Makes me fat', '']
  }

  updateProsCons = (prosCons, arr) => {
    if (prosCons === 'pros') this.setState({pros: arr})
    else this.setState({cons: arr})
  }

  render() {
    const {classes} = this.props;

    return (
      <section className={classes.section}>
        <Grid className={classes.sectionContainer} container > 
          <ProsCons updateProsCons={this.updateProsCons.bind(this)} prosConsArr={this.state.pros} prosConsName='pros'/>
          <ProsCons updateProsCons={this.updateProsCons.bind(this)} prosConsArr={this.state.cons} prosConsName='cons'/>
        </Grid>
      </section>
    );
  }
}  

export default withStyles(styles)(Section);