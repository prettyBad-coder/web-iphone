import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// import 'swiper/swiper.scss';
// import "swiper/modules/pagination/pagination.scss";
// import "swiper/components/pagination/pagination.min.css";
import "swiper/scss";
import 'swiper/scss/pagination';
import HomeScreenApplication from "app/components/HomeScreen/HomeScreenApplication.component";
import apps from "app/data/apps.json";

const HomeScreen = () => {

	return (
		<Swiper
			className="home-screen"
			modules={ [ Pagination ] }
			spaceBetween={50}
			slidesPerView={1}
			pagination={{
				bulletActiveClass: "home-screen__pagination-dot--active",
				renderBullet: () => `<div class="home-screen__pagination-dot swiper-pagination-bullet"></div>`
			}}
		>
			<SwiperSlide>
				<div className="home-screen__applications-wrapper">
					{
						apps.map(app => <HomeScreenApplication key={ app.id } app={ app }/>)
					}
				</div>
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