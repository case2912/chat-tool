import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import ChatBox from "./ChatBox";
const FlexBox = styled.div`
    display:flex;
    height:80%;
`;
const Box = styled.div`
    border: 1px solid #000000;
    padding: 3px;
    margin:3px;
    height:100%;
`;
export default class Rooms extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <FlexBox>
                {
                    Object.keys(this.props.value.rooms).map((key) => {
                        const item = this.props.value.rooms[key].messages;
                        const roomid = key;
                        const roomName = this.props.value.rooms[key].roomName;
                        return (
                            <Box key={key}>
                                <p>{roomName}</p>
                                <ChatBox item={...item} {...this.props} roomid={roomid} />
                                <p>InviteRoom!</p>
                                <p>{roomName}:{roomid}</p>
                            </Box>
                        );
                    })
                }
            </FlexBox>
        );
    }
}
