import React, { useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";
const Manager = () => {
  const passwordRef = useRef(null);
  const imageRef = useRef(null);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (imageRef.current.src.includes("eyecross.png")) {
      console.log(imageRef.current.src);
      imageRef.current.src = "/eye.png";
      passwordRef.current.type = "text";
    } else {
      console.log(imageRef.current.src);
      imageRef.current.src = "/eyecross.png";
      passwordRef.current.type = "password";
    }
  };

  const handleOnchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    const newForm = { ...form, id: nanoid() };
    setForm({ site: "", username: "", password: "" });
    setPasswordArray([...passwordArray, newForm]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, newForm])
    );
    console.log([...passwordArray, newForm]);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleEdit = (id) => {
    let selectedPassword = passwordArray.filter((site) => {
      return site.id === id;
    });

    handleDelete(id);
    setForm({
      site: selectedPassword[0].site,
      username: selectedPassword[0].username,
      password: selectedPassword[0].username,
    });
  };

  const handleDelete = (id) => {
    let newPasswordArray = passwordArray.filter((site) => {
      return site.id !== id;
    });

    setPasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    console.log(newPasswordArray);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="mx-auto flex justify-center ">
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
              name="site"
              value={form.site}
              onChange={handleOnchange}
            />
            <div className="flex  justify-center w-2/3 gap-3">
              <input
                type="text"
                placeholder="Enter Username"
                className="outline-[2px] outline-green-600 w-3/4 rounded-full  p-1"
                name="username"
                value={form.username}
                onChange={handleOnchange}
              />
              <div className="w-1/4 relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="outline-[2px] outline-green-600 w-full rounded-full  p-1"
                  name="password"
                  value={form.password}
                  onChange={handleOnchange}
                  ref={passwordRef}
                />
                <img
                  src="/eyecross.png"
                  alt="visibility"
                  className="w-5 absolute bottom-2 right-2 cursor-pointer "
                  ref={imageRef}
                  onClick={() => showPassword()}
                />
              </div>
            </div>
            <div
              className="button p-2 bg-green-600 hover:bg-green-500 rounded-full flex gap-2 cursor-pointer"
              onClick={() => savePassword()}
            >
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
              ></lord-icon>
              <button className="cursor-pointer">Add Password</button>
            </div>
            <div className="passwords flex flex-col  gap-5 m-8 w-full">
              <h1 className="font-bold  ">Your Passwords</h1>
              <div className="table-data w-full flex justify-center items-center ">
                {passwordArray.length === 0 && <div>No Passwords to show</div>}
                {passwordArray.length !== 0 && (
                  <table className="table-auto w-3/4">
                    <thead className="outline bg-green-700">
                      <tr>
                        <th>Site</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>

                    <tbody className="bg-blue-100">
                      {passwordArray.map((site) => {
                        return (
                          <tr key={site.id}>
                            <td>
                              <a href={site.site} target="_blank">
                                {site.site}
                              </a>
                            </td>
                            <td>{site.username}</td>
                            <td>
                              <div className="flex justify-center items-center gap-5 ">
                                {site.password}
                                <lord-icon
                                  src="https://cdn.lordicon.com/exymduqj.json"
                                  trigger="hover"
                                  state="hover-line"
                                  colors="primary:#000000,secondary:#000000"
                                  className="cursor-pointer"
                                  onClick={() => handleEdit(site.id)}
                                  style={{ width: "25px", height: "25px" }}
                                ></lord-icon>
                                <lord-icon
                                  src="https://cdn.lordicon.com/xyfswyxf.json"
                                  trigger="hover"
                                  className="cursor-pointer"
                                  onClick={() => handleDelete(site.id)}
                                  style={{ width: "25px", height: "25px" }}
                                ></lord-icon>
                                <lord-icon
                                  src="https://cdn.lordicon.com/xuoapdes.json"
                                  trigger="hover"
                                  className="cursor-pointer"
                                  style={{ width: "25px", height: "25px" }}
                                  onClick={() => copyText(site.password)}
                                ></lord-icon>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
