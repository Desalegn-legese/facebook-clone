import React from 'react'
import './Widgets.css'
const Widgets = () => {
    return (
			<div className="widgets">
				<iframe
					src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaniel.girma.35%2Fposts%2F2404506112910288%3A0&width=500&show_text=true&height=534&appId"
					width="340"
					height="100%"
					style={{ border: "none", overflow: "hidden" }}
					scrolling="no"
					frameborder="0"
					allowTransparency="true"
					allow="encrypted-media"
					frameborder="0"
				></iframe>
			</div>
		);
}

export default Widgets
