import React from "react";
import NamePlanet from "@/components/NamePlanet/NamePlanet";
import DescriptionPlanet from "@/components/DescriptionPlanet/DescriptionPlanet";
import PropertyInfoSection from "../PropertyInfoSection/PropertyInfoSection";
import ImgPlanet from "@/components/ImgPlanet/ImgPlanet";
import AdditionalInfoBtns from "@/components/AdditionalInfoBtns/AdditionalInfoBtns";
import SourceLink from "@/components/SourceLink/SourceLink";
import styles from "./Planet.module.css";
import InfoBtns1 from "../InfoBtns1/InfoBtns1";

const Planet = ({ handleclick, ...props }) => {
  // console.log(props);

  return (
    <>
      <div className={styles.planetCard}>
        <InfoBtns1 handleclick={handleclick}></InfoBtns1>
        <ImgPlanet image={`https:${props.img}`}></ImgPlanet>

        <div className={styles.planetCardContent}>
          <div>
            <NamePlanet name={props.name}></NamePlanet>
            <DescriptionPlanet
              contentDesc={props.contentDesc}
              // overview={props.overview}
              // structure={props.structure}
              // geology={props.geology}
            ></DescriptionPlanet>
            <SourceLink href={props.sourcelink}></SourceLink>
          </div>

          <div>
            <AdditionalInfoBtns handleclick={handleclick}></AdditionalInfoBtns>
          </div>
        </div>
      </div>
      <div>
        <PropertyInfoSection
          rotation={props.rotation}
          revolution={props.revolution}
          radius={props.radius}
          temperature={props.temperature}
        ></PropertyInfoSection>
      </div>
    </>
  );
};

export default Planet;
