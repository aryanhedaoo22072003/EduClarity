// import { styles } from "@/app/styles/style";
// import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
// import React, { FC, useEffect, useState } from "react";
// import { AiOutlineCamera } from "react-icons/ai";
// type Props = {};

// const EditHero: FC<Props> = (props: Props) => {
//   const [image, setImage] = useState("");
//   const [title, setTitle] = useState("");
//   const [subTitle, setSubTitle] = useState("");
//   const { data} = useGetHeroDataQuery("Banner", {
//     refetchOnMountOrArgChange: true,
//   });

//   useEffect(() => {
//     console.log(data);
//     if (data) {
//       setTitle(data?.layout?.banner.title);
//       setSubTitle(data?.layout?.banner.subTitle);
//       setImage(data?.layout?.banner?.image?.url);
//     }
   
//   }, [data]);

//   const handleUpdate = (e: any) => {

//   };

//   const handleEdit=()=>{

//   }

//   return (
//     <>
//       <div className="w-full 1000px:flex items-center">
//         <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"></div>
//         <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
//           <div className="relative flex items-center justify-end">
//             <img
//               src={image}
//               alt=""
//               className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
//             />
//             <input
//               type="file"
//               name=""
//               id="banner"
//               accept="image/*"
//               onChange={handleUpdate}
//               className="hidden"
//             />
//             <label htmlFor="banner" className="absolute bottom-0 right-0 z-20">
//               <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
//             </label>
//           </div>
//         </div>
//         <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
//           <textarea
//             className="dark:text-white resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] 1500px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%] outline-none bg-transparent block"
//             placeholder="Improve Your Online Learning Experience Better Instantly"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             rows={4}
//           />
//           <br />
//           <textarea
//             value={subTitle}
//             onChange={(e) => setSubTitle(e.target.value)}
//             placeholder="We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them."
//             className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[74%] bg-transparent outline-none resize-none"
//           ></textarea>
//           <br />
//           <br />
//           <br />
//           <div
//             className={`${
//               styles.button
//             } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] 
//           ${
//             data?.layout?.banner?.title !== title ||
//             data?.layout?.banner?.subTitle !== subTitle ||
//             data?.layout?.banner?.image?.url !== image
//               ? "!cursor-pointer !bg-[#42d383]"
//               : "!cursor-not-allowed"
//           }
//           !rounded absolute bottom-12 right-12`}
//             onClick={
//               data?.layout?.banner?.title !== title ||
//               data?.layout?.banner?.subTitle !== subTitle ||
//               data?.layout?.banner?.image?.url !== image
//                 ? handleEdit
//                 : () => null
//             }
//           >
//             Save
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditHero;





import { styles } from "@/app/styles/style";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import Image from "next/image";

type Props = {};

const EditHero: FC<Props> = (props: Props) => {
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const { data } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    console.log("API Data:", data); // Log full API response for debugging
    if (data) {
      setTitle(data?.layout?.banner?.title || "");
      setSubTitle(data?.layout?.banner?.subTitle || "");
      setImage(data?.layout?.banner?.image?.url || "/default-image.jpg"); // Fallback image
      console.log("Image URL:", data?.layout?.banner?.image?.url); // Log image URL
    }
  }, [data]);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a local URL for the uploaded image
      setImage(imageUrl);
    }
  };

  const handleEdit = () => {
    // Logic to handle save/update functionality
    console.log("Saving changes:", { title, subTitle, image });
  };

  return (
    <>
      <div className="w-full 1000px:flex items-center">
        <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"></div>
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
          <div className="relative flex items-center justify-end">
            <Image
              src={image}
              alt="Banner Image"
              layout="intrinsic"
              width={500}
              height={300}
              className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
            />
            <input
              type="file"
              id="banner"
              accept="image/*"
              onChange={handleUpdate}
              className="hidden"
            />
            <label htmlFor="banner" className="absolute bottom-0 right-0 z-20">
              <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
          <textarea
            className="dark:text-white resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] 1500px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%] outline-none bg-transparent block"
            placeholder="Improve Your Online Learning Experience Better Instantly"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={4}
          />
          <br />
          <textarea
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them."
            className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[74%] bg-transparent outline-none resize-none"
          ></textarea>
          <br />
          <br />
          <br />
          <div
            className={`${
              styles.button
            } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] 
          ${
            data?.layout?.banner?.title !== title ||
            data?.layout?.banner?.subTitle !== subTitle ||
            data?.layout?.banner?.image?.url !== image
              ? "!cursor-pointer !bg-[#42d383]"
              : "!cursor-not-allowed"
          }
          !rounded absolute bottom-12 right-12`}
            onClick={
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? handleEdit
                : () => null
            }
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHero;
