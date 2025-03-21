import React, { useState, useContext } from "react";
import { Mycontext } from '../MyContext'

function UpdateProfilePic() {
  const { isProfPicOpen, setIsProfPicOpen } = useContext(Mycontext)

  const handleImageUpload = (e) => {
    console.log(e.target)
  }

  return (
    <div className={`w-full h-full justify-center items-center absolute bg-gray-500/20 ${isProfPicOpen ? 'flex' : 'hidden'}`}>
      <div className="flex flex-col justify-center items-center gap-5 bg-white p-20">
        <h1>Change Profile Photo</h1>
        <input type="file" id="" onChange={handleImageUpload}/>
        <button className="cursor-pointer" onClick={() => setIsProfPicOpen(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateProfilePic;
