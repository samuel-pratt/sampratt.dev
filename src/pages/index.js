import React from "react";
import {
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Sam Pratt" />
      <Page>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
