/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from '../components/Profile/Profile';
import { useSelector } from "react-redux";
type Props = {};

const Page: FC<Props> = (props) => {
      const [open, setOpen] = useState(false);
      const [activeItem, setActiveItem] = useState(0);
      const [route, setRoute] = useState("Login");
      const {user}=useSelector((state:any)=>state.auth);

  return (
    <div>
        <Protected>
        <Heading
        title={`${user?.name} profile-EduClarity`}
        description="EduClarity is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Profile user={user}/>
        </Protected>
    </div>
  )
};

export default Page;
