import "./style.css"
import {Card, HiddenCard} from "../Cards";
import {PlayerWindow} from "../PlayerWindow";



export const GameWindow = () => {
    const style = {
        animation: "glowing 1400ms infinite"
    };
    return (
        <div>
            <div className="tableGame">
                <div className="cardPlace">
                    <Card card={"ace"}/>
                    <Card card={"king"}/>
                    <Card card={"queen"}/>
                    <Card card={"jack"}/>
                    <Card card={"ten"}/>
                </div>
                <div className="players player avatar player-1">
                    <div className="info">
                        <HiddenCard card={"v1"}/>
                        <HiddenCard card={"v2"}/>
                        <div className="bank-value">123</div>
                    </div>
                </div>

                <div className="players player avatar player-2" style={style}>
                        <div className="info">
                            <HiddenCard card={"v1"}/>
                            <HiddenCard card={"v2"}/>
                            <div className="name">werded@gmaail.com</div>
                            <div className="bank-value">2</div>
                        </div>
                </div>

                <div className="players player avatar player-3">
                    <div className="info">
                        <HiddenCard card={"v1"}/>
                        <HiddenCard card={"v2"}/>
                        <div className="bank-value">123</div>
                    </div>
                </div>
                <div className="players player avatar player-4">
                    <div className="info">
                        <HiddenCard card={"v1"}/>
                        <HiddenCard card={"v2"}/>
                        <div className="bank-value">123</div>
                    </div>
                </div>
                <div className="players player avatar player-5">
                    <div className="info">
                        <HiddenCard card={"v1"}/>
                        <HiddenCard card={"v2"}/>
                        <div className="bank-value">123</div>
                    </div>
                </div>
            </div>
            <PlayerWindow/>
        </div>

    )
}