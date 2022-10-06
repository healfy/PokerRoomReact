export const PreviewTableSeat = ({seat, number}) => {
    const msg = seat.user ? seat.user.email : seat.status
    return (
        <div className={seat.user? `seat s${number} not_free`: `seat s${number}`}>
            <p className="msg">{msg}</p>
        </div>
    )
}