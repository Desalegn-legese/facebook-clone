import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
const Feed = () => {
    return (
			<div className="feed">
				<StoryReel />
				<MessageSender />
				<Post
					profilePic="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/64391745_2699036366790593_364101231133589504_o.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=Ae1M9SnA34oAX-gUMWk&_nc_ht=scontent-iad3-1.xx&tp=6&oh=372ee11ed1027e6f480bcf0383345551&oe=604E411D"
					message="wow it works"
					timestamp="this is the timestamp"
					username="Danny"
					image="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/p526x296/152032250_5677254485936622_4608016076662492761_o.jpg?_nc_cat=1&ccb=3&_nc_sid=8bfeb9&_nc_ohc=XTP7_kml0UAAX_sQ7HF&_nc_ht=scontent-iad3-1.xx&tp=6&oh=78e77e831812e5be733fd37b47adf209&oe=6054BF6D"
				/>
			</div>
		);
}

export default Feed
