import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import Landing from "./landing";
import Footerstrip from "../footerstrip";
import RespSidebar from "../Responsive-sidebar";
import { Sidebar } from "primereact/sidebar";

const EducationCardComponent = (props) => {
  console.log("Props", props);
  const carddata =  props.data;
  console.log("Slug ===>>>", carddata);
  const [search, setSearch] = useState([]);
  console.log("Searched Data",search);
  console.log("carddata Data",carddata);


  useEffect(() => {
    const item = localStorage.getItem("categories");
    setSearch(item);
  })


  const [seeAll, setSeeAll] = useState(false);
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className="mainCardsInside">
        <div className="mainDivContent">
          <div className="headingSec">
            <div className='sidebarfilterbtn' onClick={sidebarfilterfunction}>
                Filter <i className='fa fa-filter'></i>
            </div>
            <div className="tittleButton">
              <label className="labelForm">
                {carddata?.categoriesData[0].category}
                {/* {carddata[0].category} */}
              </label>
            </div>
            <div>
              {/* <Button
                onClick={() => setVisibleCustomToolbar(!visibleCustomToolbar)}
                className="MainFilterBtn"
              >
                Filter
              </Button> */}
            </div>
          </div>

          {/* Filter and dropdown secion */}
          <div className="filterStyle">
            <button
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="buttonIcon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="20"
                className="iconSvg"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M13.447 20.905A.988.988 0 0 0 14 20.02V14.7c0-.262.105-.514.293-.7l6.121-6.054a1.97 1.97 0 0 0 .586-1.4V3.99A.994.994 0 0 0 20 3H4c-.553 0-1 .442-1 .99v2.556c0 .525.211 1.029.586 1.4L9.707 14a.984.984 0 0 1 .293.7v6.31c0 .735.782 1.213 1.447.884l2-.989Z"
                ></path>
              </svg>
            </button>
            <ul
              className="dropdown-menu"
              id="dropdownFilter"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <div className="filterBtnDrop">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault111"
                  />
                  <label
                    className="form-check-label filterSelectLabel"
                    for="flexCheckDefault111"
                  >
                    Secondary Age (12-18 Years)
                  </label>
                </div>
              </li>
              <li>
                <div className="filterBtnDrop">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault222"
                  />
                  <label
                    className="form-check-label filterSelectLabel"
                    for="flexCheckDefault222"
                  >
                    Primary Age (5-11 Years)
                  </label>
                </div>
              </li>
              <li>
                <div className="filterBtnDrop">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault333"
                  />
                  <label
                    className="form-check-label filterSelectLabel"
                    for="flexCheckDefault333"
                  >
                    Kindergarten (3-5 Years)
                  </label>
                </div>
              </li>
              <li>
                <div className="filterBtnDrop">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault444"
                  />
                  <label
                    className="form-check-label filterSelectLabel"
                    for="flexCheckDefault444"
                  >
                    Infants (0-3 Years)
                  </label>
                </div>
              </li>
              <li>
                <div className="filterBtnDrop">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault555"
                  />
                  <label
                    className="form-check-label filterSelectLabel"
                    for="flexCheckDefault555"
                  >
                    College Students
                  </label>
                </div>
              </li>
            </ul>
            <div className="headingSec">
              <div>
                <p className="musicPara">
                  Showing results for {carddata?.categoriesData.length} apps
                </p>
              </div>
            </div>
          </div>

          {/* main card wrapper */}
          {carddata &&
            carddata.categoriesData.map((carddata) => (
              <div className="mainCardsMap" key={carddata.id}>
                <div className="marginCardDiv"></div>
                <div className="card custCard">
                  <div className="card-body paddCard">
                    <div className="cardImg">
                      <img
                        className="mainImg"
                        src={carddata.logo_link}
                        alt="Picture Of Instrument"
                        width="80"
                        height="80"
                      />
                    </div>
                    <div className="cardTitleImg">
                      <div className="cardBox">
                        <img
                          className="boxImg"
                          src="/images/box.png"
                          alt=""
                          width=""
                          height="5"
                        />
                        <div className="purpleBox"></div>
                      </div>
                      <div>
                        <h3 className="cardTitle">{carddata.app_name}</h3>
                      </div>
                    </div>
                    <div classname="carPara">
                      <div
                        className="cardPara"
                        dangerouslySetInnerHTML={{
                          __html: carddata.description,
                        }}
                      />

                      <a className="CardAnchor">Read More</a>
                    </div>
                    <div className="cardAge">
                      <p>
                        <strong>Age Group : </strong>
                        {carddata.age}
                      </p>
                    </div>
                    <div className="playStoreSec">
                      <div className="twoBtns">
                        {carddata.app_store && 
                          <>
                            <Link href={carddata.app_store}>
                              <a target="_blank">
                                <img
                                  src="/images/downloads.png"
                                  className="custom-margin-right"
                                />
                              </a>
                            </Link>
                          </>
                        }
                        {carddata.play_store && 
                          <>
                            <Link href={carddata.play_store}>
                              <a target="_blank">
                                <img src="/images/playstore.png" className="" />
                              </a>
                            </Link>
                          </>
                        }
                      </div>

                      <button className="customizebtn">
                        <Link href="https://appcostcalculator.redbytes.co.uk/?utm_source=New_Edu_Mobile_App_Dir&utm_medium=Wanna_Make_Btn&utm_campaign=Lead_Gen">
                          <a target="_blank" className="developAnc">
                            Want To Develop Similar Apps ?
                          </a>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* For small screen side bar */}
          {visibleCustomToolbar ? (
            <>
              {/*Prime React Side Bar*/}
              <Sidebar
                visible={visibleCustomToolbar}
                onHide={() => setVisibleCustomToolbar(false)}
                // icons={customIcons}
              >
                {/* Search box */}
                <div id="filterSearch">
                  <div className="searchInner">
                    <h6 className="formLabel">Search</h6>
                    <div className="d-flex justify-content-between mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Here.."
                        className="inputSer mx-1"
                      />
                      <button className="successBtn">Submit</button>
                    </div>
                  </div>

                  {/* Categories List Box */}
                  <div className="categories">
                    <h5 className="formLabel">Categories</h5>
                    <div className="categoriesSpace">
                      <div
                        className={
                          router.asPath ===
                          `/edsys/education-app/music-learning-app`
                            ? "categoriesactivelink"
                            : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/edsys/education-app/music-learning-app">
                          <label className="anchorTag">
                            Music Learning Apps
                          </label>
                        </Link>
                      </div>

                      <div
                        className={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Apps For Parents</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `/categories/apps-for-students`
                            ? "categoriesactivelink"
                            : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Apps For Students</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Teacher Apps</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Coding Apps</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">
                            Finance Learning Apps
                          </label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">
                            Language Learning Apps
                          </label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Math Apps</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">Medical Apps</label>
                        </Link>
                      </div>

                      <div
                        classname={
                          router.asPath === `#` ? "categoriesactivelink" : ""
                        }
                      >
                        <input
                          className="form-check-input checkbox2"
                          type="checkbox"
                        />
                        <Link href="/">
                          <label className="anchorTag">
                            Photos & Video Apps
                          </label>
                        </Link>
                      </div>

                      {seeAll ? (
                        <>
                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Art Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Animation Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Brain Training Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Chemistry Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Critical Thinking Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Educational Games Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Geography Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Health & Fitness Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                History Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Reference Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Literature Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Physics Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Primary School Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Productivity Apps For Students
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">Puzzles Apps</label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Science Learning Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Social Studies Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Special Education Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">Drawing Apps</label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Typing Practice Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">GK Apps</label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">Story Apps</label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Classroom Apps
                              </label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">Activity Apps</label>
                            </Link>
                          </div>

                          <div
                            classname={
                              router.asPath === `#`
                                ? "categoriesactivelink"
                                : ""
                            }
                          >
                            <input
                              className="form-check-input checkbox2"
                              type="checkbox"
                            />
                            <Link href="/">
                              <label className="anchorTag">
                                Timetable App For Students
                              </label>
                            </Link>
                          </div>
                        </>
                      ) : null}

                      {seeAll ? (
                        <>
                          <div
                            onClick={() => setSeeAll(!seeAll)}
                            className="seeAll"
                          >
                            {/* <Link href=""> */}
                            <a className="seeAllBtn">See Less</a>
                            {/* </Link> */}
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => setSeeAll(!seeAll)}
                            className="seeAll"
                          >
                            {/* <Link href=""> */}
                            <a className="seeAllBtn">See All</a>
                            {/* </Link> */}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* User Select Section */}
                  <div className="userList">
                    <div className="userLabel">
                      <h5 className="formLabel">User</h5>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault11"
                      />
                      <label className="anchorTag " for="flexCheckDefault11">
                        Student
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault22"
                      />
                      <label className="anchorTag " for="flexCheckDefault22">
                        Students With Special Needs
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault33"
                      />
                      <label className="anchorTag " for="flexCheckDefault33">
                        Parents
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault44"
                      />
                      <label className="anchorTag " for="flexCheckDefault44">
                        Teacher
                      </label>
                    </div>
                  </div>
                  {/* Skills Select Section */}
                  <div className="userList">
                    <div className="userLabel">
                      <h5 className="formLabel">Skill</h5>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault1"
                      />
                      <label className="anchorTag " for="flexCheckDefault1">
                        Communication Skills
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                      <label className="anchorTag " for="flexCheckDefault2">
                        Cognitive Development
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault3"
                      />
                      <label className="anchorTag " for="flexCheckDefault3">
                        Thinking & Reasoning
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault4"
                      />
                      <label className="anchorTag " for="flexCheckDefault4">
                        Creative Development
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault5"
                      />
                      <label className="anchorTag " for="flexCheckDefault5">
                        Tech Skills
                      </label>
                    </div>
                    <div className="userSelect">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault6"
                      />
                      <label className="anchorTag " for="flexCheckDefault6">
                        Critical Thinking
                      </label>
                    </div>
                  </div>
                </div>
              </Sidebar>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default EducationCardComponent;
