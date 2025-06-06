import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

// class CertificationCard extends Component {
//   render() {
//     const certificate = this.props.certificate;
//     const theme = this.props.theme;
//     return (
//       <Fade bottom duration={2000} distance="20px">
//         <div className="cert-card">
//           <div className="content">
//             <a
//               href={certificate.certificate_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="content-overlay"></div>
//               <div
//                 className="cert-header"
//                 style={{ backgroundColor: certificate.color_code }}
//               >
//                 <img
//                   className="logo_img"
//                   // src={require(`../../assets/images/${certificate.logo_path}`)}
//                   alt={certificate.alt_name}
//                 />
//               </div>
//               <div className="content-details fadeIn-top">
//                 <h3 className="content-title" style={{ color: theme.body }}>
//                   Certificate
//                 </h3>
//               </div>
//             </a>
//           </div>
//           <div className="cert-body">
//             <h2 className="cert-body-title" style={{ color: theme.text }}>
//               {certificate.title}
//             </h2>
//             <h3
//               className="cert-body-subtitle"
//               style={{ color: theme.secondaryText }}
//             >
//               {certificate.subtitle}
//             </h3>
//           </div>
//         </div>
//       </Fade>
//     );
//   }
// }

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div
            className="cert-header"
            style={{
              backgroundColor: certificate.color_code,
              height: "55px",
              textAlign: "center", // ✅ Correct property name
              display: "flex", // ✅ Center with flex
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Optional logo image support */}
            {/* <img className="logo_img" src={require(`../../assets/images/${certificate.logo_path}`)} alt={certificate.alt_name} /> */}
            <h3 className="content-title" style={{ color: theme.body }}>
              {certificate.title}
            </h3>
          </div>

          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}></h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>

            {/* Display the certificate PDF directly */}
            <div className="cert-pdf-view mt-4">
              <iframe
                src={certificate.file} // e.g., "/certificates/Google_Analytics_Certification.pdf"
                width="100%"
                height="200px"
                frameBorder="0"
                title={certificate.title}
                className="border rounded"
              />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
