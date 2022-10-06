import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {TablePreview} from "../TablePreview";
import {GameWindow} from "../GameWindow";
import {ActionsForm} from "../GameActionForm";


export function TableInfoModal({show, onHide, table_id, client}) {
    const [tableData, setTableData] = useState({})
    const [disabled, setDisabled] = useState(true)
    const [showGame, setShowGame] = useState(false)

    useEffect(() => {
        client.getTable(table_id).then(function (result) {
            setTableData(result)
            setDisabled(!result.available)
        })
    }, [])

    const msg = tableData.user_here? "Play" : "Take a seat"

    const onClick = async () => {
        if (tableData.user_here) {
        } else {
            await client.reserveSeat(table_id)
        }
        setShowGame(true)

    }
    return (
        <Modal show={show} onHide={onHide} size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Table {tableData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TablePreview tableData={tableData}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onClick}>
                    {msg}
                </Button>
                <Modal
                    fullscreen={true}
                    show={showGame}
                    onHide={()=> {setShowGame(false)}}
                >
                    <Modal.Body>
                        <GameWindow/>
                    </Modal.Body>
                    <div className="container m-2">
                        <ActionsForm handler={()=> {setShowGame(false)}}/>
                    </div>
                </Modal>
            </Modal.Footer>
        </Modal>
    );
}
