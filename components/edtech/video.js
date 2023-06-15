import Link from "next/link";
const Video = () => {
  return (
    <>
      <div className="lowerBody-section">
        <div className="videoMainDiv">
          <div className="spacingVideo">
            <div className="videoSec">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/JT-DM5Z_zMI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="textSec">
              <p className="textGreyP">
                There are more than 500,000 educational apps available in the
                market, it is not easy to find the right one. It is a result of
                hours of extensive research and testing. Visit now to access the
                best education apps for all user types and categories at one
                place, free of cost. Click on button below to visit the
                Educational APP Directory.
              </p>
              <div className="videobtn">
                <button className="LinkBtn">
                  <Link href="/educational-app/?utm_source=Edtech_Dir_page&utm_medium=Below_video_btn&utm_campaign=Lead-gen">
                  <a className="LinkMain">
                    Educational App Directory
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
