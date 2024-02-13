import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Emoji from 'a11y-react-emoji'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState("https://media.tenor.com/cofRHcGGOfoAAAAi/shy-cute.gif")

  const EmojiContainer = "absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-1 rounded-lg border border-gray-300 bg-white py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 w-10 h-10"
  const Button = "cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md m-8"
  return (
    <>
      <div>
      <h1 className="text-2xl font-bold">Will you be my valentine?</h1>
      </div>
      <div className="flex justify-center m-8">
        <img src={selected} />
      </div>
      <div className="flex justify-center">
        <div className="group relative"> 
        <button className={Button}

            onClick={() => setSelected("https://media.tenor.com/E4od4SG3hjMAAAAi/bunny-bunnies.gif")}
          >Yes</button>
          <div className={EmojiContainer}>
          <img 
              className="w-8 h-8"
              src={`https://img.icons8.com/?size=256&id=LMCMiB8DoRmH&format=png`}
          />
          </div>
        </div>
        <div className="group relative"> 
        <button className={Button}
            onClick={() => setSelected("https://media.tenor.com/E4od4SG3hjMAAAAi/bunny-bunnies.gif")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Yes" : "No"}
          </button>
          <div className={EmojiContainer}>
          <img 
              className="w-8 h-8"
              src={`https://img.icons8.com/?size=256&id=ayGv90aDFoAZ&format=png`}
          />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
