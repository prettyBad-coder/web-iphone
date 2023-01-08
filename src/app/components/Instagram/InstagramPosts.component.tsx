import InstagramPost from "app/components/Instagram/InstagramPost.component";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";

const InstagramPosts = () => {
	return (
		<div className="instagram__posts-wrapper">
			<Swiper
				spaceBetween={ 10 }
				slidesPerView={ 1 }
				direction="vertical"
				// freeMode
			>
				<SwiperSlide className="instagram-post__post-slide">
					<InstagramPost
						name="Jakiś podróżnik"
						imageURL="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"
						likesCount="152"
						profileImageURL="https://www.zawodowypodroznik.pl/wp-content/uploads/2019/10/karol-lewandowski-kurs-zawodowy-podroznik-1.jpg"
						localization="Fajne miejsce gdzieś"
						title="Lubie podróże małe i duże"
						comments={ [
							{ id: 1, userName: "user", content: "Ładny widok wariacie" },
							{ id: 2, userName: "Miłośnk kotków", content: "Musze tam zabrać swoje kocury!" },
							{ id: 3, userName: "Siema eniu", content: "Witaj eniu!" },
							{ id: 4, userName: "Syndiabla69pl", content: "Silik dobry robie" },
						] }
					/>
				</SwiperSlide>
				<SwiperSlide className="instagram-post__post-slide">
					<InstagramPost
						name="Dj mati"
						imageURL="https://seciki.pl/uploads/posts/2016-02/1455534411_mati.jpg"
						likesCount="150"
						profileImageURL="https://yt3.ggpht.com/xrVHaWpUfpiKamdz80xbM78MU0CeTSVPIj1_bSULpW0be9wep_4_QPcRVzYsMyypciwkUWHfnQ=s900-c-k-c0x00ffffff-no-rj"
						localization="Prozak"
						title="Muze robie"
						comments={ [
							{ id: 1, userName: "Alan", content: "Rozbiłem clio rs" },
							{ id: 2, userName: "Paaffcio2000", content: "Nieźle jeździsz po winelu +1" },
						] }
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default InstagramPosts;