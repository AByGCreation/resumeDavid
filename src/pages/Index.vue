<template>
  <Layout>
    <div class="container-fluid p-0">
      <About/>
        <hr class="m-0">
      <Experience/>
        <hr class="m-0">
      <Education/>
        <hr class="m-0">
      <Skills/>
        <hr class="m-0">
      <Interests/>
        <hr class="m-0">
      <Awards/>
        <hr class="m-0">
      <Blog/>
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Awards from "../components/Awards";
import Blog from "../components/Blog";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interests,
    Awards,
    Blog
  },
  metaInfo: {
    title: "CV de David RAMBEAU, detaillé",
    titleTemplate: "%s - Plus le reste..."
  }
};
</script>

<style lang="scss">
.subheading {
  //text-transform: uppercase;
  font-weight: 500;
  font-family: Avenir, "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}

.citation{
  font-style: italic;
}

.jobTitle{
  font-style: italic;
  font-size: 0.9em;
  text-align: right;
}
.jobNotation{
  float: left;
}

.logoSchool{
  float: left;
  height: 40px;
  width: 40px;
  background-size: contain;
  margin-right: 10px;
}
.logoCesi{
  background-image: url("../assets/images/LogoCesi.png");
}
.logoUL{
  background-image: url("../assets/images/LogoUL.png");
}
.logoBX{
  background-image: url("../assets/images/LogoBX.jpg");
  height:30px;
}
.fa-ul > li {
  display: flex;
  align-items: center;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
  color: var(--primary);
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: initial;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
