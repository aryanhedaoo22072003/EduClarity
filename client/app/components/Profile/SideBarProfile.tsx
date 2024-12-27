import Image from 'next/image';
import React, { FC } from 'react';
import avatarDefault from '../../../public/assets/avatar.png';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
};

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logOutHandler }) => {
  return (
    <div className="w-full">
      {/* My Account */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? 'dark:bg-slate-800 bg-gray-100' : 'bg-transparent'
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar || avatarDefault}
          alt="Profile Avatar"
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          My Account
        </h5>
      </div>

      {/* Change Password */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? 'dark:bg-slate-800 bg-gray-100' : 'bg-transparent'
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine
          size={20}
          fill={active === 2 ? '#000' : 'currentColor'}
          className="dark:fill-white fill-black"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Change Password
        </h5>
      </div>

      {/* Enrolled Courses */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? 'dark:bg-slate-800 bg-gray-100' : 'bg-transparent'
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera
          size={20}
          fill={active === 3 ? '#000' : 'currentColor'}
          className="dark:fill-white fill-black"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Enrolled Courses
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;