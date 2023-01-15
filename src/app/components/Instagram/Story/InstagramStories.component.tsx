import { Swiper, SwiperSlide } from "swiper/react";
import stories from "app/data/intagram-stories.json";
import InstagramStory from "app/components/Instagram/Story/InstagramStory.component";
import { InstagramStoryType } from "app/types/instagram.types";

const InstagramStories = () => {

	const firstInstagramStory = stories.sort((a, b ) => a.id - b.id)[ 0 ] as unknown as InstagramStoryType;

	return (
		<div>
			<Swiper
				className="instagram__stories-slider"
				spaceBetween={ 50 }
				slidesPerView={ 5 }
			>
				<SwiperSlide>
					<InstagramStory story={ firstInstagramStory }/>
				</SwiperSlide>
				{
					stories.sort((a, b) => {
						const isActiveA = a.images.length !== 0;
						const isActiveB = b.images.length !== 0;
						return Number(isActiveB) - Number(isActiveA);
					}).map(story =>
						story.id !== 1
							&&
							<SwiperSlide key={ story.id }>
								<InstagramStory story={ story as unknown as InstagramStoryType }/>
							</SwiperSlide>
					)
				}
			</Swiper>
		</div>
	)
}

export default InstagramStories;