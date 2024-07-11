import Logo from "../../components/ui/Logo.jsx";
import { useContext, useState } from "react";
import "./toolPage.css";
import { AuthContext } from "../../App.jsx";

export function ToolPage() {
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);
  

const logout = () => {
    try {
        window.localStorage.removeItem("token");
        setIsAuthenticated(false)
    } catch (error) {
      console.error(error)
    }
  
  }

  return (
    <>
      <div className="flex justify-center items-center h-[40svh] max-h-[40svh] mb-5 mt-5">
        <Logo className="w-full h-full object-contain" />
      </div>
      <div className="settings-container max-w-full mx-auto text-white">
        <h2 className="settings-title text-center mb-5 mt-4">Réglages</h2>
        <div className="setting-item max-w-screen-sm flex justify-between items-center mb-4 p-2.5 bg-[#2a2a2a] rounded-[5px]">
          <h3 className="mb-2">Mode gaucher</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-10 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-8 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
          </label>
        </div>
        <div className="setting-item max-w-screen-sm flex justify-between items-center mb-4 p-2.5 bg-[#2a2a2a] rounded-[10px]">
          <h3 className="mb-2">Thème</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-10 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-8 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
          </label>
        </div>
        <div className="setting-item max-w-screen-sm flex justify-between items-center mb-4 p-2.5 bg-[#2a2a2a] rounded-[5px]">
          <h3 className="mb-2">Son des effets</h3>
          <div className="volume-control flex items-center">
            <label className="container-sound relative flex justify-center items-center cursor-pointer text-[30px] mr-8">
              <input
                type="checkbox"
                checked={!isSoundMuted}
                onChange={() => setIsSoundMuted(!isSoundMuted)}
                className="absolute opacity-0 h-0 w-0 cursor-pointer"
              />
              <svg
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`play-sound absolute ${
                  isSoundMuted ? "hidden" : "block"
                }`}
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
              </svg>
              <svg
                viewBox="0 0 320 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`pause-sound absolute ${
                  isSoundMuted ? "block" : "hidden"
                }`}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
              </svg>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="35"
              className="volume-slider w-24"
            />
          </div>
        </div>
        <div className="setting-item max-w-screen-sm flex justify-between items-center mb-4 p-2.5 bg-[#2a2a2a] rounded-[5px]">
          <h3 className="mb-2">Musique</h3>
          <div className="volume-control flex items-center">
            <label className="container-music relative flex justify-center items-center cursor-pointer text-[30px] mr-8">
              <input
                type="checkbox"
                checked={!isMusicMuted}
                onChange={() => setIsMusicMuted(!isMusicMuted)}
                className="absolute opacity-0 h-0 w-0 cursor-pointer"
              />
              <svg
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`play-music absolute ${
                  isMusicMuted ? "hidden" : "block"
                }`}
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
              </svg>
              <svg
                viewBox="0 0 320 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`pause-music absolute ${
                  isMusicMuted ? "block" : "hidden"
                }`}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
              </svg>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="37"
              className="volume-slider w-24"
            />
          </div>
        </div>
        <div className="setting-item max-w-screen-sm flex justify-between items-center mb-4 p-2.5 bg-[#2a2a2a] rounded-[5px]">
          <h3 className="mb-2">Déconnexion</h3>
          <button onClick={logout} className="logout-button bg-red-600 border-none text-white py-1 px-2 text-center text-lg cursor-pointer rounded-[3px]">
            →
          </button>
        </div>
      </div>
    </>
  );
}

export default ToolPage;