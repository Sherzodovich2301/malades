import { UseFetchHook } from "../../../Hook/UseFetchHook"



export default function About5() {

    const {api: kelajakH} = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")

  return (
    <div>
      <div className="container">
        <p className="dark:text-white text-[30px] text-black font-[500] mb-[40px] text-center">
            Biz kelajakda qaysi horijiy kompaniyalar bilan hamkorlik qilmoqchimiz?
        </p>
        <article className="container grid grid-cols-5 bekor:grid-cols-5 body:grid-cols-2 bekor:max-w-[1425px] lg:max-w-[800px]  bekor:gap-0 lg:gap-y-[50px] mb-[-100px]">
            {kelajakH?.kelajakHamkor && kelajakH?.kelajakHamkor.map((item, id)=>(
            <article key={id} className="w-[260px] h-[220px] rounded-[15px] bg-slate-700">
                <img className="w-[300px] cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 h-[220px] rounded-[15px]" src={item.img} alt="" />
            </article>
            ))}
        </article>
      </div>
    </div>
  )
}
