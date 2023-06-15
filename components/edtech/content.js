import Link from 'next/link'
// import Image from "next/img";
// import Video from "./video";
import { useRouter } from 'next/router'
import React, { useState, useEffect, useContext } from 'react'
import OnlineLearningExpo from './onlineLearningExpo'
import Video from '../../components/edtech/video'
import ReactPaginate from 'react-paginate'

const Content = () => {
  const router = useRouter()
  // const { Categories, primaryMessage, ListTotal, pageCount } = useContext(
  //   AppContext,
  // )
  console.log('Categories', Categories)

  // ======================================= pagination starts ======================
  //  const [pageCount, setPageCount] = useState(0);
  const [pageItems, setPageItems] = useState([])
  console.log('pageItems', pageItems)

  const updatePageItems = (pageNo) => {
    const end = pageNo * 12
    const start = end - 12
    const items = Categories.slice(start, end)
    setPageItems(items)
    console.log(pageItems)
  }
  useEffect(() => {
    const items = Categories.slice(0, 12)
    setPageItems(items)
    console.log(pageItems)
  }, [Categories])
  // handle page change
  const handlePageChange = (data) => {
    updatePageItems(data.selected + 1)
  }
  // ======================================= PAGINATION ENDS ========================

  return (
    <>
      {/* <Head></Head> */}

      <div className="mainContent mt-3">
        <div className="conten-heading-wrapper">
          <h2 className="headingMains">
            {primaryMessage.edtechcategory_show}
            <span className="conten-heading-number">{ListTotal}</span>
          </h2>
        </div>

        <div className=" paragraph-text">
          <p>{primaryMessage.category_description}</p>
        </div>

        <div className="row mainRowCards">
          {pageItems &&
            pageItems.length &&
            pageItems.map((educationcardresdata, index) => {
              return (
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5 ">
                  <div className="card mainCard">
                    <div className="card-header headingCard">
                      <img
                        alt=""
                        src={educationcardresdata.logo_link}
                        width="100"
                        height="100"
                        className="card-img"
                      />
                      <h4>{educationcardresdata.app_name}</h4>
                    </div>

                    <div className="card-body childCard">
                      <p className="greyText">
                        {educationcardresdata.description}
                      </p>
                      <h6>Age Group : {educationcardresdata.age}</h6>

                      <div className="similarApp">
                        <div className="developBtn mb-3">
                          <Link href="https://appcostcalculator.redbytes.co.uk/?utm_source=edsys_edtech_dir&#038;utm_medium=wanna_make_btn&#038;utm_campaign=lead_gen">
                            <a target="_blank" className="similar-btn-app">
                              Want to develop a similar aap?
                            </a>
                          </Link>
                        </div>
                        <div className="playSLinks">
                          <div>
                          {educationcardresdata.play_store && 
                            <>
                              <Link
                                href={educationcardresdata.play_store}
                                target="_blank"
                              >
                                <a target="_blank">
                                  <img
                                    alt=""
                                    src="/images/playicon.png"
                                    width="136"
                                    height="40"
                                  />
                                </a>
                              </Link>
                            </>
                          }
                          </div>
                          <div>
                            {educationcardresdata.app_store &&
                              <>
                                <Link href={educationcardresdata.app_store}>
                                  <a target="_blank">
                                    <img
                                      alt=""
                                      src="/images/appicon_new.png"
                                      width="138"
                                      height="40"
                                    />
                                  </a>
                                </Link>
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          previousLabel={'<'}
          nextLabel={'>'}
          pageRangeDisplayed={12}
          containerClassName={'pagination justify-content-end'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />

        {/* <div className="seeMOreBtn mt-3">
          <button className="SeeBtn">See More</button>
        </div> */}

        <Video />
      </div>
    </>
  )
}

export default Content
