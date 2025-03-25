

import { UseFetchHook } from "../../Hook/UseFetchHook"



export default function YettinchiPage() {

      const {api: yettinchi} = UseFetchHook("https://sgjksnpjllcugasriejo.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODkyMjA4LCJleHAiOjE3NzQ0MjgyMDh9.R3Ut2knI1WeZfSsXh9xtCpceeG3nnOm6srkhwyob1SM")
    
    

    return (
        <div className="bekor mt-10 mb-16">
            <h4 className="text-[45px] text-blue-700 font-[700] text-center mb-24">Dunyoning Top 5 Banklari</h4>
            <div className="bekor m-auto grid grid-cols-3 behruz:m-auto body:m-auto md:max-w-[1300px] body:max-w-[320px] behruz:grid-cols-3 md:grid-cols-2 body:grid-cols-1 gap-8">
            {yettinchi?.YettinchiPage && yettinchi?.YettinchiPage.map((item, id)=>(
                <article key={id} className="w-[350px] behruz:w-[350px]  sm:w-[300px] h-[600px] shadow-slate-500 rounded-[10px] shadow items-center flex flex-col justify-center">
                    <img className="w-[320px] behruz:w-[320px] sm:w-[290px] h-[270px] rounded-[10px] mb-[20px]" src={item.image} alt="" />
                    <h5 className="dark:text-white text-black text-[17px] font-[700] mb-[10px] w-[250px] text-center">{item.title}</h5>
                    <p className="dark:text-white text-center w-[300px]">{item.Pititle}</p>
                </article>
            ))}
            </div>
        </div>
    )
}
