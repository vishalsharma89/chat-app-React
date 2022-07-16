import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModel from './CreateRoomBtnModel';
import DashboardToggle from './dashboard/DashboardToggle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
    const topSidebarRef = useRef();
    const [height, setHeight] = useState(0);

    // set height of top side bar
    useEffect(() => {
        if (topSidebarRef.current) {
            setHeight(topSidebarRef.current.scrollHeight);
        }
    }, [topSidebarRef]);
    return (
        <div className="h-100 pt-2">
            <div ref={topSidebarRef}>
                <DashboardToggle />
                <CreateRoomBtnModel />
                <Divider style={{ margin: 0, padding: '30px 0' }}>
                    Join conversation
                </Divider>            </div>
            <ChatRoomList aboveElHeight={height} />
        </div>
    );
};

export default Sidebar;