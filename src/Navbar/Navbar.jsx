import { Link, Outlet, useLocation } from "react-router-dom";
import infinity from "../Components/Img/Avt (1).png"
import { useEffect, useState } from "react";
import avt from "../../src/Components/Img/infinitOq.png"
import ScrollToTop from "../ScrolTop/ScrolTop";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light")
  )
  const location = useLocation();
  const isNotFoundPage =
    location.pathname.startsWith("/404") ||
    location.pathname.startsWith("/not-found");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleButn = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [open, setOpen] = useState(false)


  return (
    <div className="">
      {!isNotFoundPage && (
        <header className={`sticky top-0 left-0 w-full h-[100px] px-10 flex justify-around items-center z-30 transition-all  ${scrolled ? "backdrop-blur-md" : ""
          }`}>
          <ScrollToTop />
          <nav className="flex w-10/12 bekor justify-around py-5 items-center h-[100px] rounded-[20px] mt-5 backdrop-blur-md "
          >
            <Link to={"/"}><img src={infinity} className="sm:flex body:hidden w-[300px] behruz:w-[300px] sm:w-[270px] h-[300px] mt-[20px]" alt="" /></Link>
            <ul className="flex lg:flex body:hidden gap-10">
              <li className="text-[20px] dark:text-white text-black hover:text-blue-700"><Link to={"/aboutUs"}>About Us</Link></li>
              <li className="text-[20px] dark:text-white text-black hover:text-blue-700"><Link to={"/contactUs"}>Contact Us</Link></li>
              <li className="text-[20px] dark:text-white text-black hover:text-blue-700"><Link to={"/info"}>Info</Link></li>
            </ul>
            <article className="w-[280px] sm:w-[280px] h-[50px] flex body:w-full sm:justify-center body:justify-around gap-[20px]">
              <SignedOut>
                <SignInButton>
                  <button className=" shadow-xl w-[110px] h-[45px] bg-slate-400 text-white rounded-[8px] hover:bg-gray-700 transition-all text-[20px]">Log in</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <button className="behruz:flex justify-center items-center sm:hidden shadow-xl w-[130px] h-[45px] bg-slate-400 text-white rounded-[8px] hover:bg-gray-700 transition-all text-[20px]" onClick={handleButn}><p>Dark mode</p></button>
              <article className="lg:hidden">
                <svg onClick={() => { setOpen(!open) }} className=" w-[35px] cursor-pointer h-[40px] fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              </article>
            </article>
          </nav>
        </header>
      )}
      {open && (
        <div className="bekor  w-full h-[1080px] mt-[-100px] bg-black fixed z-40">
          <ul className={`lg:flex translate-x-[100px] gap-10 ${open ? "flex flex-col h-[100px] w-[200px] " : "hidden"}`}>
            <p onClick={() => setOpen(false)} className="right-[100px] text-white cursor-pointer">
              X
            </p>
            <li className="left-[100px] text-[20px] text-white hover:text-blue-700"><Link to={"/contactUs"} onClick={() => setOpen(false)}>Contact Us</Link></li>
            <li className="text-[20px] text-white hover:text-blue-700"><Link to={"/info"} onClick={() => setOpen(false)}>Info</Link></li>
            <li className="text-[20px] text-white hover:text-blue-700"><Link to={"/aboutUs"} onClick={() => setOpen(false)}>About Us</Link></li>
          </ul>
        </div>

      )}
      <main className="h-auto ">
        <Outlet />
      </main>


      {!isNotFoundPage && (
        <footer className="flex bekor w-full bg-slate-700 h-[470px] behruz:h-[470px] sm:h-[500px]">
          <div className="flex items-center justify-around w-full">
            <article className="mt-[-150px]">
              <img className="w-[350px] mb-[-150px] h-[400px]" src={avt} alt="" />
              <p className="mb-3 behruz:text-[24px] sm:text-[16px] translate-x-14 text-white text-[24px] font-[600]">
                Phone number: +998 88 006 23 01
              </p>
              <p className="behruz:text-[24px] sm:text-[16px] translate-x-14 text-white text-[24px] font-[600]">
                E-mail: boikobilovbexruz@gmail.com
              </p>
            </article>

            <article className="">
              <p className="behruz:text-[26px] sm:text-[20px] text-[26px] mb-[50px] text-white font-[700]">
                Bizning ijtimoiy tarmoqlar
              </p>
              <Link to={"https://www.instagram.com/_sherzodovich_2301/"}><p className="text-white text-[24px] font-[600] mb-[20px]">intagram</p></Link>
              <Link to={"https://t.me/+rs5Tt2q0DMkxMWFi"}><p className="text-white text-[24px] font-[600]">Telegram</p></Link>

            </article>

          </div>
        </footer>
      )}
    </div>
  )
}
