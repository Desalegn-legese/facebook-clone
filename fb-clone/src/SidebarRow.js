import React from "react";
import "./SidebarRow.css";
import { Avatar, IconButton } from "@material-ui/core";
const SidebarRow = ({ title }) => {
	return (
		<div>
			<IconButton>
				{/* <NotificationsActiveIcon /> */}
			</IconButton>
            <h4>{title}</h4>
            <p>row</p>
		</div>
	);
};

export default SidebarRow;
