<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        <span class="text-italic">{{prenom}} </span>
        <span class="text-primary">{{nom}}</span>
      </h1>
      <div class="subheading mb-5">
        <a href="#"> {{status}}</a>
        <span class="text-italic"> <a
          href="mailto:david.rambeau@gmail.com"
        > - david.rambeau@gmail.com</a></span>
      </div>
      <p class="lead mb-5">{{descriptionw}} </p>


    </div>
  </section>
</template>

<script>


  module.exports = {
    data: function() {
      let dates = (new Date().getFullYear()-2005);
console.debug("AByG_ → "+dates);
      return {
        status:'Chef de projet',
        adress: 'Nancy → Grand EST → FRANCE',
        descriptionw: 'Avec '+dates +' années d\'experiences dans le milieu de l\'electronique industrielle que j\'ai pu me constituer une solide base de "competences" technique  pour répondre à des problematiques listées plus bas.',
        nom: 'RAMBEAU',
        prenom: 'David'
      }
    }
  }
</script>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
