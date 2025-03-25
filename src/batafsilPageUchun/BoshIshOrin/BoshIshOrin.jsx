import { UseFetchHook } from "../../Hook/UseFetchHook"




export default function BoshIshOrin() {


    const {api: BushIsh} = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")


  return (
    <div className="bekor mb-[300px]">
        <div className="w-[1300px] m-auto ">
            <h1 className="text-[40px] text-center text-gray-600 font-[500] mb-[30px]">
                Bo'sh ish o'rinlari
            </h1>
            <div className="grid grid-cols-3 gap-[70px]">
                {BushIsh?.batafsil && BushIsh?.batafsil.map((item, id)=>(
                <article key={id} className="cursor-pointer relative mb-[-100px] w-[400px] h-[400px]">
                <img className="absolute rounded-[10px] w-[400px] h-[300px]" src={item.img} alt="" />
                <h6 className="absolute top-[200px] flex items-center justify-center text-white left-[23px] text-center w-[350px] h-[80px] rounded-[10px] backdrop-blur-md">
                    {item.title1}
                </h6>
                </article>
                ))}
            </div>
        </div>
    </div>
  )
}
