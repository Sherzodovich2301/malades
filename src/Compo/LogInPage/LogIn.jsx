import { useState } from "react";

export default function LogIn() {
  const [log, setLog] = useState({
    UserName: "",
    Email: ""
  });

  const botToken = "7779491077:AAEDmKKRRwbUla1F48GQmRDMarEtQYRTBnk";
  const chatID = 6931558488;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatID,
          text: `👤 Ism: ${log.UserName}\n📧 Email: ${log.Email}`
        }),
      });

      if (response.ok) {
        alert("So'rovnoma yuborildi");
        setLog({ UserName: "", Email: "" });
      } else {
        console.error(`Xatolik yuz berdi: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Xatolik yuz berdi: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mt-[50px] h-[700px] flex justify-center items-center bg-Orqaimg2 bg-fixed bg-no-repeat bg-cover">
      <div className="w-[600px] flex items-center justify-center h-[500px] backdrop-blur-md">
        <form onSubmit={handleOnSubmit} className="w-[450px] h-[450px] flex flex-col items-center mt-[25px]">
          <p className="text-2xl text-white mb-[20px]">Questions</p>
          <article className="mb-[25px] flex flex-col items-center">
            <article>
              <p className="text-white">Username</p>
              <label>
                <input onChange={handleChange} value={log.UserName} name="UserName"
                  className="outline-none w-[300px] pl-[10px] h-[50px] mb-5 bg-slate-400 text-white"
                  type="text" placeholder="username" />
              </label>
            </article>
            <article>
              <p className="text-white">Questions</p>
              <label className="">
                <input onChange={handleChange} value={log.Email} name="Email"
                  className="outline-none w-[300px] pl-[10px] h-[200px] bg-slate-400 text-white"
                  type="text" placeholder="email" />
              </label>
            </article>
          </article>
          <button className="shadow-xl w-[300px] h-[45px] bg-slate-400 text-white rounded-[8px] hover:bg-gray-700 transition-all text-[20px]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
