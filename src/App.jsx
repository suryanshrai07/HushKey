import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow overflow-hidden min-h-[82vh]">
          <Manager />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
