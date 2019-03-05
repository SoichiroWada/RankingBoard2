import React, { Component } from 'react';
import Paid from './components/Paid';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sortBy: "",
      ascending:null
    }
    this.handleClickPaid = this.handleClickPaid.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);
  }

  componentDidMount(){
    this.setState({
      sortBy: "rank",
      ascending:true
    });
  }

  handleClickRank(asc) {
    this.setState({
      sortBy: "rank",
      ascending:asc
    });
  }
  handleClickPoints(asc) {
    this.setState({
      sortBy: "points",
      ascending:asc
    });
  }
  handleClickName(asc) {
    this.setState({
      sortBy: "name",
      ascending:asc
    });
  }
  handleClickPaid(asc) {
    this.setState({
      sortBy: "paid",
      ascending:asc
    });
  }

  render() {
    console.log("AAA:",this.state.sortBy)
    return (
      <div className="center">
        <header className="center">
          <h1>Ranking Board</h1>
          <h6>Responsive web by React and Materialize CSS Grid</h6>
        </header>
        <div className="center buttons">
          <Rank ascending={this.state.ascending} onChange={this.handleClickRank}></Rank>
          <Points ascending={this.state.ascending} onChange={this.handleClickPoints}></Points>
          <Name ascending={this.state.ascending} onChange={this.handleClickName}></Name>
          <Paid ascending={this.state.ascending} onChange={this.handleClickPaid}></Paid>
          <Table sort={this.state.sortBy} asc={this.state.ascending}></Table>
        </div>
      </div>
    );
  }
}

export default App;