import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ContactFormwithoutRedirect(props) {
  // download ebook form
  const QuryUrl = useRouter();
  const router = useRouter();
  const UTM = router.query.utm_source;
  const liveUrl = QuryUrl.query.pageslug;

  const liveUrlinital = QuryUrl.pathname;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneField, setPhoneField] = useState("");

  const [getLoader, setLoader] = useState(false);
  const [userMsg, setuserMsg] = useState("");
  const [userLive, setLiveLocation] = useState();
  const [message, setMessage] = useState("");
  const enq_date = new Date();
  const [nameError, setNameError] = useState("");
  const nameRegex = /^[a-zA-Z\s]*$/; // Allows only letters and whitespace
  const [dropDownForm, setDropDown] = useState();
  const [dropDownList, setDropDownList] = useState("");

  // console.log("dropDownForm" ,dropDownForm);

  const [selectedOption, setSelectedOption] = useState("");

  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (value === "Other") {
      setOtherInputVisible(true);
    } else {
      setOtherInputVisible(false);
      setOtherInputValue(e.target.value);
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInputValue(e.target.value);
  };

  // dropdown
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://wp.redbytes.in/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query NewQuery {
              contactformdropdowns(first: 50) {
                nodes {
                  title
                  contacformdropdownredio {
                    contacformdropdownredio
                  }
                }
              }
            }
            `,
          }),
        });

        const responseData = await response.json();
        const fiterDRArray =
          responseData?.data?.contactformdropdowns?.nodes?.filter(
            (data) => data.title == "educationalmobileapps.com"
          );
        console.log("fiterDRArray", fiterDRArray);
        setDropDown(fiterDRArray[0].contacformdropdownredio);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  //Form validation
  useEffect(() => {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation3");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            // console.log("Thanks for submission");
            document.querySelector(".formconfirm-msg3").style.display = "block";
            document.querySelector(".formconfirm-msg3").innerHTML = ""; // Clear the content
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  });
  useEffect(() => {
    fetch("https://api.testreveal.com:3013/api/get-client-location")
      .then((response) => response.json())
      .then((data) => {
        console.log("UserLocation", data);
        setLiveLocation(data);
      })
      .catch((error) => console.log(error));
  }, []);
  //Form function
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    if (!name.match(nameRegex)) {
      setNameError("Please enter a valid name");
      return;
    } else {
      setNameError("");
    }

    setLoader(true);

    console.log("Sending");
    await fetch("https://phonebook.redbytes.in/api/create_email_inquiry/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: name,
        user_mail: email,
        user_location: userLive ? userLive.city : "Na",
        page_location: liveUrl ? liveUrl : liveUrlinital,
        // country_code: userLive ? userLive.location.calling_code : "Na",
        user_mobile: phoneField,
        user_message: message,
        inquiry_through: UTM ? UTM : "No UTM",
        website_source: "educationalmobileapps.com",
        apikey: "7dac0fcac909b349",
      }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setuserMsg(
          "We appreciate you taking the time. Our team will promptly reply to your inquiry."
        );
      } else {
        console.log("Something went wrong...please check");
        setLoader(false);
      }
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit3(e);
        }}
        className="needs-validation3"
        autoComplete="off"
        noValidate
      >
        <div className="row">
          <div className="col-lg-4 mb-3">
            <div className="form-field has-validation">
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Your Name"
                required
              />
              <div className="invalid-feedback">Please type your Name</div>
            </div>
            {nameError && (
              <p style={{ color: "red", fontSize: 12, textAlign: "left" }}>
                {nameError}
              </p>
            )}
          </div>
          <div className="col-lg-4 mb-3">
            <div className="form-field has-validation">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
                required
              />
              <div className="invalid-feedback">
                Please enter valid email address
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="form-field has-validation">
              <input
                className="form-control"
                type="text"
                id="phonefield"
                name="phonefield"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setPhoneField(e.target.value);
                }}
                placeholder="Phone Number"
                required
              />
              <div className="invalid-feedback">Please enter phone no.</div>
            </div>
          </div>
          <div className="col-lg-12 mb-2">
            <div className="form-group my-2 has-validation">
              <select
                className="form-control form_bgnd"
                onChange={handleSelectChange}
              >
                <option selected disabled>
                  Subject
                </option>
                {dropDownForm?.contacformdropdownredio.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {otherInputVisible && (
                <input
                  type="text"
                  className="form-control other-sbj form-group my-2 has-validation"
                  placeholder="Enter other subject"
                  value={otherInputValue}
                  onChange={handleOtherInputChange}
                />
              )}
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="form-field has-validation">
              <textarea
                className="form-control"
                rows="5"
                id="msgfield"
                name="msgfield"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Your Message"
                required
              />
              <div className="invalid-feedback">Please enter you message</div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="formconfirm-msg3" style={{ display: `none` }}>
              <div
                style={{
                  display: `inline-block`,
                  border: `solid 1px #ccc`,
                  padding: `10px`,
                  margin: `10px 0`,
                  fontWeight: `bold`,
                  boxShadow: `0 5px 20px rgba(0,0,0,0.1)`,
                }}
              >
                {props.successmsg}
              </div>
            </div>
            <button
              type="submit"
              disabled={getLoader}
              className="btn btn-primary btn-rounded btn-lg"
            >
              {props.submitbtntxt} <i className="fa fa-arrow-right ms-2"></i>
            </button>
            <br />
            {getLoader && <div className="loader"></div>}
            <strong className="text-center">{userMsg}</strong>
            <br />
          </div>
        </div>
      </form>
    </>
  );
}
