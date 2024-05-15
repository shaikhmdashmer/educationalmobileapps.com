import ContactFormwithoutRedirect from "./ContactFormwithoutRedirect";
import Link from "next/link";
import { useRouter } from "next/router";

const Footerstrip = () => {
  const router = useRouter();
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
      <div className="what-set">
        <a
          className="whatsapp-icon"
          href="https://api.whatsapp.com/send?phone=+918113860000&text= Hi Educational Mobile App Team,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp whatsapp-img"></i>
        </a>
      </div>
    </>
  );
};

export default Footerstrip;
