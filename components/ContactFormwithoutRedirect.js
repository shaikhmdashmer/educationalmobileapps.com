import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2'

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
  const [subject , setSubject] = useState();
  const enq_date = new Date();

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
            
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  });
  



  //Form function
  const handleSubmit3 = async (e) => {
    e.preventDefault();
 
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
  
    // Fetch location data from your API route
    const response = await fetch(`https://api.ipstack.com/${ipData.ip}?access_key=82ef51789ae7b253f10d71b6885bade5`);
    let userIP = await response.json();


    await fetch("https://phonebook.redbytes.in/api/create_email_inquiry/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        user_name: name,
        user_mail: email,
        user_location: userIP ? userLive?.city : "No Permission",
        page_location: liveUrl ? liveUrl : liveUrlinital,
        country_name : userIP?.country_name ,
        user_mobile: phoneField,
        user_message: message,
        user_subject:  subject,
        inquiry_through: UTM ? UTM : "No UTM",
        website_source: "educationalmobileapps.com",
        apikey: "7dac0fcac909b349",
        
      }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        router.push("/thanks");
        console.log("Response succeeded!");
      } else {
        console.log("Something went wrong...please check");
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
        <div className="row form-cmt">
          <div className="col-lg-6 mb-2">
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
          </div>
          <div className="col-lg-6 mb-2">
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
          <div className="col-lg-6 mb-2">
            <div className="form-field has-validation">
            <PhoneInput
                     country={'in'}
                    //  country={userLive ? userLive.location.country_code : 'IN'}
                      enableSearch={true}
                      type="text"
                      id="phonefield"
                      name="phonefield"
                      aria-describedby="inputGroupPrepend"
                      onChange={(e) => setPhoneField(e)}
                      placeholder="Phone Number"
                      required
                    />
              
            </div>
          </div>
          <div className="col-lg-6 mb-2">
            <div className="form-field has-validation">
              <input
                className="form-control"
                type="text"
                id="phonefield"
                name="phonefield"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder="Subject"
                required
              />
              <div className="invalid-feedback">Please enter  Subject no.</div>
            </div>
          </div>

          <div className="col-lg-12 mb-2">
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
            
            <button
              type="submit"
              className="btn btn-primary btn-rounded btn-lg"
            >
              {props.submitbtntxt} <i className="fa fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
