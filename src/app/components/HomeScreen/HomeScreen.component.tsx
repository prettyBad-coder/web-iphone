import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// import 'swiper/swiper.scss';
// import "swiper/modules/pagination/pagination.scss";
// import "swiper/components/pagination/pagination.min.css";
import "swiper/scss";
import 'swiper/scss/pagination';
import HomeScreenApplication from "app/components/HomeScreen/HomeScreenApplication.component";
const HomeScreen = () => {

	return (
		<Swiper
			className="home-screen"
			modules={ [ Pagination ] }
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			pagination={{
				bulletActiveClass: "home-screen__pagination-dot--active",
				renderBullet: () => `<div class="home-screen__pagination-dot swiper-pagination-bullet"></div>`
			}}
		>
			<SwiperSlide>
				<div className="home-screen__applications-wrapper">
					<HomeScreenApplication
						name="Instagram"
						urlTo="/instagram"
						backgroundImageURL="https://seeklogo.com/images/I/instagram-logo-3EDAAFAF47-seeklogo.com.png"
					/>
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