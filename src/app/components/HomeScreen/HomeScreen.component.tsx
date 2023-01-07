import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// import 'swiper/swiper.scss';
// import "swiper/modules/pagination/pagination.scss";
// import "swiper/components/pagination/pagination.min.css";
import "swiper/scss";
import 'swiper/scss/pagination';
const HomeScreen = () => {

	return (
		<Swiper
			className="home-screen"
			modules={ [ Pagination ] }
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			pagination={{ clickable: true }}
		>
			<SwiperSlide>
				slide 1
			</SwiperSlide>
			<SwiperSlide>
				slide 2
			</SwiperSlide>
			<SwiperSlide>
				slide 3
			</SwiperSlide>
			<SwiperSlide>
				slide 4
			</SwiperSlide>
		</Swiper>
	)
}

export default HomeScreen