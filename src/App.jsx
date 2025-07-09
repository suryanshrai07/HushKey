import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <Navbar />
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="h-[80vh] mx-auto flex justify-center overflow-auto">
        <div className="text-center mt-15 md:bg-gray-100 md:w-3/4">
          <div className="heading text-green-500">
            <div className="font-bold md:text-3xl ">
              <span>&lt;</span>
              <span className="text-black">Hush</span>
              <span>Key</span>
              <span>&#47; &gt;</span>
            </div>
            <div className="text-black">Your own Password Manager</div>
          </div>
          <div className="input-fields mt-4 flex flex-col justify-center items-center gap-7 w-full ">
            <input
              type="text"
              placeholder="Enter website URL"
              className="outline-[2px] outline-green-600  w-2/3 rounded-full p-1"
            />
            <div className="flex  justify-center w-2/3 gap-3">
              <input
                type="text"
                placeholder="Enter Username"
                className="outline-[2px] outline-green-600 w-3/4 rounded-full  p-1"
              />
              <div className="w-1/4 relative">
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="outline-[2px] outline-green-600 w-full rounded-full  p-1"
                />
                <img
                  src="/eyecross.png"
                  alt="visibility"
                  className="w-5 absolute bottom-2 right-2 "
                />
              </div>
            </div>
            <div className="button p-2 bg-green-600 hover:bg-green-500 rounded-full flex gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
              ></lord-icon>
              <button>Add Password</button>
            </div>
            <div className="passwords flex flex-col  gap-5 m-8 w-full">
              <h1 className="font-bold  ">Your Passwords</h1>
              <div className="table-data w-full flex justify-center items-center">
                <table class="table-auto w-3/4">
                  <thead className="outline bg-green-700">
                    <tr cl>
                      <th>Site</th>
                      <th>Username</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody className="bg-blue-100">
                    <tr>
                      <td>https://google.com</td>
                      <td>Google</td>
                      <td>password</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    
   
    </>
  );
}

export default App;
