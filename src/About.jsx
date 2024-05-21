import React from "react";

const styles = {
    aboutSection: {
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    },
    aboutContent: {
      padding: '50px',
      textAlign: 'center',  // Keeps text centered
      maxWidth: '1280px',
      margin: '0 auto',
      fontSize: '20px',
    }
  }

const About = () => {
    return (
        <div className="aboutSection" style={styles.aboutSection} id="about">
            <div className="aboutContent" style={styles.aboutContent}>
                <p>Sri Lanka faces a significant challenge due to climate change, with increased extreme weather events threatening its economy and communities. This project, led by the International Water Management Institute (IWMI), focuses on enhancing the country's resilience to climate change impacts. Aligned with the Green Climate Fund (GCF) National Adaptation Plan, the initiative strengthens national, sectoral, and provincial capacities for utilizing climate information in long-term development planning, aiming to build resilience at both community and systemic levels.</p>
                <p>Our commitment to Matara arises from a sincere dedication to address recurring challenges impacting residents. Floods, particularly in the Nilwala river basin, consistently threaten the district. Strong winds disrupt local fishermen's livelihoods, emphasizing the need for tailored solutions. In Matara's diverse terrains, including both wet and dry zones, landslides add to concerns, prompting decisive action. Despite varying climatic conditions, our project aims to empower Matara's resilient community through a sophisticated Climate Information Sharing and Early Warning Dissemination System. </p>
                <div>
                  <br />
                  <h3>       AlertNet - Early Warning Dissemination System</h3>
                  <p>
                      Envision a seamless transmission of crucial alerts reaching the public effectively. The Early Warning Dissemination System for the Matara District in Sri Lanka acts as a vital bridge between government agencies and the public, enhancing the existing flow of dissemination by increasing efficiency and effectiveness. This system empowers governance to select precise warning levels and target specific public groups, thereby strengthening preparedness and ensuring that timely, pertinent warnings reach the individuals who need them most. By simplifying the process, it ensures that critical information is delivered swiftly and accurately, enhancing the community's overall safety and response capabilities.
                  </p>
                </div>
                <div>
                <br />
                    <h3>ShareNet - Information Sharing Platform</h3>
                    <p>Through collaboration with key stakeholders, the challenges within the current data landscape have become apparent. Essential climate and risk data are dispersed among multiple agencies, impeding comprehensive analysis and informed decision-making. The Data Platform we've developed addresses this fragmentation by centralizing critical intelligence. It equips local decision-makers and the community with the necessary tools to fortify resilience against the impacts of climate change. By fostering a collaborative environment, we facilitate data-driven decision-making and encourage active participation, ultimately enhancing local resilience.</p>
                </div>
            </div>
            
        </div>
    );
};

export default About;
