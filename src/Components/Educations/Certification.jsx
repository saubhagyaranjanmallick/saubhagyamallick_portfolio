import React from 'react'

import { certifications } from "../../Protfolio";

// import { Fade } from 'react-reveal';


const Certification = () => {
  return (
    <div className="main" id="certs">
    <div className="certs-header-div">
        {/* <Fade bottom duration={2000} distance="20px"> */}
            <h1 className="certs-header" style={{ color: "#fff" }}>
                Certifications
            </h1>
        {/* </Fade> */}
    </div>
    <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
            return (
                
                    <div className="cert-card">
                        <div className="content">
                            <a
                                href={cert.certificate_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="content-overlay"></div>
                                <div
                                    className="cert-header"
                                    style={{ backgroundColor: cert.color }}
                                >
                                    <span className="iconify"
                                        data-icon={cert.icon}
                                        style={{ color: "#fff", width: "100%", height: "100px" }}
                                        data-inline="false">
                                    </span>
                                </div>
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title" style={{ color: "#fff" }}>
                                        Certificate
                                    </h3>
                                </div>
                            </a>
                        </div>
                        <div className="cert-body">
                            <h2 className="cert-body-title" style={{ color: "#fff" }}>
                                {cert.title}
                            </h2>
                            <h3
                                className="cert-body-subtitle"
                                style={{ color: "#fff" }}
                            >
                                {cert.subtitle}
                            </h3>
                        </div>
                    </div>
                
            )
        })}
    </div>
</div>
  )
}

export default Certification