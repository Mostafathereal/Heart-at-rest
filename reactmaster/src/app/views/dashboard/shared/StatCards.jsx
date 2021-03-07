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

const recentBP = "120/80";
const avgBP = "130/90";
const risk = "Risky";
const heartCondition = "Good";

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
              <h6 className="m-0 mt-1 text-primary font-medium">{heartCondition}</h6>
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
            <Icon className={classes.icon}>localHospital</Icon>
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
            <Icon className={classes.icon}>showchart</Icon>
            <div className="ml-3">
              <small className="text-muted">Risk Of Heart Disease</small>
              <h6 className="m-0 mt-1 text-primary font-medium">{risk}</h6>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(StatCards);
