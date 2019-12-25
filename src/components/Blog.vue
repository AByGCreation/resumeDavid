<template>
    <div v-on:click.prevent="$scrollTo('#blog')" class="navbar-brand">
        <span class="d-block d-lg-none">David RAMBEAU</span>
        <span class="d-none d-lg-block">
        <g-image
                alt="Avatar"
                src="../assets/images/pictureAvatar.jpg"
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span>
    </div>
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style scoped>

</style>