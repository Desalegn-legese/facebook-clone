import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState } from "react";
import "./MessageSender.css";
const MessageSender = () => {
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const handleSubmit = (e) => {
        e.preventDefault();
        setImageUrl('');
	};
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/64391745_2699036366790593_364101231133589504_o.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=Ae1M9SnA34oAX-gUMWk&_nc_ht=scontent-iad3-1.xx&tp=6&oh=372ee11ed1027e6f480bcf0383345551&oe=604E411D" />
				<form action="">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="messageSender__input"
						type="text"
						placeholder={`What' s on your mind?`}
					/>
					<input
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						type="text"
						placeholder="image URL (optional)"
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden Submit
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;
