import React from "react";
import NamePlanet from "@/components/NamePlanet/NamePlanet";
import DescriptionPlanet from "@/components/DescriptionPlanet/DescriptionPlanet";
import PropertyInfoSection from "../PropertyInfoSection/PropertyInfoSection";
import ImgPlanet from "@/components/ImgPlanet/ImgPlanet";
import AdditionalInfoBtns from "@/components/AdditionalInfoBtns/AdditionalInfoBtns";
import SourceLink from "@/components/SourceLink/SourceLink";
import styles from "./Planet.module.css";
import InfoBtns1 from "../InfoBtns1/InfoBtns1";
import MenuBar from "../MenuBar/MenuBar";
import { useState } from "react";

// const [image, setImage] = useState("");

const Planet = (props) => {
  console.log(props);
  return (
    <>
      <div className={styles.planetCard}>
        <InfoBtns1></InfoBtns1>

        {/* <ImgPlanet image="/assets/planet-mercury.svg"></ImgPlanet> */}
        <ImgPlanet image={`https:${props.img}`}></ImgPlanet>

        <div className={styles.planetCardContent}>
          <div>
            <NamePlanet name={props.name}></NamePlanet>
            <DescriptionPlanet
              overview={props.overview}
              // structure={props.structure}
              // geology={props.geology}
            ></DescriptionPlanet>
            <SourceLink href={props.sourcelink}></SourceLink>
          </div>

          <div>
            <AdditionalInfoBtns></AdditionalInfoBtns>
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

      <MenuBar></MenuBar>
    </>
  );
};

export default Planet;
