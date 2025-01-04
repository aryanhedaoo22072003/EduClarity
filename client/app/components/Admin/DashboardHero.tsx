/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import DashboardHeader from './DashboardHeader';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {
  isDashboard?:boolean;
}

const DashboardHero = (props: Props) => {
  return (
    <div>
        <DashboardHeader/>
    </div>
  )
}

export default DashboardHero