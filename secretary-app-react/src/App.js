import React from "react";
import Login from "./Login";
import "./App.css";
import LoginComponents from "./LoginComponents";
import ButtonPage from "./ButtonPage";
import RegisterClient from "./RegisterClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { register } from "./serviceWorker";
//import UpdateClient from "./UpdateClient";
import DeleteClient from "./DeleteClient";
import ClientInfo from "./ClientInfo";
import Clients from "./components/Clients"

//const React = require('react');
 const ReactDOM = require('react-dom');
// const client = require('./client');


class App extends React.Component {

  constructor(props) {
    super(props);
		this.state = {clients: []};
  }

  componentDidMount() {
		fetch("http://localhost:8080/clients/all").then(response => {
      response.json().then( clients => this.setState({clients: clients}))
		});

	}
	deleteClient = (id) => {
		let client = this.state.clients.filter(client =>{
			return client.id !==id
		});
		this.setState({
			clients: clients
		})
	}

	render() {
		return (
			// <ClientList clients={this.state.clients}/>
			<Clients deleteClient={this.deleteClient} clients = {this.state.clients}/>
		)
  }


     // <Router>
     //   <div className="App">
     //     <header className="App-header">
     //       <Route path="/loginPage" component={LoginComponents} />
     //       <Route path="/btnPage" component={ButtonPage} />
     //       <Route path="/clientInfo" component={ClientInfo} />
     //       <Route path="/registerClient" component={RegisterClient} />
     //       <Route path="/updateClient" component={UpdateClient} />
     //       <Route path="/deleteClient" component={DeleteClient} />
     //     </header>
     //   </div>
     // </Router>
}

class ClientList extends React.Component{
	// render() {
	// 	const clients = this.props.clients.map(client =>
	// 		<Client key={client.id} client={client}/>
	// 	);
	// 	return (
	// 		<table>
	// 			<tbody>
	// 				<tr>
	// 					<th>First Name</th>
	// 					<th>Last Name</th>
	// 					<th>License Plate</th>
    //         			<th>Phone Number</th>
	// 					<th>Email</th>
	// 				</tr>
	// 				{clients}
	// 			</tbody>
	// 		</table>
	// 	)
	//}
}

// const list =
//
// 	class Client extends React.Component{
// 	render() {
//
// 		/*return (
//
//
// 			this.props.client.forEach(
// 				client => [<tr>
// 					<td>{this.props.client.firstName}</td>
// 					<td>{this.props.client.lastName}</td>
// 					<td>{this.props.client.licensePlate}</td>
// 					<td>{this.props.client.phoneNumber}</td>
// 					<td>{this.props.client.email}</td>
// 				</tr>]
// 			)*/
//
// 		//)
//   }
//
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('react')
// )

export default App;


