import { UseFetchHook } from "../../Hook/UseFetchHook"


export default function BeshinchiPage() {
    const {api: beshinchi} = UseFetchHook("/db.json")

    return (
        <div className="">
        {beshinchi?.BeshinchiPage && beshinchi?.BeshinchiPage.map((item, id)=>(
        <div key={id} className="bekor sm:mt-[0px] body:mt-[-200px] w-full h-[550px] m-auto flex justify-around items-center">
            <article className="mt-11 behruz:flex behruz:flex-col sm:items-center">
                <h1 className="w-[500px]  behruz:text-[54px] sm:text-[43px] body:text-[34px] text-center text-blue-700 text-[54px] mb-[50px] font-[700] leading-[70px]">
                    {item.title}
                </h1>
                <p className="w-[500px] sm:max-w-[500px] body:max-w-[400px] m-auto sm:text-[16.5px] body:text-[13px] dark:text-white text-center text-[16.5px] text-black mb-[100px]">
                    {item.Ptitle}
                </p>
            </article>
            <img className="behruz:w-[400px] lg:flex body:hidden flex sm:w-[350px] behruz:h-[300px] sm:h-[250px] w-[400px] h-[300px] rounded-xl" src={item.image} alt="" />
        </div>
        ))}
        </div>
    )
}
