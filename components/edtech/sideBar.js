import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
// import { AppContext } from '../../pages/context/AppContext'
const SideBar = () => {
  // const { Pickagedata, recentdata } = useContext(AppContext)

  return (
    <>
      <div className="mainSide mt-3">
        <div className="sidebar-inner">
          <div className="">
            <div className="top-banner">
              <Link href="https://www.redbytes.in/educational-app-development/?utm_source=Edsys_edtech_dir_pg&utm_medium=Right_banner&utm_campaign=LeadGen">
                <a target="_blank" className="pt-4 sidebar-banner">
                  <img
                    alt=""
                    src="/images/side_banner.png"
                    className="sidebar-banner-img"
                  />
                </a>
              </Link>
            </div>
            <div className="sidebar-applist side-list mt-4">
              <h3>Know More Educational Apps</h3>
              <ul>
                {Pickagedata &&
                  Pickagedata.length &&
                  Pickagedata.map((educationcardresdata, index) => {
                    return (
                      <li>
                        <Link href="">{educationcardresdata.category}</Link>
                      </li>
                    )
                  })}
              </ul>
            </div>

            <div className="sidebar-recent-blog side-list mt-4">
              <h3>Recent Blogs</h3>
              <ul>
                {recentdata &&
                  recentdata.length &&
                  recentdata.map((educationcardresdata, index) => {
                    return (
                      <li>
                        <Link href="">{educationcardresdata.post_title}</Link>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="bottom-banner pt-4">
              <Link href="https://appcostcalculator.redbytes.co.uk/?utm_source=edsys_edtech_dir_pg&#038;utm_medium=right_banner&#038;utm_campaign=leadgen">
                <a target="_blank" className="sidebar-banner">
                  <img
                    alt=""
                    src="/images/girl-banner.png"
                    width="300"
                    height="400"
                    className="sidebar-banner-img"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
