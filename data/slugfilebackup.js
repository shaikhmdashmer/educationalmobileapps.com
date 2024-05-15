import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import LandingPage from "../components/education/landing";
import SideBarr from "../components/education/sidebar/sidebar";
import { Button } from "primereact/button";
import EducationCardComponent from "../components/education/Education-card-component";
import Modal from "react-bootstrap/Modal";
import categoriesData from "../data/categories";
import axios from 'axios'
import { toast } from 'react-toastify'




export default function InnerSinglePage({ pagedata }) {
  console.log("Page Data", pagedata);

  const [contactUs, setContactUs] = useState(false);
  const [Categories, setCategories] = useState([])
  console.log("Categories",Categories)
  const [search, setSearch] = useState("");
  const [Categoriesdata, setCategoriesdata] = useState({
    user_app_name: "",
    user_text: "",
    user_app_user_id: "",
    user_app_category_id: "",
    user_app_skill_id: 0,
    user_app_age_id: "",
    user_app_store_link: "",
    user_play_store_link: "",
    user_app_logo_link: "",
    user_name: "",
    user_email: "",
    user_comment: "",
  });

  const duplicateCheck = [];

  const [CategoriesRest, setCategoriesRest] = useState({
    user_app_name: '',
    user_text: '',
    user_app_user_id: '',
    user_app_category_id: '',
    user_app_skill_id: 0,
    user_app_age_id: '',
    user_app_store_link: '',
    user_play_store_link: '',
    user_app_logo_link: '',
    user_name: '',
    user_email: '',
    user_comment: '',
  })
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  const handleRest = () => {
    setCategoriesdata(CategoriesRest)
  }

  const AddCategories = () => {
    let body = {
      user_app_name: Categoriesdata.user_app_name,
      user_text: Categoriesdata.user_text,
      user_app_user_id: Categoriesdata.user_app_user_id,
      user_app_category_id: Categoriesdata.user_app_category_id,
      user_app_skill_id: Categoriesdata.user_app_skill_id,
      user_app_age_id: Categoriesdata.user_app_age_id,
      user_app_store_link: Categoriesdata.user_app_store_link,
      user_play_store_link: Categoriesdata.user_play_store_link,
      user_app_logo_link: Categoriesdata.user_app_logo_link,
      user_name: Categoriesdata.user_name,
      user_email: Categoriesdata.user_email,
      user_comment: Categoriesdata.user_comment,
    }
    axios
      .post('https://admin.educationalmobileapps.com/educationappform', body)
      .then((rec) => {
        console.log("Form Response", rec);
        if (rec.data.result == true) {
          handleRest()
          setContactUs(false)
          toast.success(rec.data.message)
        } else {
          toast.error(rec.data.message)
        }
      })
      .catch((err) => {
        console.log(err, 'Error')
      })
  }


  const handleSearch = () => {
    search.toString();
    axios
      .post(`https://admin.educationalmobileapps.com/educationappSearch?category=${search}`)
      .then((rec) => {
        console.log("Search Result", rec)
        setCategories(rec.data.data)
        // setSearch("")
      //  localStorage.setItem('categories', JSON.stringify(rec.data.data));
      })
      .catch((err) => {
        console.log(err, 'Error')
      })
  }

  const withoutSearch = pagedata && pagedata?.categoriesData?.map(carddata => {
    return (
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
              <Link href={carddata.app_store}>
                <a target="_blank">
                  <img
                    src="/images/downloads.png"
                    className="custom-margin-right"
                  />
                </a>
              </Link>
              <Link href={carddata.play_store}>
                <a target="_blank">
                  <img src="/images/playstore.png" className="" />
                </a>
              </Link>
            </div>

            <button className="customizebtn">
              <Link href="https://appcostcalculator.redbytes.co.uk/">
                <a target="_blank" className="developAnc">
                  Want To Develop Similar Apps ?
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  });

  const searchedData = Categories && Categories.map(carddata => {
    return (
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
              <Link href={carddata.app_store}>
                <a target="_blank">
                  <img
                    src="/images/downloads.png"
                    className="custom-margin-right"
                  />
                </a>
              </Link>
              <Link href={carddata.play_store}>
                <a target="_blank">
                  <img src="/images/playstore.png" className="" />
                </a>
              </Link>
            </div>

            <button className="customizebtn">
              <Link href="https://appcostcalculator.redbytes.co.uk/">
                <a target="_blank" className="developAnc">
                  Want To Develop Similar Apps ?
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  })
  return (
    <>
      <Head>
        <title>Education App Directory</title>
        <meta name="description" content="" />
      </Head>

      <LandingPage />
      <div className="py-4 container-wrapper">
        <div className="containerrow">
          {/* <SideBarr /> */}
          <div className="searchBox">
        <div className="searchInner">
          <h6 className="formLabel">Search</h6>
          <div className="d-flex justify-content-between mt-1">
            <input
              type="text"
              value={search}
              name=""
              id=""
              placeholder="Search Here.."
              className="inputSer mx-1"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button    onClick={() => {handleSearch() }} className="successBtn">Submit</button>
          </div>
        </div>

        {/* Categories List Box */}
        <div className="categories">
          <h5 className="formLable">Categories</h5>
          <div className="categoriesSpace">
            {categoriesData.catdata?.map((postlist, index) => {
              if (duplicateCheck.includes(postlist.category)) return null;
              duplicateCheck.push(postlist.category);
              return (
                <div key={index}>
                  <input
                    className="form-check-input checkbox2"
                    type="checkbox"
                  />
                  <Link href={postlist.category_slug}>
                    <label className="anchorTag">{postlist.category}</label>
                  </Link>
                </div>
              );
            })}
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
          {/* Center Component */}
          {/* <EducationCardComponent data={pagedata} /> */}
          <div className="mainCardsInside">
        <div className="mainDivContent">
          <div className="headingSec">
            <div className="tittleButton">
              <label className="labelForm">
                {pagedata?.categoriesData[0].category}
                {/* {carddata[0].category} */}
              </label>
            </div>
            <div>
              <Button
                onClick={() => setVisibleCustomToolbar(!visibleCustomToolbar)}
                className="MainFilterBtn"
              >
                Filter
              </Button>
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
                  Showing results for {pagedata?.categoriesData.length} apps
                </p>
              </div>
            </div>
          </div>

          {/* main card wrapper */}
          {
            search ? searchedData : withoutSearch
          }

        
        

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

          {/* Center Component Ends */}

          {/* Left side editors section */}
          <div className="editorsPick">
            <div className="editorscol">
              <div className="editorsCard">
                <div className="editorsHead">
                  <h2 className="editTitle">Editor's Pick</h2>
                  <div className="mainLiner"></div>
                </div>
                {pagedata &&
                  pagedata.editorsPickDataData.length > 0 &&
                  pagedata.editorsPickDataData.map(
                    (educationcardresdata, index) => {
                      return (
                        <div className="card">
                          <div className="card-body editorsContent">
                            <div className="editorsparent">
                              <div className="imageSection">
                                <img
                                  src={educationcardresdata.logo_link}
                                  height="40"
                                  width="40"
                                  className="editorsImage"
                                />
                              </div>
                              <h3 className="my-2">
                                {educationcardresdata.app_name}
                              </h3>
                              <div className="editorsPara">
                                <p className="editText my-2">
                                  {educationcardresdata.description}
                                </p>
                              </div>
                              <div className="editorsBtnMain">
                                <button className="editorsBtn">
                                  <Link href="https://www.edsys.in/contact/?utm_source=Edsys_App_Dir&utm_medium=Know_More_Btn&utm_campaign=Lead_Gen">
                                    <a target="_blank">
                                      Know More
                                      <FontAwesomeIcon
                                        icon={faCircleArrowRight}
                                        height="15"
                                        className="mx-2"
                                      />
                                    </a>
                                  </Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>

            {/* Contact Us */}
            <div className="editorscol editMainCard">
              <div className="editorsCard">
                <div className="editorsHead">
                  <h2 className="editTitle">Sponsered</h2>
                  <div className="mainLiner"></div>
                </div>
                <img
                  src="/images/promote.jpg"
                  width="0"
                  height="0"
                  className="promoteimg"
                />
                <div className="editorsBtnMain blackShadow">
                  <button
                    className="editorsBtn text-white"
                    id="editorPosition"
                    onClick={() => setContactUs(true)}
                  >
                    Contact Us
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      height="15"
                      className="mx-2 text-white"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* New Addition */}
            <div className="editorscol editMainCard">
              <div className="editorsCard">
                <div className="editorsHead">
                  <h2 className="editTitle">New Additions</h2>
                  <div className="mainLiner"></div>
                </div>

                <div className="card">
                  <div className="card-body subsiPadding">
                    {pagedata &&
                      pagedata.newAdditionsData.length &&
                      pagedata.newAdditionsData.map(
                        (educationcardresdata, index) => {
                          return (
                            <div className="additionsDiv">
                              <div className="additionImg">
                                <img
                                  src={educationcardresdata.logo_link}
                                  height="0"
                                  width="0"
                                  className="additionImage"
                                />
                              </div>
                              <div className="aditionText">
                                <h6 className="mt-3 custPara">
                                  {educationcardresdata.app_name}
                                </h6>
                                <p className="paraAdition">
                                  {educationcardresdata.description}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Apps */}
            <div className="editorscol editMainCard">
              <div className="editorsCard">
                <div className="editorsHead">
                  <h2 className="editTitle">Popular Apps</h2>
                  <div className="mainLiner"></div>
                </div>
                <div className="card">
                  <div className="card-body subsiPadding">
                    {pagedata &&
                      pagedata.popularAppsData.length &&
                      pagedata.popularAppsData.map(
                        (educationcardresdata, index) => {
                          return (
                            <div className="additionsDiv">
                              <div className="additionImg">
                                <img
                                  src={educationcardresdata.logo_link}
                                  height="0"
                                  width="0"
                                  className="additionImage"
                                />
                              </div>
                              <div className="aditionText">
                                <h6 className="mt-3 custPara">
                                  {educationcardresdata.app_name}
                                </h6>
                                <p className="paraAdition">
                                  {educationcardresdata.description}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Of Contact us */}
          <>
            <Modal show={contactUs} onHide={() => setContactUs(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Submit Your App!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="">
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="App Name"
                      value={Categoriesdata.user_app_name}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={Categoriesdata.user_app_user_id}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_user_id: e.target.value,
                        });
                      }}
                    >
                      <option value="user">User</option>
                      <option value="student">student</option>
                      <option value="studentWith">
                        Student With Special Needs
                      </option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>

                  <div className="form-group my-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={Categoriesdata.user_app_category_id}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_category_id: e.target.value,
                        });
                      }}
                    >
                      <option value="">Category</option>
                      <option value="animation-learning-apps">
                        Animation Learning Apps
                      </option>
                      <option value="apps-for-parents">Apps For Parents</option>
                      <option value="teacher-app">Teacher App</option>
                      <option value="art-learning-apps">
                        Art Learning Apps
                      </option>
                      <option value="brain-training-apps">
                        Brain Training Apps
                      </option>
                      <option value="chemistry-learning-apps">
                        Chemistry Learning Apps
                      </option>
                      <option value="critical-thinking-apps">
                        Critical Thinking Apps
                      </option>
                      <option value="educational-games-apps">
                        Educational Games Apps
                      </option>
                      <option value="finance-learning-apps">
                        Finance Learning Apps
                      </option>
                      <option value="geography-apps">Geography Apps</option>
                      <option value="health-fitness-app">
                        Health Fitness Apps
                      </option>
                      <option value="history-learning-apps">
                        History Learning Apps
                      </option>
                      <option value="apps-for-students">
                        Apps For Students
                      </option>
                      <option value="reference-apps">Reference Apps</option>
                      <option value="coding-apps">Coding Apps</option>
                      <option value="language-learning">
                        Language Learning Apps
                      </option>
                      <option value="literature-apps">Literature Apps</option>
                      <option value="math-apps">Math Apps</option>
                      <option value="medical-apps">Medical Apps</option>
                      <option value="music-learning-apps">
                        Music Learning Apps
                      </option>
                      <option value="photo-video-apps">Photo Video Apps</option>
                      <option value="physics-learning-apps">
                        Physics Learning Apps
                      </option>
                      <option value="primary-school-apps">
                        Primary School Apps
                      </option>
                      <option value="productivity-apps-for-students">
                        Productivity Apps For Students
                      </option>
                      <option value="puzzles-apps">Puzzles Apps</option>
                      <option value="science-learning-apps">
                        Science Learning Apps
                      </option>
                      <option value="social-studies-app">
                        Social Studies AppS
                      </option>
                      <option value="special-education-apps">
                        Special Education Apps
                      </option>
                      <option value="drawing-apps">Drawing Apps</option>
                      <option value="best-typing-practice-apps">
                        Typing Practice Apps
                      </option>
                      <option value="gk-apps">GK Apps</option>
                      <option value="story-apps">Story Apps</option>
                      <option value="classroom-apps">Classroom Apps</option>
                      <option value="activity-apps">Activity Apps</option>
                      <option value="timetable-app-for-students">
                        Timetable App For Students
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="checks">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value={Categoriesdata.user_app_skill_id}
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 1,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Communication Skills
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefaultt"
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 2,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefaultt"
                      >
                        Cognitive Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefaulttt"
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 3,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefaulttt"
                      >
                        Thinking & Reasoning
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefaultttt"
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 4,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefaultttt"
                      >
                        Creative Development
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefaulttttt"
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 5,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefaulttttt"
                      >
                        Tech Skills
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefaults"
                        onChange={(e) => {
                          setCategoriesdata({
                            ...Categoriesdata,
                            user_app_skill_id: 6,
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefaults"
                      >
                        Critical Thinking
                      </label>
                    </div>
                  </div>

                  <div className="form-group my-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={Categoriesdata.user_app_age_id}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_age_id: e.target.value,
                        });
                      }}
                    >
                      <option value="">Age</option>
                      <option value="Secondary Age  (12-18 years)">
                        Secondary Age (12-18 years)
                      </option>
                      <option value="Primary Age (5-11 Years)">
                        Primary Age (5-11 Years)
                      </option>
                      <option value="Kindergarten (3-5 Years)">
                        Kindergarten (3-5 Years)
                      </option>
                      <option value="College students">College students</option>
                      <option value="">Age</option>
                    </select>
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="App Store Link"
                      value={Categoriesdata.user_app_store_link}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_store_link: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Play Store Link"
                      value={Categoriesdata.user_play_store_link}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_play_store_link: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="App Logo Link"
                      value={Categoriesdata.user_app_logo_link}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_app_logo_link: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={Categoriesdata.user_name}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={Categoriesdata.user_email}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <textarea
                      rows="5"
                      placeholder="Your Additional Points / Comments"
                      className="form-control"
                      value={Categoriesdata.user_comment}
                      onChange={(e) => {
                        setCategoriesdata({
                          ...Categoriesdata,
                          user_comment: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button
                   onClick={AddCategories}

                  className="btnPurple"
                >
                  Send
                </button>
                <button
                  className="btnlGreen"
                  onClick={() => setContactUs(false)}
                >
                  Cancel
                </button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = categoriesData.catdata.map((slugname) => ({
    params: { slug: slugname.category_slug },
  }))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://admin.educationalmobileapps.com/educationappcategories?category_slug=${params.slug}`
  );
  const pagedata = await res.json();

  return {
    props: {
      pagedata,
    },
    revalidate: 10, // In seconds
  };
}
