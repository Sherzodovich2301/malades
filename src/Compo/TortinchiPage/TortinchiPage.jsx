import { UseFetchHook } from "../../Hook/UseFetchHook"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper stilini import qilish
import "swiper/css/navigation"; // Navigatsiya tugmalari
import "swiper/css/pagination"; // Pagination (indikatorlar)
import {Autoplay } from "swiper/modules";


export default function TortinchiPage() {

  const { api: tortinchi } = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")

  if (!tortinchi || !tortinchi.TortinchiPage) {
    return <p>Loading...</p>;
  }



  return (
    <Swiper
      modules={[Autoplay ]}
      slidesPerView={5}
      autoplay={{ delay: 2500 }}
    >
      {tortinchi.TortinchiPage.map((item,id) => (
        <SwiperSlide key={id} className="mb-24 bekor ">
          <article className="h-[200px] sm:flex body:hidden flex justify-around m-auto pt-[50px]">
            <article className="dark:border-[1px] bg-black w-[200px] behruz:w-[200px] lg:w-[180px] body1:w-[180px] body:w-[120px] h-[150px] flex justify-center items-center hover:bg-cyan-700 group hover:translate-y-[-10px] rounded-[10px] cursor-pointer transition-all">
              <img src={item.image1} alt={`Slide ${item.id}`} />
            </article>
          </article>
        </SwiperSlide>  
      ))}
    </Swiper>


  )
}
