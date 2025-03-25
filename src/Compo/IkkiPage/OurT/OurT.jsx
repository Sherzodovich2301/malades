import { useParams } from "react-router-dom"
import { UseFetchHook } from "../../../Hook/UseFetchHook"
// import IkkiOurTeam from "../../../IkkiOurTeam/IkkiOurTeam"


export default function OurT() {


    const params = useParams()
    const paramsID = params.id


    const { api } = UseFetchHook("/db.json")
    console.log(api);
    

    const FindPage = api?.IkkinchiPage.find((item) => item.id === parseInt(paramsID))

    
    

    return (
        <div className="bekor w-[1300px] bekor:pt-[40px] body:pt-[270px] m-auto pt-[40px] ">
            <div className="mb-[-100px] bekor bekor:grid-cols-2 body:grid-cols-1 bekor:max-w-[1425px] body:max-w-[700px] m-auto grid grid-cols-2 gap-y-[100px]">
                {FindPage?.Team1 && FindPage?.Team1.map((harf123, id) => (
                    <article key={id} className=" mb-[40px] cursor-pointer group overflow-hidden flex items-center gap-[40px] w-[650px] h-[250px] rounded-[20px]">
                        <img className="w-[470px] group-hover:translate-x-0 transition-all duration-500 translate-x-[200px] h-[250px] rounded-[20px]" src={harf123.image1} alt="" />
                        <p className="dark:text-white text-[18px] text-black w-[700px] group-hover:translate-x-0 translate-x-[420px] transition-all duration-500"> {harf123.title1} </p>
                    </article>
                ))}
            </div>



            <div className="bekor pt-[150px] mb-[190px]">
                <div className="behruz:grid-cols-3 body2:grid-cols-2 behruz:max-w-[1425px] body2:max-w-[800px] body:max-w-[400px] body:grid-cols-1 bekor m-auto gap-y-[50px] grid grid-cols-3">
                    {FindPage?.Team2 && FindPage?.Team2.map((item, id) => (
                        <article key={id} className="cursor-pointer w-[350px] h-[550px] border-[2px] rounded-[20px] flex flex-col items-center">
                            <img className="rounded-t-[20px] mb-[10px] w-[350px] h-[300px]" src={item.image1} alt="" />
                            <p className="dark:text-white font-[500] text-[24px] mb-[18px] text-center">{item.title1}</p>
                            <p className="dark:text-white leading-[20px] w-[300px] text-center">{item.title2}</p>
                        </article>
                    ))}
                </div>
            </div>


            <div>
                {FindPage?.Team3 && FindPage.Team3.map((item56, id54)=>(
                    <article key={id54} className="mt-[-350px] w-full h-[90vh] flex justify-center items-center ">
                        <p className="text-[60px] font-[800] text-blue-500">
                            {item56.title1}
                        </p>
                    </article>
                ))}
            </div>

        </div>


    )
}
