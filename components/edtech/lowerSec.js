import Link from "next/link";
import Footerstrip from "../footerstrip";
// import Image from "next/image";

const LowerComp = () => {
  return (
    <>
      <div className="row">
        <div className="col bottom-img-section">
          <Link href="https://www.redbytes.in/portfolio/education-and-learning-apps/?utm_source=New_Edu_Mob_Edtech_dir&utm_medium=Web_UI_banner&utm_campaign=LeadGen">
            <a target="_blank">
              <img
                alt=""
                src="/images/bottombanner.png"
                className="bottom-img"
              />
            </a>
          </Link>
        </div>
        <Footerstrip />
      </div>
    </>
  );
};

export default LowerComp;
