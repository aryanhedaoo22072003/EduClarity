/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import Heading from '../../../app/utils/Heading';
import UserAnalytics from '../../components/Admin/Analytics/UserAnalytics';
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';
type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="EduClarity - Admin"
         description="EduClarity is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <UserAnalytics /> 
            </div>
        </div>
    </div>
  )
}

export default page