import { useEffect, useRef, useState } from "react";
import AppMessage from "./components/Message";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  useEffect(() => {
    generateRandomPassword();
  }, [length, allowNum, allowChar, setPassword]);

  const generateRandomPassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let ranChar = "!@#$%^&*-+~?";
    let ranNum = 1234567890;
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      if (allowNum) str += ranNum;
      if (allowChar) str += ranChar;
      pass += str?.charAt(random);
    }
    setPassword(pass);
  };

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="h-screen bg-black flex flex-wrap content-center justify-center ">
      <div className="bg-gray-600 h-fit  w-fit rounded-md text-center  py-4">
        <h1 className=" text-3xl font-bold text-white">Password Generator</h1>
        {/*  mainInput  */}

        <input
          className="custonRadius bg-gray-300 outline-none px-2 my-4 h-12 w-3/4  rounded-s-lg"
          type="text"
          readOnly
          value={password}
          ref={passwordRef}
        />
        {/* copy Btn */}
        <AppMessage onClickAction={copyPassword} />

        {/* Optiondiv */}
        <div className="optionDivMain flex flex-wrap p-4 ">
          {/* Range wala input  */}
          <input
            className="cursor-pointer bg-gray-300 outline-none px-3 h-10 w-1/5 rounded-s-lg"
            placeholder="Password"
            type="range"
            onChange={(e) => setLength(e.target.value)}
            defaultValue={8}
            minLength={6}
            maxLength={100}
          />
          <label htmlFor="range" className="mx-5 font-semibold text-white">
            {" "}
            Length:  {<span className="text-blue-300">{length}</span>}
          </label>

          <input
            className="bg-gray-300 outline-none px-3 h-5 w-10 rounded-s-lg"
            type="checkbox"
            id="numInput"
            defaultChecked={allowNum}
            onChange={() => setAllowNum((prevs) => !prevs)}
          />
          <label htmlFor="numInput" className="text-white font-semibold">
            {" "}
            Allow Numbers
          </label>

          <input
            className="bg-gray-300 outline-none px-3 h-5 w-10 rounded-s-lg"
            type="checkbox"
            id="charInput"
            defaultChecked={allowChar}
            onChange={() => setAllowChar((prev) => !prev)}
          />
          <label htmlFor="charInput" className="text-white font-semibold">
            Allow Special Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
