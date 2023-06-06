import React from "react";
import Logo from "./Logo";
import ladyLogo from "../../src/Assests/lady.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="background">
      <br />
      <br />
      <div className="homeFlexContainer">
        <div className="homeFlexItemLeft">
          <h3 className="Headings heading-one">Be more than a coder </h3>
          <h3 className="Headings heading-two">Be more than a coding ninja </h3>
          <h3 className="Headings heading-three">
            50,000 students from 300 colleges have trusted us .{" "}
          </h3>
          <br />
          <button className="exploreOurPrograms">Explore Our programs</button>
        </div>
        <div>
          <img src={ladyLogo} alt="lady logo not found" id="ladyLogo" />
        </div>
      </div>

      <br />

      <div className="thirdContiner">
        <h2 className="headingThirdcomntainer">
          If you have the courage and the commitment to learn coding , then
          coding ninjas will empower you .{" "}
        </h2>
        <h3 className="headingThirdcomntainer">No matter what it takes. </h3>
        <div className="thirdContainerOptions">
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon1-9659.svg" alt="" />
            <p>Content designed by IIT & Stanford alumni</p>
          </div>
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon2-9658.svg" alt="" />
            <p>Instant 1:1 doubt resolution</p>
          </div>
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon3-9657.svg" alt="" />
            <p>
              Practical learning with 100+ problems & 10+ projects in each
              course
            </p>
          </div>
        </div>
      </div>
      <h3 className="inspireHeading">
        15,000+ Coding Ninjas to Inspire You .{" "}
      </h3>

      <button className="HereMoreAboutUs">
        Here more stories from our alumni{" "}
      </button>

      <br />
      <br />

      <div className="whyJoinUsContainer">
        <div className="whyJoinUsContainerflexcontainer">
          <div className="firstContainer">
            <br />
            <button id="whyJoinUsButton">Why join Us ? </button>
            <h2>Great students deserves the best jobs </h2>
            <p>Coding ninjas make it happen . </p>
          </div>
          <div>
            <div className="firstHexanosConatiner">
              <br />
              <div className="workinginFaang">
                <h3>150 + </h3>
                <div>Student Working in FAANG</div>
              </div>

              <div className="startUps">
                <h3>10 + </h3>
                <div>Student started their own company.</div>
              </div>
            </div>
            <div className="firstHexanosConatiner">
              <br />
              <div className="workinginFaang">
                <h3>100 + </h3>
                <div>Having five stars on codechecf</div>
              </div>

              <div className="startUps">
                <h3>100 + </h3>
                <div>Student recived international job offer .</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="postedHeading">
        Our students are posted at 
      </h3>

      <br />

      <div className="companiesLogoContainer">
        <div className="companyfirstRow">
          <img src="https://files.codingninjas.in/google-9542.svg" alt="" />
          <img src="https://files.codingninjas.in/microsoft-9541.svg" alt="" />
          <img src="https://files.codingninjas.in/adobe-9540.svg" alt="" />
          <img src="https://files.codingninjas.in/walmart-9539.svg" alt="" />
          <img src="https://files.codingninjas.in/amazon-9538.svg" alt="" />
          <img src="https://files.codingninjas.in/oyo-9537.svg" alt="" />
        </div>

        <br />
        <div className="companysecondRow">
          <img src="https://files.codingninjas.in/flipkart-9536.svg" alt="" />
          <img src="https://files.codingninjas.in/morganstanley-9535.svg" alt="" />
          <img src="https://files.codingninjas.in/samsung-9534.svg" alt="" />
          <img src="https://files.codingninjas.in/expedia-9533.svg" alt="" />
          <img src="https://files.codingninjas.in/facebook-9532.svg" alt="" />
          

        </div>
      </div>

<br />
      <button className="DownloadPlacemnt">
        Download Placemnt Report 
      </button>
    </div>
  );
};

export default Home;
