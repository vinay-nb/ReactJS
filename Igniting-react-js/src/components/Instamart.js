import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-blue-200 rounded-md p-2 m-2">
      <h1 className="font-bold p-2 m-2 text-3x">{title}</h1>

      {isVisible ? (
        <button
          id="btn-visible"
          className="p-2 m-2 bg-red-300 rounded-md"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          id="btn-visible"
          className="p-2 m-2 bg-red-300 rounded-md"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p className="p-2 m-2 text-sm ">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={"About section"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={"Team section"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Carrier Instamart"}
        description={"Carrier section"}
        isVisible={visibleSection === "carrier"}
        setIsVisible={() => setVisibleSection("carrier")}
      />
    </div>
  );
};

export default Instamart;
