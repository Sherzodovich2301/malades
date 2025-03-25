import { UseFetchHook } from "../../Hook/UseFetchHook"


export default function UchinchiPage() {

  const {api: Uchinchi} = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")

  console.log(Uchinchi);


  if(!Uchinchi){
    console.log("error");
    
  }
  
  
  return (

    <div className="bekor h-[800px] mb-[30px]  ">
        <div className="bekor behruz:w-full lg:w-[1000px] m-auto h-[600px] ">
        <h1 className="text-[54px] md:text-[54px] xl:text-start body:text-center body:text-[24px] mb-[50px] font-[700] text-blue-700">Bizning Ish Joyimiz</h1>
        {Uchinchi?.UchinchiPage && Uchinchi?.UchinchiPage.map((item, id)=>(
          <iframe key={id} src={item.frame} className="behruz:w-full lg:w-[1000px] sm:w-[500px] body:w-[400px] m-auto w-[100%] h-[600px] border-0"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ))}
        </div>
    </div>
  )
}
