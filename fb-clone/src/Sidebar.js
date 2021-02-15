import { useRadioGroup } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
const Sidebar = () => {
    return (
			<div className="sidebar">
				<SidebarRow
					src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/64391745_2699036366790593_364101231133589504_o.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=Ae1M9SnA34oAX-gUMWk&_nc_ht=scontent-iad3-1.xx&tp=6&oh=372ee11ed1027e6f480bcf0383345551&oe=604E411D"
					title="Danny"
				/>
				<SidebarRow
					Icon={LocalHospitalIcon}
					title="COVID-19 Information Center"
				/>
				<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
				<SidebarRow Icon={PeopleIcon} title="Friends" />
				<SidebarRow Icon={ChatIcon} title="Messenger" />
				<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
				<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
				<SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
			</div>
		);
}

export default Sidebar
