import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";


class Dashboard1 extends Component {
  state = {
    active: "Monthly",
    optionData: {
      series: [
        {
          data: [134, 128, 128, 129, 125, 129, 130, 135, 134, 120, 124, 122],
          type: "line"
        },
        {
          data: [89, 80, 75, 77, 73, 65, 80, 83, 85, 83, 77, 70],
          type: "line"
        }
      ],
      xAxis: {
        data: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      }
    }
  };


tosetActive(type){
  this.setState({active: type})
  this.tosetData(type)
}

tosetData(type){
  if(type == "Monthly"){
    this.setState({ optionData: {
      series: [
        {
          data: [134, 128, 128, 129, 125, 129, 130, 135, 134, 120, 124, 122],
          type: "line"
        },
        {
          data: [89, 80, 75, 77, 73, 65, 80, 83, 85, 83, 77, 70],
          type: "line"
        }
      ],
      xAxis: {
        data: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      }
    }})
  }
  else if(type == "Daily"){
    this.setState({ optionData: {
      series: [
        {
          data: [154, 134, 128, 129, 125, 129, 130, 144, 124, 120, 124, 122],
          type: "line"
        },
        {
          data: [99, 94, 75, 76, 73, 65, 80, 93, 85, 73, 77, 70],
          type: "line"
        }
      ],
      xAxis: {
        data: ["Feb 23rd","Feb 24th","Feb 25th","Feb 26th","Feb 27th","Feb 28th","Mar 1st","Mar 2nd","Mar 3rd","Mar 4th","Mar 5th","Mar 6th"]
      }
    }})
  }


}

  render() {
    let { theme } = this.props;

    const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

    return (
      <Fragment>
        <div className="pb-24 pt-7 px-8 bg-primary">
          <div className="card-title capitalize text-white mb-4 text-white-secondary">
            Blood Pressure Graph
          </div>

          <div>
            {["Monthly", "Daily"].map((type) => (
              <Tab
                key={type}
                active={this.state.active === type}
                onClick={() => this.tosetActive(type)}
              >
                {type}
              </Tab>
            ))}
          </div>

          <ModifiedAreaChart id="variable"
            height="280px"
            option={this.state.optionData}
          ></ModifiedAreaChart>
        </div>

        <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />

              <h4 className="card-title text-muted mb-4">Recommendations</h4>
              <RowCards />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
