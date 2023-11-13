import React from "react";
import App from "../App";


const Clients  = ({clients},deleteClient)=>{
    // handleUpdateOperation = (e) => {
    //
    // }
    const list = clients.map(client =>{
        return(
            <tr>
                {/* <td>{client.id}</td> */}
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.licensePlate}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.email}</td>
                <form onClick={this.handleUpdateOperation}>
                    <button className="btn btn-danger">Update</button>
                </form>
                <form onClick={()=> {deleteClient(client.id)}}>
                    <button className="btn btn-danger">Delete</button>
                </form>
            </tr>

        )
    })
    return(
    <div>
        {list}
    </div>
    )
}

export default Clients;

