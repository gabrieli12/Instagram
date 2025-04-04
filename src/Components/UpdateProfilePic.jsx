import React, { useState, useContext, useEffect } from "react";
import { Mycontext } from '../MyContext'
import { set } from "react-hook-form";

function UpdateProfilePic() {
  const { isProfPicOpen, setIsProfPicOpen, profilePic, setProfilePic, setUserInfo, currentLogAcc, userInfo } = useContext(Mycontext)

  const handleImageUpload = (e) => {
    let file = e.target.files[0]
    if (file) {
      let reader = new FileReader()
      reader.onloadend = () => {
        const newProfilePic = reader.result;
        setUserInfo((prev) => ({
          ...prev,
          [currentLogAcc]: {
            ...(prev[currentLogAcc] || {}),
            profilePic: newProfilePic
          }
        }));
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={`w-full h-full justify-center items-center fixed bg-[#0000009b] z-50  ${isProfPicOpen ? 'flex' : 'hidden'}`}>
      <div className=" w-[400px]  flex flex-col  items-center   bg-white  rounded-xl">
        <h1 className="text-[1.4em] border-b border-[#dbdbdb] w-full text-center py-5">Change Profile Photo</h1>
        <label className="text-[#0095f6] font-bold border-b border-[#dbdbdb] w-full text-center py-3" htmlFor="uploadd"> Upload Photo</label>
        <p className="text-[#ed4a57] font-bold border-b border-[#dbdbdb] w-full text-center py-3 cursor-pointer">Remove Current Photo</p>
        <input className="hidden"  type="file" id="uploadd" onChange={handleImageUpload} />
        <button className="cursor-pointer py-3" onClick={() => setIsProfPicOpen(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateProfilePic;
