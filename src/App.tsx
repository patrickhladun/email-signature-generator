import React, { Fragment, useState } from "react";

import Details from "@components/Details/Details";
import Design from "@components/Design/Design";
import Social from "@components/Social/Social";
import Composer from "@components/Composer/Composer";
import Signature from "@components/Signature/Signature";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const defaults = {
  details: {
    name: "John Doe",
    title: "Front End Developer",
    company: "ACME Company",
    website: "acme.com",
    email: "johndoe@gmail.com",
  },
};

const App = () => {
  const [details, setDetails] = useState(defaults.details);
  const [image, setImage] = useState({
    imageUrl: "/signature.jpg",
    imageEmbed: "",
    imageType: "imageUrl",
  });
  const [design, setDesign] = useState({
    nameFontSize: 16,
    detailsFontSize: 12,
  });
  const [disclaimer, setDisclaimer] = useState({
    disclaimerType: "custom",
    disclaimer: "",
    disclaimerActive: false,
    disclaimerFontSize: 12,
  });

  const handleDetailsUpdate = (update: any) => {
    const name: string = update.name;
    const value: string = update.value;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleImageUpdate = (update: any) => {
    const name = update.name;
    const value = update.value;

    setImage({
      ...image,
      [name]: value,
    });
  };

  const handleDesignUpdate = (update: any) => {
    const name = update.name;
    const value = update.value;

    setDesign({
      ...design,
      [name]: value,
    });
  };

  const handleToggleDisclaimer = (disclaimerActive: boolean) => {
    setDisclaimer({
      ...disclaimer,
      disclaimerActive,
    });
  };

  const handleSelectDisclaimer = (
    disclaimerType: string,
    disclaimerContent: string
  ) => {
    setDisclaimer((disclaimer) => ({
      ...disclaimer,
      disclaimerType,
      disclaimer: disclaimerContent,
    }));
  };

  const handleDisclaimerUpdate = (disclaimerContent: string) => {
    setDisclaimer({
      ...disclaimer,
      disclaimer: disclaimerContent,
    });
  };

  return (
    <Fragment>
      <div className="flex h-screen">
        <div className="bg-slate-100 grow-0 basis-72 h-full">
          <Tabs>
            <TabList className="flex justify-between p-2 bg-zinc-200">
              <Tab className="cursor-pointer">Details</Tab>
              <Tab className="cursor-pointer">Social</Tab>
              <Tab className="cursor-pointer">Design</Tab>
            </TabList>
            <div className="p-2">
              <TabPanel>
                <h2>Details</h2>
                <Details
                  details={details} //
                  updateDetails={handleDetailsUpdate}
                />
              </TabPanel>
              <TabPanel>
                <h2>Social</h2>
                <Social />
              </TabPanel>
              <TabPanel>
                <h2>Design</h2>
                <Design
                  design={design} //
                  updateDesign={handleDesignUpdate}
                />
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <div className="flex grow justify-center items-center h-full bg-slate-200">
          <Composer details={details}>
            <Signature
              details={details}
              image={image}
              design={design}
              disclaimer={disclaimer}
            />
          </Composer>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
