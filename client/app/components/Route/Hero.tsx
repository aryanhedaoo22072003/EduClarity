'use client'
import Image from "next/image";
import Link from "next/link";
import React, { FC} from "react";
import { BiSearch } from "react-icons/bi";


type Props = {};

const Hero: FC<Props> = (props) => {
  return (
   
      <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:left-8 1500px:left-14"></div>
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
<Image
src="/assets/banner-img-1.png"
alt="Banner Image"
width={600}
height={600}
className="object-contain w-[90%] lg:max-w-[85%]"
/>
       </div>
       <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]">
           Improve your Online Learning Experience with EduClarity💻
         </h2>
         <br />
         <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
          We have many online courses & more online Registered student.Find          your Desired Courses from them.
         </p>
         <br />
         <br />
         <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
           <input
             type="search"
             placeholder="Search Courses..."
//             // value={search}
             // onChange={(e) => setSearch(e.target.value)}
             className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
           />
           <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
         //   onClick={handleSearch}
           >
             <BiSearch className="text-white" size={30} />
           </div>
         </div>
         <br />
         <br />
         <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
<Image
src="/assets/client-1.jpg"
alt="Client 1"
width={50}
height={50}
className="rounded-full"
/> 
<Image
src="/assets/client-2.jpg"
alt="Client 2"
width={50}
height={50}
className="rounded-full -ml-4"
/> 
<Image
src="/assets/client-3.jpg"
alt="Client 3"
width={50}
height={50}
className="rounded-full -ml-4"
/> *

           <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
             500K+ People already trusted us.{" "}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
        <br />
      </div>
    </div>
    )
   };


export default Hero;

