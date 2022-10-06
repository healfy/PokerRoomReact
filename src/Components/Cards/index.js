import "./styles/style.css"
import "./styles/ranks.css"

export const Card =  ({card}) => {

    return (
        <div className={`poker-card ${card} clubs`}></div>
    )
}

export const HiddenCard = ({card, hide=false}) => {
    return (
        <>
            <div className={`poker-card hidden-card ${card} design`} hidden={hide}></div>
        </>

    )
}