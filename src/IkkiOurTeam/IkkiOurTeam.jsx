import { UseFetchHook } from "../Hook/UseFetchHook"

export default function IkkiOurTeam() {

    const {api: OurTeam12} = UseFetchHook("/db.json")


    return (
        <div className="bekor w-[1300px] bekor:pt-[40px] body:pt-[270px]  m-auto pt-[40px] ">
            <p className="text-[34px] text-black w-full font-[500] mb-[40px] text-center dark:text-white">
                Jamoa bilan ulugvorlik sari
            </p>
            <div className=" bekor bekor:grid-cols-2 body:grid-cols-1 bekor:max-w-[1425px] body:max-w-[700px] m-auto grid grid-cols-2">
                {OurTeam12?.Team && OurTeam12?.Team.map((harf123, id)=>(
                <article key={id} className=" mb-[40px] cursor-pointer group overflow-hidden flex items-center gap-[40px] w-[650px] h-[250px] rounded-[20px]">
                    <img className="w-[470px] group-hover:translate-x-0 transition-all duration-500 translate-x-[200px] h-[250px] rounded-[20px]" src={harf123.image1} alt="" />
                    <p className="dark:text-white text-[18px] text-black w-[700px] group-hover:translate-x-0 translate-x-[420px] transition-all duration-500"> {harf123.title1} </p>
                </article>
                ))}
            </div>
        </div>
    )
}
