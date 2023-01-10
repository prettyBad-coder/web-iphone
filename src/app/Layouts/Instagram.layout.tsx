import InstagramStory from "app/components/Instagram/InstagramStory.component";
import InstagramHeader from "app/components/Instagram/InstagramHeader.component";
import InstagramFooter from "app/components/Instagram/InstagramFooter.component";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { Outlet } from "react-router-dom";
import stories from "app/data/intagram-stories.json";
import { InstagramStoryType } from "app/types";

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
					{
						stories.map(story =>
							<SwiperSlide>
								<InstagramStory story={ story as unknown as InstagramStoryType }/>
							</SwiperSlide>
						)
					}
				</Swiper>
			</div>
		</div>
		<div className="instagram__page-wrapper">
			<Outlet/>
		</div>
		<InstagramFooter/>
	</div>

export default Instagram;