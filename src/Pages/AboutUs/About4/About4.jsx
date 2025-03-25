import { UseFetchHook } from "../../../Hook/UseFetchHook"




export default function About4() {

  const { api: Junior } = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")


  return (
    <div>
      <div className="container">
        <p className="text-[34px] text-black font-[500] mb-[40px] text-center">Bizning kichik jamoa</p>
        <div className="grid container bekor:max-w-[1425px] lg:max-w-[900px] bekor:translate-x-0 lg:translate-x-[20px] m-auto grid-cols-4 bekor:grid-cols-4 lg:grid-cols-2">
          {Junior?.BolajakJamoa && Junior?.BolajakJamoa.map((item, id) => (
            <article key={id} className="mb-[40px] w-[340px] cursor-pointer rounded-[20px] group h-[470px] text-center border-[2px] overflow-hidden">
              <img className="h-[310px] rounded-t-[20px] group-hover:scale-110 transition-all w-[340px] mb-[18px]" src={item.image2} alt="" />
              <p className="dark:text-white mb-[10px] text-black font-[500] text-[20px]">
                {item.title1}
              </p>
              <p className="dark:text-white text-black">
                {item.title2}
              </p>
            </article>
          ))}

        </div>
      </div>
    </div>
  )
}
