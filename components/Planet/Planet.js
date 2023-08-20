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

const Planet = () => {
  return (
    <>
      <div className={styles.planetCard}>
        <InfoBtns1></InfoBtns1>

        <ImgPlanet image="/assets/planet-mercury.svg"></ImgPlanet>

        <div className={styles.planetCardContent}>
          <div>
            <NamePlanet>Mercury</NamePlanet>
            <DescriptionPlanet>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DescriptionPlanet>
            <SourceLink
              href="https://en.wikipedia.org/wiki/Mercury"
              icon="./assets/icon-source.svg"
            ></SourceLink>
          </div>

          <div>
            <AdditionalInfoBtns></AdditionalInfoBtns>
          </div>
        </div>
      </div>
      <div>
        <PropertyInfoSection></PropertyInfoSection>
      </div>

      <MenuBar></MenuBar>
    </>
  );
};

export default Planet;
