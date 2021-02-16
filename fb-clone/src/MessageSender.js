import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css";
const MessageSender = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/64391745_2699036366790593_364101231133589504_o.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=Ae1M9SnA34oAX-gUMWk&_nc_ht=scontent-iad3-1.xx&tp=6&oh=372ee11ed1027e6f480bcf0383345551&oe=604E411D" />
				<form action="">
					<input type="text" placeholder={`What' s on your mind, Danny?`}/>
                    <input type="text" placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
				</form>
			</div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <h3>Live Video</h3>
                </div>
            </div>
		</div>
	);
};

export default MessageSender;
