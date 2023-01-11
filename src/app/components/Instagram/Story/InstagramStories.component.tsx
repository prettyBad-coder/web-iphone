import { Swiper, SwiperSlide } from "swiper/react";
import stories from "app/data/intagram-stories.json";
import InstagramStory from "app/components/Instagram/Story/InstagramStory.component";
import { InstagramStoryType } from "app/types/instagram.types";

const InstagramStories = () =>
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

export default InstagramStories;