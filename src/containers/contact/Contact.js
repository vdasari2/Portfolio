import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
// import email from "../../assets/lottie/email";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <p className={isDark ? "dark-mode" : ""}>
                <img
                  src={contactInfo.locationlogo}
                  alt="Location Pin"
                  className="location-pin"
                />
                {contactInfo.location}
              </p>
              <p className={isDark ? "dark-mode" : ""}>{contactInfo.subsection}</p>

              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            
              <img 
                alt="Vishnu Preetham Reddy Dasari"
                src={require("../../assets/images/vd.png")}
              ></img>

          </div>
        </div>
      </div>
    </Fade>
  );
}