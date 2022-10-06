import Container from 'react-bootstrap/Container';
import "./style.css"

import React from "react";
import {PreviewTableSeat} from "./Seat";

export const TablePreview = ({tableData}) => {
    return (
        <div className="container ">
            <div className="table_preview">
                    {
                        tableData.seats.map((seat, index) => (
                            <div key={index}>
                                <PreviewTableSeat seat={seat} number={index+1}/>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}