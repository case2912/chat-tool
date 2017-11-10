import * as React from "react";
import * as ReactDOM from "react-dom";
import ChatBox from "./ChatBox";
export default class Rooms extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                {
                    Object.keys(this.props.value.rooms).map((key) => {
                        const item = this.props.value.rooms[key].messages;
                        const roomid = key;
                        const roomName = this.props.value.rooms[key].roomName;
                        return (
                            <div key={key}>
                                <p>{roomName}</p>
                                <ChatBox item={...item} {...this.props} roomid={roomid} />
                                <p>InviteRoom!</p>
                                <p>{roomName}:{roomid}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
