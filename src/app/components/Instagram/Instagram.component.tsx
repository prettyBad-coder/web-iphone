import InstagramStory from "app/components/Instagram/InstagramStory.component";
import InstagramPost from "app/components/Instagram/InstagramPost.component";
import InstagramHeader from "app/components/Instagram/InstagramHeader.component";
import InstagramFooter from "app/components/Instagram/InstagramFooter.component";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { Outlet } from "react-router-dom";

const Instagram = () =>
	<div className="instagram">
		<div>
			<InstagramHeader/>
			<div>
				<Swiper
					className="instagram__stories-slider"
					spaceBetween={ 50 }
					slidesPerView={ 5 }
				>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
							isActive={ false }
							plusIcon
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<InstagramStory
							backgroundImageURL="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
							name="DJ masa"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<Outlet/>
		<InstagramFooter/>
	</div>

export default Instagram;