import ContactFormwithoutRedirect from "./ContactFormwithoutRedirect";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footerstrip = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle chat box visibility
  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="section footer-sectionfull">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mb-4">
                <strong>Contact Information</strong>
              </h3>
              <ul className="footerlistitems">
                <li>
                  <strong>Address:</strong>
                </li>
                <li>
                  <i className="fa fa-map-marker-alt"></i> 2nd Floor, T.C.
                  67/96/13 & 14, SMH Complex, Kamaleswaram, Thiruvananthapuram,
                  Kerala - 695009, India
                </li>
                <li className="mt-4">
                  <strong>Contact No.:</strong>
                </li>
                <li>
                  <i className="fa fa-phone-alt"></i> India: +91 811 386 7000,
                  <br />
                  UK: +1 9295521900
                </li>
                <li className="mt-4">
                  <strong>Email Address:</strong>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:info@edsys.in">info@edsys.in</a>
                </li>
              </ul>
              <ul className="mt-5 footer-socialmedialinks">
                <li>
                  <a
                    href="https://www.facebook.com/EdsysEducationSystems/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/EdsysEducatio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/educationsolutionproviders/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/edsys---a-technoalliance-company/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/EdsysThiruvananthapuram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">
                <strong>Get in touch with us</strong>
              </h3>
              <ContactFormwithoutRedirect
                contactlead="Footer Form (educationalmobileapps.com)"
                submitbtntxt="Submit"
                successmsg="Thanks for submission. We will get in touch with you."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-outer">
        <div className="container">
          <div className="footer">
            <p>
              Copyright © 2022 | Edsys Pvt Ltd. All Rights Reserved | Digital
              Marketing by JointViews
            </p>
          </div>
        </div>
      </div>
      {/* whatsapp footer */}

      {/* <div className="what-set">
        <a
          className="whatsapp-icon"
          href="https://api.whatsapp.com/send?phone=+918113860000&text= Hi Educational Mobile App Team,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp whatsapp-img"></i>
        </a>
      </div> */}
      {/* <div className="Floatwp">
        <FloatingWhatsApp
          phoneNumber="918113860000"
          accountName="Educational App"
          avatar="/images/edsys.svg"
          statusMessage="Active"
          chatMessage={`Hi There,\nHow can i help you today!`}
        />
      </div> */}
      <div id="whatsapp-chat-widget" className="whatsapp-chat-widget">
        <div id="wa-widget-send-button" onClick={toggleChatBox}>
          <i className="fab fa-whatsapp wa-messenger-svg-whatsapp wh-svg-icon"></i>
        </div>
        {isOpen && (
          <div id="wa-chat-box" className="wa-chat-box show">
            <div className="wa-chat-box-header">
              <img
                className="wa-chat-box-brand bg-light"
                src="/images/edsys.svg"
              />
              <div className="wa-chat-box-brand-text">
                <div className="wa-chat-box-brand-name">Educational App</div>
                <div className="wa-chat-box-brand-subtitle">
                  appify your Business
                </div>
              </div>
              <div className="wa-chat-bubble-close-btn" onClick={toggleChatBox}>
                <i
                  className="fas fa-times closeicon"
                  style={{ display: "table-row", cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div className="wa-chat-box-content">
              <div className="wa-chat-box-content-chat">
                <div className="wa-chat-box-content-chat-brand">
                  Educational App
                </div>
                <div className="wa-chat-box-content-chat-welcome">
                  Hi there!
                  <br />
                  How can I help you today?
                </div>
              </div>
            </div>

            <div className="wa-chat-box-send">
              <a
                role="button"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918113869000&amp;text=Hi, Educational App Team"
                title="WhatsApp"
                className="wa-chat-box-content-send-btn"
              >
                <i className="fab fa-whatsapp wa-chat-box-content-send-btn-icon"></i>
                <span className="wa-chat-box-content-send-btn-text">
                  Start Chat
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footerstrip;
