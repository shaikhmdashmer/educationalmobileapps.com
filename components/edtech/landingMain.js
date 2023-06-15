import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Link from 'next/link'
// import { AppContext } from '../../pages/context/AppContext'
import { useRouter } from 'next/router'

const LandingMain = () => {
  const router = useRouter();
  console.log(router)
  // const {
  //   setCategories,
  //   setListTotal,
  //   setPickagedata,
  //   setPageCount,
  //   setPrimaryMessage,
  //   setRecentdata,
  //   setIsLoading,
  // } = useContext(AppContext)
  const maianTitle = 'Find the Ed Tech App You need from the 1000+ listed apps'

  const [Categoriesdata, setCategoriesdata] = useState({
    Student_age: '',
    Student_skill: '',
  })
  console.log('Categoriesdata', Categoriesdata)

  useEffect(() => {
    setIsLoading(true)
    Apicalling('online-learning')
  }, [])

  const Apicalling = (data) => {
    console.log('data', data)

    let body = {
      edtechappcategories: data,
    }
    axios
      .post('https://admin.educationalmobileapps.com/edtechappcategories', body)
      .then((rec) => {
        setIsLoading(false)
        setListTotal(
          rec.data.CategoriesData.length ? rec.data.CategoriesData.length : 0,
        )
        setPageCount(Math.ceil(rec.data.CategoriesData.length / 12))
        setCategories(rec.data.CategoriesData)
        setRecentdata(rec.data.RecentBlogsData)
        setPrimaryMessage(rec.data)
        setPickagedata(rec.data.KnowMoreEducationalAppsData)
      })
      .catch((err) => {
        console.log(err, 'Error')
      })
  }

  const AddCategories = () => {
    let body = {
      Age: Categoriesdata.Student_age,
      Skill: Categoriesdata.Student_skill,
    }
    axios
      .post('https://admin.educationalmobileapps.com/edtechsearch', body)
      .then((rec) => {
        console.log('Add categories =====>', rec)
        setListTotal(
          rec.data.SearchData.length ? rec.data.SearchData.length : 0,
        )
        setPageCount(Math.ceil(rec.data.SearchData.length / 12))
        setCategories(rec.data.SearchData)

        // if (rec.data.result) {
        //   handleRest()

        // } else {
        //   toast.error(rec.data.message)
        // }
      })
      .catch((err) => {
        console.log(err, 'Error')
      })
  }

  return (
    <>
      <div className="row mainEdtechRow">
        <div className="edtech-banner-section">
          <div className="edtech-banner-section-layers"></div>
          <div className="edtech-banner-section-layers2"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 my-5">
                <h1 className="mainTe">{maianTitle}</h1>
                <div className="edtech-search-bar">
                  <div className="edtech-search-dropdown-wrapper">
                    <ul className="edtech-search-dropdown">
                      <li
                        onClick={() => {
                          Apicalling('online-learning')
                        }}
                      >
                        {/* <Link href={`/${router.asPath === "/online-learning"}`} className="edtech_cat_name">
                        
                          Online Learning
                        </Link> */}
                        <Link href="" className="edtech_cat_name">
                        
                          Online Learning
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('digital-content')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          Digital Content
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('international-ed-language-lea')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          International Ed &amp; Language learning
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('ar-vr-games')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          AR, VR and Games
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('workforce-and-skills')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          Skill Upgrade
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('steam-coding-language-lear')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          STEAM, Coding and Language learning
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('tutorial-test-prep')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          Tutoring &amp; Test Prep
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          Apicalling('discovery-admissions')
                        }}
                      >
                        <Link href="" className="edtech_cat_name">
                          Discovery &amp; Admissions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row mt-75">
                  <select
                    className="form-select formsInp"
                    aria-label="Default select example"
                    value={Categoriesdata.Student_age}
                    onChange={(e) => {
                      setCategoriesdata({
                        ...Categoriesdata,
                        Student_age: e.target.value,
                      })
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
                    <option value="Infants (0-3 years)">
                      Infants (0-3 years)
                    </option>
                  </select>
                  <select
                    className="form-select formsInp mx-3"
                    aria-label="Default select example"
                    value={Categoriesdata.Student_skill}
                    onChange={(e) => {
                      setCategoriesdata({
                        ...Categoriesdata,
                        Student_skill: e.target.value,
                      })
                    }}
                  >
                    <option value="">Skill</option>
                    <option value="communication_skills">Communication </option>
                    <option value="cognitive_development">
                      Cognitive Development{' '}
                    </option>
                    <option value="thinking_reasoning">
                      Thinking &amp; Reasoning{' '}
                    </option>
                    <option value="creative_development">
                      Creative Development{' '}
                    </option>
                    <option value="tech_skills">Tech Skills </option>
                    <option value="critical_thinking">
                      Critical Thinking{' '}
                    </option>
                  </select>
                  {/* <input
                    className="selectwidth"
                    type="button"
                    value="Submit"
                    id="app_search_submit"
                  /> */}
                  <button onClick={AddCategories} className="selectwidth">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingMain
// export async function getStaticProps() {
//   const educationcardres = await fetch(`https://admin.educationalmobileapps.com/edtechappcategories`${"online-learning"},)
//   const educationcardresdata = await educationcardres.json()
//   return {
//     props: {
//       educationcardresdata,
//     },
//     revalidate: 10,
//   }
// }

// export async function getServerSideProps(context) {
//   // console.log(context.query)
//   // const router = useRouter();
//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let myBlog = await data.json()
//   return {
//       props: { myBlog }, // will be passed to the page component as props
//   }
// }


