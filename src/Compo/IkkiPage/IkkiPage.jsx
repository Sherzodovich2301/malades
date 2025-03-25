
import { Link,  } from "react-router-dom"
import { UseFetchHook } from "../../Hook/UseFetchHook"






export default function IkkiPage() {


  const { api: Ikkinchi } = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")




  return (
    <div className="bekor mb-[120px]">
      <h1 className="text-center mt-[60px] md:text-[25px] body:text-[14px] text-[25px] font-[500]">
        Bizning online bankimizdan <br /> foydalanishdan oldin asosiy sahifalar bilan tanishib <br /> chiqishingizni maslahat beramiz
      </h1>
      <div className="bekor grid behruz:max-w-[1425px] body:max-w-[400px] m-auto grid-cols-1 behruz:grid-cols-3 body:grid-cols-1">
        {Ikkinchi?.IkkinchiPage && Ikkinchi?.IkkinchiPage.map((item, id) => (
          <article key={id} className=" m-auto mt-[90px] flex">
            <article className="w-[350px] behruz:w-[350px] sm:w-[450px] body:w-[350px] h-[500px] bg-slate-400 rounded-[40px] relative left-0 top-0 group group z-0 backdrop-blur-md" >
              <img className="group behruz:w-[350px] body:w-[500px] hover:grayscale-0 grayscale transition-all w-[350px] h-[500px] bg-slate-400 rounded-[40px] absolute" src={item.image} alt="" />
              <Link to={`/home/${item.id}`} className="flex flex-col text-center cursor-pointer transition-all behruz:left-[20px] behruz:w-[310px] sm:w-[380px] body:w-[300px] lg:left-[35px] w-[310px] h-[150px]  rounded-[20px] absolute bottom-[18px] left-[20px] backdrop-blur-md">
                <h3 className="text-[26px] font-[500] text-white mt-2 behruz:mt-2 lg:mt-5 ">
                  {item.title}
                </h3>
                <p className="mt-[10px] text-white">
                  {item.title2}
                </p>
              </Link>
            </article>
          </article>
        ))}
      </div>
    </div>
  )
}
