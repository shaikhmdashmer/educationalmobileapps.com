import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import categoriesData from "../../../data/categories";

const SideBarr = ({ posts }) => {
  // Onclick Bg change of categories State
  console.log("posts", posts);
  const [seeAll, setSeeAll] = useState(false);
  const router = useRouter();
  const [categories, setCategories] = useState("");
  const [search, setSearch] = useState("");



  const duplicateCheck = [];

  const handleSearch = () => {
    search.toString();
    axios
      .post(`https://admin.educationalmobileapps.com/educationappSearch?category=${search}`)
      .then((rec) => {
        console.log("Search Result", rec)
       localStorage.setItem('categories', JSON.stringify(rec.data.data));
      })
      .catch((err) => {
        console.log(err, 'Error')
      })
  }


  return (
    <>
      {/* Search box */}
      <div className="searchBox">
        <div className="close-search-boxbtn" onClick={sidebarfilterfunction}><div></div></div>
        <div className="searchInner">
          <h6 className="formLabel">Search</h6>
          <div className="d-flex justify-content-between mt-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Here.."
              className="inputSer mx-1"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => handleSearch()} className="successBtn">Submit</button>
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
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://admin.educationalmobileapps.com/categories");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default SideBarr;
