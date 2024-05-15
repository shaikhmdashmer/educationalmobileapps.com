import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2'
export default function ContactFormFeature(props) {
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

  const enq_date = new Date();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        country_code: userLive ? userLive.location.calling_code : "Na",
        user_mobile: phoneField,
        user_message: "No Message",
        inquiry_through: UTM ? UTM : "No UTM",
        website_source: "educationalmobileapps.com",
        apikey: "7dac0fcac909b349",
        // recaptchaToken: recaptchaToken,
        Service: Service,
      }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setuserMsg("");
        setLoader(false);
       
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
          handleSubmit(e);
        }}
        className={props.formclass}
        autoComplete="off"
        noValidate
      >
        <div className="row">
          <div className="col-lg-12 mb-3">
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
          <div className="col-lg-12 mb-3">
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
          <div className="col-lg-12 mb-3">
            <div className="form-field has-validation">
            <PhoneInput
                     country={userLive ? userLive.country_code.toLowerCase() : ''}
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
