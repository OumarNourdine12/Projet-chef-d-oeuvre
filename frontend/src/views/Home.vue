<template>
  <div>
    <Navbar />
    <Carroussel />
  </div>
</template>






<script>
import Carroussel from "../components/Carroussel"
import Navbar from "../components/Navbar"
export default {
  name: "home",
  components: { Carroussel, Navbar },
};
</script>