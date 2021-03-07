import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import text from 'bp.txt'; // Relative path to your File

class SimpleForm extends Component {
  state = {
    bp: "",
    bpFinal: ""
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit(){
    this.setState({bpFinal: this.state.bp.split("/")[0]})
  };

  handleChange(e){
    this.setState({ bp: e.target.value});
  };

  handleDateChange = date => {
    // console.log(date);

    this.setState({ date });
  };

  render() {
    return (
      <div>
        <ValidatorForm
          ref="Blood Pressure form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Blood Pressure (ex. 120/80)"
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="Blood Pressure"
                value={this.state.bp}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-2 capitalize">Submit</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default SimpleForm;
