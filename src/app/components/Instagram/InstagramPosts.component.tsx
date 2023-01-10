import InstagramPost from "app/components/Instagram/InstagramPost.component";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import posts from "app/data/instagram-posts.json";

const InstagramPosts = () =>
	<div>
		<Swiper
			spaceBetween={ 10 }
			className="instagram__posts-slider"
			slidesPerView={ 1 }
			direction="vertical"
		>
			{
				posts.map(post =>
					<SwiperSlide key={ post.id } className="instagram-post__post-slide">
						<InstagramPost
							name={ post.userName }
							imageURL={ post.imageURL }
							likesCount={ post.likesCount }
							profileImageURL={ post.profileImageURL }
							localization={ post.localization }
							title={ post.title }
							comments={ post.comments }
						/>
					</SwiperSlide>)
			}
		</Swiper>
	</div>

export default InstagramPosts;