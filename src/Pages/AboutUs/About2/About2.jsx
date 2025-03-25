
import { UseFetchHook } from "../../../Hook/UseFetchHook"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper stilini import qilish
import "swiper/css/navigation"; // Navigatsiya tugmalari
import "swiper/css/pagination"; // Pagination (indikatorlar)
import { Autoplay } from "swiper/modules";


export default function About2() {

    const { api: about2} = UseFetchHook("/db.json")



    if (!about2 || !about2.aboutPage2) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mb-[250px]">
            <p className="text-center text-[32px] font-[500]">
                Biz ishlab chiqargan kartalar
            </p>
            <Swiper
                modules={[Autoplay]} // Modul qo'shish// Slaydlar orasidagi masofa
                slidesPerView={5} // Nechta slayd ko‘rinadi
                autoplay={{ delay: 2500 }}
            >
                {about2.aboutPage2.map((item, id) => (
                    <div key={id} className="container mb-[-100px]">
                        <SwiperSlide className="mb-24 container">
                            <article className=" flex justify-around m-auto pt-[50px]">
                                <article className="w-[270px] h-[170px] flex justify-center items-center rounded-[10px] cursor-pointer transition-all">
                                    <img src={item.image1} alt={`Slide ${item.id}`} />
                                </article>
                            </article>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    )
}
