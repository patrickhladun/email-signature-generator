import React from "react";

interface Props {
  details: {
    name: string;
    title: string;
    company: string;
    email: string;
    website: string;
  };
  image: {
    imageUrl: string;
    imageEmbed: string;
    imageType: string;
  };
  design: {
    nameFontSize: number;
    detailsFontSize: number;
  };
  disclaimer: {
    disclaimer: string;
    disclaimerType: string;
    disclaimerActive: boolean;
    disclaimerFontSize: number;
  };
}

const Signature = (props: Props) => {
  const { name, title, company, email, website } = props.details;
  const { imageUrl, imageEmbed, imageType } = props.image;
  const { nameFontSize, detailsFontSize } = props.design;
  const { disclaimer, disclaimerActive } = props.disclaimer;

  const SimpleDesign = () => {
    return (
      <div className="">
        <table cellSpacing="0" cellPadding="0" width="500" border="0">
          <tbody>
            <tr>
              {imageUrl && imageType === "imageUrl" && (
                <td valign="top" width="85">
                  <img alt="Signature Image" width="85" src={imageUrl} />
                </td>
              )}
              {imageEmbed && imageType === "imageEmbed" && (
                <td valign="top" width="85">
                  <img alt="Signature Image" width="85" src={imageEmbed} />
                </td>
              )}
              <td
                style={{
                  padding: "0 0 0 15px",
                  verticalAlign: "top",
                }}
                valign="top"
              >
                <table
                  cellSpacing="0"
                  cellPadding="0"
                  border="0"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    lineHeight: "1.4",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "91%",
                    color: "#303030",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingBottom: "4px",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: `${nameFontSize}px`,
                          fontWeight: "600",
                          color: "#3a5dbb",
                        }}
                      >
                        {name}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          paddingBottom: "4px",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: `${detailsFontSize}px`,
                        }}
                      >
                        {title && `${title} at `}
                        {company}
                      </td>
                    </tr>
                    {email && (
                      <tr>
                        <td
                          style={{
                            paddingBottom: "4px",
                            fontFamily: "Arial, Helvetica, sans-serif",
                            fontSize: `${detailsFontSize}px`,
                          }}
                        >
                          |{" "}
                          <span style={{ fontWeight: 600, color: "#ee1922" }}>
                            e:&nbsp;
                          </span>
                          {email}
                        </td>
                      </tr>
                    )}
                    {website && (
                      <tr>
                        <td
                          style={{
                            paddingBottom: "4px",
                            fontFamily: "Arial, Helvetica, sans-serif",
                            fontSize: `${detailsFontSize}px`,
                          }}
                        >
                          |{" "}
                          <span style={{ fontWeight: 600, color: "#ee1922" }}>
                            w:&nbsp;
                          </span>
                          {website}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        {disclaimerActive && (
          <table
            style={{
              color: "gray",
              fontFamily: "Arial",
              lineHeight: "1.3",
              fontSize: "1em",
              maxWidth: "500px",
            }}
            cellPadding="0"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: "70%",
                    paddingTop: "15px",
                  }}
                >
                  {disclaimer}
                </td>
              </tr>
            </tbody>
          </table>
        )}
        <table
          style={{
            color: "gray",
            fontFamily: "Arial",
            lineHeight: "1.3",
            fontSize: "1em",
            maxWidth: "500px",
          }}
          cellPadding="0"
        >
          <tbody>
            <tr>
              <td style={{ fontSize: "70%", paddingTop: "15px" }}>
                Create your own Email Signature with ACME
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return <SimpleDesign />;
};

export default Signature;
