import React from "react";
import NamePlanet from "@/components/NamePlanet";
import DescriptionPlanet from "@/components/DescriptionPlanet";
import PropertyInfoSection from "@/components/PropertyInfoSection";
import ImgPlanet from "@/components/ImgPlanet";
import AdditionalInfoBtns from "@/components/AdditionalInfoBtns";
import SourceLink from "@/components/SourceLink";
import styles from "./Planet.module.css";

const Planet = () => {
  return (
    <>
      <div className={styles.planetCard}>
        <ImgPlanet image="/assets/planet-mercury.svg"></ImgPlanet>

        <div className={styles.planetCardContent}>
          <NamePlanet>Mercury</NamePlanet>
          <DescriptionPlanet
          // style={{ color: "pink" }}
          // onClick={function () {
          //   window.alert("hallo");
          // }}
          >
            blablablablablabla blablablablablabla blablablablablablabla
            blablablablablabla blablablablablabla blablablablablablabla
            blablablablablabla blablablablablabla blablablablablablabla
          </DescriptionPlanet>
          <SourceLink
            href="https://en.wikipedia.org/wiki/Mercury"
            icon="./assets/icon-source.svg"
          ></SourceLink>

          <div>
            <AdditionalInfoBtns></AdditionalInfoBtns>
          </div>
        </div>
      </div>

      <div>
        <PropertyInfoSection></PropertyInfoSection>
      </div>
    </>
  );
};

export default Planet;
