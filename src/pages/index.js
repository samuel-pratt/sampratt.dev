import React from "react";
import {
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import {ProjectsSection} from "../sections/Projects/index"

export default function IndexPage() {
  return (
    <>
      <Seo title="Sam Pratt" />
      <Page>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="features" heading="Apps" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
