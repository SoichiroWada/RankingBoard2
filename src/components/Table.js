import React, {Component} from 'react';
import {actorsJSON} from '../data';
import UserRow from './UserRow';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: actorsJSON
		}
		this.compareByRankA = this.compareByRankA.bind(this);
		this.compareByRankD = this.compareByRankD.bind(this);
		this.compareByPointsA = this.compareByPointsA.bind(this);	
		this.compareByPointsD = this.compareByPointsD.bind(this);	
		this.compareByNameA = this.compareByNameA.bind(this);	
		this.compareByNameD = this.compareByNameD.bind(this);	
		this.compareByPaidA = this.compareByPaidA.bind(this);	
		this.compareByPaidD = this.compareByPaidD.bind(this);	
	}

	// componentWillReceiveProps() {
	// }
    // complete the comparators
	compareByRankA(a, b) {
		return a.rank - b.rank
	}
	compareByRankD(a, b) {
		return b.rank - a.rank
	}
	compareByPointsA(a, b) {
		return a.points - b.points;
	}
	compareByPointsD(a, b) {
		return b.points - a.points;
	}
	compareByNameA(a, b) {
		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
		// names must be equal
		return 0;
	}
	compareByNameD(a, b) {
		var nameA = b.name.toUpperCase(); // ignore upper and lowercase
		var nameB = a.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
		// names must be equal
		return 0;
	}
	compareByPaidA(a, b) {
		return a.paid - b.paid;
	}
	compareByPaidD(a, b) {
		return b.paid - a.paid;
	}

	render() {
    // console.log('XXX this.state.users:',this.state.users)
		// console.log('this.props:',this.props)
		const users = this.state.users;
		const sort = this.props.sort;
		const asc = this.props.asc;
		console.log('asc:',asc)
		console.log('sort:',sort)

		switch(sort) {
			case "rank":
				asc ? users.sort(this.compareByRankA) : users.sort(this.compareByRankD);
				break;
			case "points":
				asc ? users.sort(this.compareByPointsA):users.sort(this.compareByPointsD);
				break;
			case "name":
				asc ? users.sort(this.compareByNameA):users.sort(this.compareByNameD);
				break;
			case "paid":
				asc ? users.sort(this.compareByPaidA):users.sort(this.compareByPaidD);
				break;
			default:
				users.sort(this.compareByRankA);
				break;
		}

		const rows = users.map((user) => {
			return (
				<UserRow
				  rank = {user.rank}
				  points = {user.points}
				  name = {user.name}
				  paid = {user.paid}
				  key={user.name}
				></UserRow>
			)
		})

		return (
		<div className="row">
			<div className="col s12 m1 l2"></div>
			<div className="col s12 m10 l8">
			<table className="table striped">
				<thead>
					<tr key="head">
						<th>Rank</th>
						<th>Points</th>
						<th>Name</th>
						<th>Paid ($ Billion)</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			</div>
			<div className="col s12 m1 l2"></div>
		</div>)
	}
}

export default Table;