import { UseFetchHook } from "../../Hook/UseFetchHook"
import Info1 from "./Info1/Info1"


export default function Info() {


  const {api: InfoPage} = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")


  return (
    <div>
      <Info1/>
      <div className="bekor pt-[150px] mb-[190px]">
        <p className="text-[26px] mb-[40px] text-black font-[500] text-center dark:text-white">O&apos;zbekistonning milliy banklari va ular haqida malumotlar</p>
        <div className="behruz:grid-cols-3 container body2:grid-cols-2 behruz:max-w-[1300px] body2:max-w-[800px] body:max-w-[400px] body:grid-cols-1 bekor m-auto gap-y-[50px] grid grid-cols-3">
          {InfoPage?.Info && InfoPage?.Info.map((item, id)=>(
          <article key={id} className="cursor-pointer w-[350px] h-[550px] border-[2px] rounded-[20px] flex flex-col items-center">
            <img className="rounded-t-[20px] mb-[10px] w-[350px] h-[300px]" src={item.image1} alt="" />
            <p className="dark:text-white font-[500] text-[24px] mb-[18px] text-center">{item.title1}</p>
            <p className="dark:text-white leading-[20px] w-[300px] text-center">{item.title2}</p>
          </article>
          ))}
        </div>
      </div>
    </div>
  )
}
