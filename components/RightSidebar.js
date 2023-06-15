import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Sidebar } from "primereact/sidebar";

export default function RightSidebar() {
    const [contactUs, setContactUs] = useState(false);

    return (
        <>
            {/* Left side editors section */}
            <div className="editorsPick">
                    <div className="editorscol">
                        <div className="editorsCard">
                            <div className="editorsHead">
                                <h2 className="editTitle">Editor's Pick</h2>
                                <div className="mainLiner"></div>
                            </div>
                            <div className="card">
                                <div className="card-body editorsContent">
                                    <div className="editorsparent">
                                        <div className="imageSection">
                                            <img
                                                src="/images/ears.jpeg"
                                                height="40"
                                                width="40"
                                                className="editorsImage"
                                            />
                                        </div>
                                        <h3 className="my-2">Earm Master</h3>
                                        <div className="editorsPara">
                                            <p className="editText my-2">
                                                EarMaster app is a great tool for ear training,
                                                sight-singing and rhythm at all skill levels, from
                                                beginner to very advanced. The app helps users to build
                                                up their music theory skills and become a better
                                                musician
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
                                    className="editorsBtn"
                                    id="editorPosition"
                                    onClick={() => setContactUs(true)}
                                >
                                    <Link href="">
                                        <a>
                                            Contact Us
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

                    {/* New Addition */}
                    <div className="editorscol editMainCard">
                        <div className="editorsCard">
                            <div className="editorsHead">
                                <h2 className="editTitle">New Additions</h2>
                                <div className="mainLiner"></div>
                            </div>
                            <div className="card">
                                <div className="card-body subsiPadding">
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
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
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additionsDiv">
                                        <div className="additionImg">
                                            <img
                                                src="/images/download.jpeg"
                                                height="0"
                                                width="0"
                                                className="additionImage"
                                            />
                                        </div>
                                        <div className="aditionText">
                                            <h6 className="mt-3 custPara">2*2 SIMULATOR</h6>
                                            <p className="paraAdition">
                                                2x2 simulator app comes with a series of engaging games
                                                to help children memorize times tables easily. Users get
                                                to learn multiplication and division while having fun.{" "}
                                            </p>
                                        </div>
                                    </div>
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
                    />
                  </div>
                  <div className="form-group my-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
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
                        value=""
                        id="flexCheckDefault"
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
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Play Store Link"
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="App Logo Link"
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group my-3">
                    <textarea
                      rows="5"
                      placeholder="Your Additional Points / Comments"
                      className="form-control"
                    ></textarea>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button className="btnPurple">Send</button>
                <button
                  className="btnlGreen"
                  onClick={() => setContactUs(false)}
                >
                  Cancel
                </button>
              </Modal.Footer>
            </Modal>
          </>
        </>
    )
}