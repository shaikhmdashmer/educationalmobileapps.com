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

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.match(nameRegex)) {
      setNameError("Please enter a valid name");
      return;
    } else {
      setNameError("");
    }

    setLoader(true);
    setuserMsg("Loading.....");
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
  
    // Fetch location data from your API route
    const response = await fetch(`https://api.ipstack.com/${ipData.ip}?access_key=82ef51789ae7b253f10d71b6885bade5`);
    let userIP = await response.json();


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
        user_location: userIP ? userIP?.city : "Na",
        page_location: liveUrl ? liveUrl : liveUrlinital,
        country_code: userIP ? userIP?.location.calling_code : "Na",
        user_mobile: phoneField,
        user_message: "No Message",
        inquiry_through: UTM ? UTM : "footer_form_btn",
        website_source: "educationalmobileapps.com",
        apikey: "7dac0fcac909b349",
        // recaptchaToken: recaptchaToken,
        Service: Service,
      }),
    }).then((res) => {
      if (res.status === 200) {
        mailFunction()
      } else {
        console.log("Something went wrong...please check");
        setLoader(false);
      }
    });
  };


  const mailFunction = async () => {
    const requestData = {
      name: name,
      email: email,
      pageURL: "educationalmobileapps.com",
    };

    try {
      const response = await fetch('https://costcalculator.redbytes.in:3012/send-feedback-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      setuserMsg("Check You Email");
      router.push("/thanks"); 
    } catch (error) {
      console.error('Error:', error);
    }
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
            {nameError && (
              <p style={{ color: "red", fontSize: 12, textAlign: "left" }}>
                {nameError}
              </p>
            )}
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
                     country={'in'}
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
