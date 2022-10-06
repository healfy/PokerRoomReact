import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

import {connect} from "react-redux";
import {mapStateToProps} from "../../Store/auth/mappers";
import "./style.css"
import {TableColumns} from "../../Components/TableColumns";


function Tables({_, client}) {
    const [rows, setRows] = useState([
        {
            id:1,
            name: "werded",
            seats: 6,
            available: true,
        }
    ])

    // useEffect(()=> {
    //     const newSocket = new WebSocket(`ws://localhost:8001/ws/tables`);
    //     newSocket.onmessage = (ev) => {
    //         setRows(JSON.parse(ev.data))
    //     }
    //     return () => {
    //         newSocket.close()
    //     }
    // }, [])

    const onClick = async (event) => {
        event.preventDefault()
        await client.createTable()
    }

    return (
        <div className="container">
            <Table bordered hover size="sm" striped="columns">
                <thead>
                <tr>
                    <th>Table Name</th>
                    <th>Number of seats </th>
                    <th>Available</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((data, index) => (
                        <tr key={index}>
                            <TableColumns pk={data.id} client={client} seats={data.seats} available={data.available} name={data.name}/>
                        </tr>

                    ))
                }
                </tbody>
            </Table>
            <Button variant="primary" size="lg" active className="mt-lg-4" onClick={onClick}>
                Add Table
            </Button>
        </div>
    );
}

export default connect(mapStateToProps)(Tables)