import React from "react"
import emailjs from "emailjs-com";
import { Input, TextField } from '@material-ui/core';
import {  Form,   TextArea, Grid } from "semantic-ui-react"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import { Link } from 'gatsby';
// import DatePickers from './DateInput'
// import TimePickers from './TimeInput'
// require('dotenv').config();
// let serviceId = process.env.YOUR_SERVICE_ID_PURCHASE_REQUEST
// let templateId = process.env.YOUR_TEMPLATE_ID_PURCHASE_REQUEST
// let userId = process.env.YOUR_USER_ID_PURCHASE_REQUEST

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

function PurchaseRequest(props) {
  const { classes } = props;
  function sendEmail(event) {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_8frj60q',
        'template_q3mhzsa',
        event.target,
        'user_OrrMkaU8MTAiz3JrnRlxo'
      )
      .then(
        result => {
          console.log(result.text)
          alert('thank you for submitting your request.  Looking forward to creating the experience of a lifetime!')
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Grid centered>
      <Grid.Column computer={80} mobile={16}>
        <h1>Purchase Request</h1>
          <form onSubmit={sendEmail}>
            <div className="field half first">
              <input
                control={Input}
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className="field half">
              <input
                control={Input}
                label="Name"
                name="name"
                placeholder="Name"
                type="text"
                required
              />
            </div>
            <div className="field half first">
              <input
                control={Input}
                label="Venue-name"
                name="venue-name"
                placeholder="venue name"
                type="text"
                required
              />
            </div>
            <div className="field half first">
              <input
                control={Input}
                label="Location"
                name="location"
                placeholder="city, state"
                type="text"
                required
              />
            </div>
            <div className="field half first">
              <p style={{"font-size":"24px"}}>Date: </p>
              <TextField
                control={Input}
                name="date-purchase-request"
                type='date'
                required
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
            </div>
            <div id='reception-purchase-request'>
              <h4>Reception: </h4>
              <div className="field half">
                <p style={{'float': 'left', 'margin-top':0, 'margin-bottom': 0}}>start time &nbsp;&nbsp;</p>
                <TextField
                control={Input}
                  className="time-fields"
                  name="reception-start-time"
                  type="time"
                  className={classes.root}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </div>
              <div className="field half" style={{'float':'left'}}>
                <p style={{'float':'left', 'margin-top':0, 'margin-bottom': 0}}>end time &nbsp;&nbsp;</p>
                <TextField
                control={Input}
                  className="time-fields"
                  name="reception-end-time"
                  type="time"
                  className={classes.root}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <h4><u>if applicable</u></h4>
            <div id='cocktail-ceremony-purchase-request'>
              <div id='cocktail-purchase-request'>
                <h4>Cocktail Hr (60 min): </h4>
                <div className="field half">
                  <p style={{'float': 'left', 'margin-top':0, 'margin-bottom': 0}}>start time &nbsp;&nbsp;</p>
                  <TextField
                  control={Input}
                    className="time-fields"
                    name="cocktail-start-time"
                    type="time"
                    className={classes.root}
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </div>
                <div className="field half" style={{'float':'left'}}>
                  <p style={{'float':'left', 'margin-top':0, 'margin-bottom': 0}}>end time &nbsp;&nbsp;</p>
                  <TextField
                  control={Input}
                    className="time-fields"
                    name="cocktail-end-time"
                    type="time"
                    className={classes.root}
                    InputProps={{
                      className: classes.input
                    }}
                  />
                </div>
              </div>
              <div id='ceremony-purchase-request'>
                <h4>Ceremony (30 min): </h4>
                <div className="field half">
                  <p style={{'float': 'left', 'margin-top':0, 'margin-bottom': 0}}>start time &nbsp;&nbsp;</p>
                  <TextField 
                  control={Input}
                  name="ceremony-start-time"
                  placeholder="Ceremony-end-time"
                  type="time"
                  className={classes.root}
                  InputProps={{
                    className: classes.input
                  }}
                  />
                </div>
                <div className="field half" style={{'float':'left'}}>
                  <p style={{'float':'left', 'margin-top':0, 'margin-bottom': 0}}>end time &nbsp;&nbsp;</p>
                  <TextField 
                  control={Input}
                  name="ceremony-end-time"
                  placeholder="Ceremony-end-time"
                  type="time"
                  className={classes.root}
                  InputProps={{
                    className: classes.input
                  }}
                  />
                </div>
              </div>
            </div>
            <ul className="actions">
              <Form.Field
              control={TextArea}
              label="message"
              name="message"
              placeholder="Copy and Paste your quote from the price calculator here.  
              Please include any other helpful info or customizations..."
              required
              />
              <div style={{'text-align':'center'}}>
                <li>
                  <input type="submit" value="Submit Purchase Request" className="special" />
                </li>
              </div>
            </ul>
          </form>  
      </Grid.Column>
    </Grid>
            
  )
}

PurchaseRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PurchaseRequest);