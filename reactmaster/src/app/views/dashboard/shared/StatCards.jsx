import React from "react";
import { Grid, Card, Icon, IconButton, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: theme.palette.primary.main
  }
});

const result = 25

const recentBP = "120/80";
const avgBP = "130/90";
const risk = result + "% chance of Heart Disease"
const systolic = recentBP.split("/")[0]

const diastolic = recentBP.split("/")[1]


const checkCondition = (systolic, diastolic) => {
  if(systolic < 120 && diastolic < 80)
    return "Good"
  else if(systolic >=120 && systolic <=129 && diastolic <= 80)
    return "Elevated"
  else if(systolic >=130 && systolic <=139 && diastolic >= 80 && diastolic <= 89)
    return "High Blood Pressure (Stage 1)"
  else if(systolic >=140 && systolic < 180 && diastolic > 90)
    return "High Blood Pressure (Stage 2)"
  else if(systolic >=180 && diastolic > 120)
    return "High Blood Pressure (Stage 3)"
  else
    return "Fail"
}


const condition = checkCondition(systolic, diastolic)



const StatCards = ({ classes }) => {
  return (
    <Grid container spacing={3} className="mb-3">
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>opacity</Icon>
            <div className="ml-3">
              <small className="text-muted">Recent Blood Pressure</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{recentBP}</h6>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>favorite</Icon>
            <div className="ml-3">
              <small className="text-muted">Heart Condition</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{condition}</h6>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>opacity</Icon>
            <div className="ml-3">
              <small className="text-muted">Average Blood Pressure</small>
              <h6 className="m-0 mt-1 text-primary font-medium">
                {avgBP}
              </h6>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <Icon className={classes.icon}>local_hospital</Icon>
            <div className="ml-3">
              <small className="text-muted">Risk Of Heart Disease</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{risk}</h6>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex items-center">
            <div className="ml-3">
              <small className="text-muted">Scoring</small>
            </div>
            <Icon className={classes.icon}>grade</Icon>
            <Icon className={classes.icon}>grade</Icon>
            <Icon className={classes.icon}>grade</Icon>
            <Icon className={classes.icon}>grade</Icon>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(StatCards);
