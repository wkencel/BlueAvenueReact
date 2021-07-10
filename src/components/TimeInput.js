import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

const styles = {
  root: {
    background: "grey",
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 150,
    color: 'white'
  },
  input: {
    color: "white"
  }
};

function TimePickers(props) {
  const { classes } = props;

  return (
    <TextField
      className="time-fields"
      type="time"
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimePickers);