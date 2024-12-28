/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });
  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    signOut();
    setLogout(true);
    redirect("/");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }
  return (//<div class="w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#ffff0006] rounded-[5px] shadow-xl dark:shadow-sm mt-[80px] mb-[80px] sticky top-[120px] left-[30px]"><div class="w-full"><div class="w-full flex items-center px-3 py-4 cursor-pointer dark:bg-slate-800 bg-gray-100"><img alt="Profile Avatar" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full" srcset="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqansthij%2Fimage%2Fupload%2Fv1735390451%2Favatars%2Fumdmkybnaixslwpoknn5.jpg&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqansthij%2Fimage%2Fupload%2Fv1735390451%2Favatars%2Fumdmkybnaixslwpoknn5.jpg&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqansthij%2Fimage%2Fupload%2Fv1735390451%2Favatars%2Fumdmkybnaixslwpoknn5.jpg&amp;w=48&amp;q=75" style="color: transparent;"><h5 class="pl-2 800px:block hidden font-Poppins dark:text-white text-black">My Account</h5></div><div class="w-full flex items-center px-3 py-4 cursor-pointer bg-transparent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="dark:fill-white fill-black" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"></path></svg><h5 class="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Change Password</h5></div><div class="w-full flex items-center px-3 py-4 cursor-pointer bg-transparent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="dark:fill-white fill-black" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.374 23.977c-4.183-.21-8.006-2.626-9.959-6.347-2.097-3.858-1.871-8.864.732-12.454C4.748 1.338 9.497-.698 14.281.23c4.583.857 8.351 4.494 9.358 8.911 1.122 4.344-.423 9.173-3.925 12.04-2.289 1.953-5.295 2.956-8.34 2.797zm7.705-8.05a588.737 588.737 0 0 0-3.171-1.887c-.903 1.483-2.885 2.248-4.57 1.665-2.024-.639-3.394-2.987-2.488-5.134.801-2.009 2.79-2.707 4.357-2.464a4.19 4.19 0 0 1 2.623 1.669c1.077-.631 2.128-1.218 3.173-1.855-2.03-3.118-6.151-4.294-9.656-2.754-3.13 1.423-4.89 4.68-4.388 7.919.54 3.598 3.73 6.486 7.716 6.404a7.664 7.664 0 0 0 6.404-3.563z"></path></svg><h5 class="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Enrolled Courses</h5></div><a class="w-full flex items-center px-3 py-4 cursor-pointer bg-transparent" href="/admin"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="dark:fill-white fill-black" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><g fill-rule="evenodd"><circle cx="17" cy="15.5" r="1.12"></circle><path d="M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z"></path><path d="M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0 0 17 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g></svg><h5 class="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Admin Dashboard</h5></a><div class="w-full flex items-center px-3 py-4 cursor-pointer bg-transparent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="dark:fill-white fill-black" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg><h5 class="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Log Out</h5></div></div></div>
    <div className="w-[85%] flex mx-auto">
      <div 
        className={`w-[60px] 800px:w-[450px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#ffff0006] rounded-[5px] shadow-xl dark:shadow-sm mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>

      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px] ">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}
      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px] ">
          <ChangePassword />
        </div>
      )}
    </div>
  );
};

export default Profile;
