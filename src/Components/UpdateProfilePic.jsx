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
    <div className={`w-full h-full justify-center items-center absolute bg-gray-500/20 ${isProfPicOpen ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col justify-center items-center gap-5 bg-white p-20">
        <h1>Change Profile Photo</h1>
        <input type="file" id="" onChange={handleImageUpload} />
        <button className="cursor-pointer" onClick={() => setIsProfPicOpen(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateProfilePic;
