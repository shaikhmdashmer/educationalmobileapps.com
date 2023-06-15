import Pagination from "react-bootstrap/Pagination";
// import data from "../data/data.json";
import Image from "next/image";
import Link from "next/link";

const OnlineLearningExpo = () => {
  return (
    <>
      {/* Pagination Of Online Component*/}
      <div className="afterRouterContent">
        <div className="paginationMain">
          <Pagination>
            <Pagination.First />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </div>

        {/* Text Of online content */}
        <div className="titleOfonline">
          <div className="conten-heading-wrapper">
            <h2 className="headingMains">Online Learning<span className="conten-heading-number">10</span></h2>
          </div>
          <div className="paraOnline">
            <p className="txt">
              Online Learning is education that happens online or over the
              Internet. Learners can be from anywhere around the world, and they
              can participate in the classes through online instead of
              traditional classrooms. The highlights of online learning are
              import Brain from "../public/images/brain.png"; accessibility and
              convenience. Classes can be accessed using mobile devices, and it
              gives students the opportunity to explore their strengths and
              weaknesses and enable self-paced learning. There are plenty of
              online learning platforms available that provide the best learning
              experience to students.
            </p>
          </div>
        </div>
      </div>

      <div className="onlineCompcard">
        <div className="row mainRowCards">

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/brain.png"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>
              </div>

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
                    <Link
                      href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                  </div>
                  <div>
                    <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                      <a target="_blank">
                        <img
                          alt=""
                          src="/images/appicon_new.png"
                          width="138"
                          height="40"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/brain.png"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>
              </div>

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
                    <Link
                      href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                  </div>
                  <div>
                    <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                      <a target="_blank">
                        <img
                          alt=""
                          src="/images/appicon_new.png"
                          width="138"
                          height="40"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/brain.png"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>
              </div>

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
                    <Link
                      href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                  </div>
                  <div>
                    <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                      <a target="_blank">
                        <img
                          alt=""
                          src="/images/appicon_new.png"
                          width="138"
                          height="40"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="paginationMain">
          <Pagination>
            <Pagination.First />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </div>
      </div>

      {/* Second Card section */}
      <div className="my-5">
        <div className="conten-heading-wrapper">
          <h2 className="headingMains">MOOC</h2>
          <div className="conten-heading-number">10</div>
        </div>
        <div className="paraOnline">
          <p className="txt">
            Online Learning is education that happens online or over the
            Internet. Learners can be from anywhere around the world, and they
            can participate in the classes through online instead of traditional
            classrooms. The highlights of online learning are accessibility and
            convenience. Classes can be accessed using mobile devices, and it
            gives students the opportunity to explore their strengths and
            weaknesses and enable self-paced learning. There are plenty of
            online learning platforms available that provide the best learning
            experience to students.
          </p>
        </div>
      </div>

      <div className="onlineCompcard">
        <div className="row mainRowCards">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/ears.jpeg"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>

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
                      <Link
                        href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                    </div>
                    <div>
                      <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                        <a target="_blank">
                          <img
                            alt=""
                            src="/images/appicon_new.png"
                            width="138"
                            height="40"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>{" "}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/brain.png"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>
              </div>

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
                    <Link
                      href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                  </div>
                  <div>
                    <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                      <a target="_blank">
                        <img
                          alt=""
                          src="/images/appicon_new.png"
                          width="138"
                          height="40"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 scrollbar_app_list my-5">
            <div className="card mainCard">
              <div className="card-header headingCard">
                <img
                  alt=""
                  src="/images/promote.jpg"
                  width="100"
                  height="100"
                  className="card-img"
                />
                <h4>3D Brain</h4>
              </div>

              <div className="card-body childCard">
                <p className="greyText">
                  3D Brain app is just the one for anyone curious about the
                  human brain. The app comes with 29 interactive and vivid brain
                  imgs that offer information on related functions and links for
                  users to understand it in depth.
                </p>
                <h6>Age Group : College students</h6>
              </div>

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
                    <Link
                      href="https://play.google.com/store/apps/details?id=org.dnalc.threedbrain&hl=en_IN&gl=US"
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
                  </div>
                  <div>
                    <Link href="https://apps.apple.com/us/app/3d-brain/id331399332">
                      <a target="_blank">
                        <img
                          alt=""
                          src="/images/appicon_new.png"
                          width="138"
                          height="40"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="paginationMain">
          <Pagination>
            <Pagination.First />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default OnlineLearningExpo;
