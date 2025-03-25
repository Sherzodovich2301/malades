
import { Link } from "react-router-dom"

export default function AsosiyPage() {


  return (
    <div className="bekor m-auto">
      <main className="h-[900px] mt-[-100px] bg-center bg-bannerImg bg-repeat bg-cover">
        <div className="flex justify-start max-w-[1090px] m-auto">
          <article className="mt-[300px] w-full text-center">
            <h1 className="text-[56px] md:text-[56px] sm:text-[40px] sm:mb-[30px] body:mb-[100px] body:text-[30px] md:text-start body:text-center font-[700] text-white leading-none mb-8">
              Pullaringizni biz bilan <br /> xavfsiz va oson saqlang
            </h1>
            <p className="text-[16.5px] text-white md:w-full body:w-[500px] m-auto sm:flex body:hidden md:text-start body:text-center mb-[100px]">
              &quot;Infinit bank&quot; ga xush kelibsiz! Biz bu online bankimiz bilan insonlar va bankimiz <br /> foydalanuvchilariga qulay, sifatli hamda pullaringizni xavfsiz saqlash mumkin bo&apos;lgan online <br /> bankni taqdim etamiz
            </p>
            <article className="flex justify-start w-full">
              <Link to={"/batafsil"}><button className="shadow-xl w-[130px] h-[45px] bg-slate-400 text-white rounded-[8px] hover:bg-gray-700 transition-all text-[20px]">Batafsil</button></Link>
            </article>
          </article>
        </div>
      </main>
    </div>
  )
}
