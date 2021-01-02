<template>
  <div>
    
   
    <b-Carousel
      id="Carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1 px 2px #333"
    >
      <b-Carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluide w-100"
            style="height: 80vh !important"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/52/sans-abri-sdf-froid-getty-vicente-mendez.jpg"
            alt="image slot"
          >
        </template>
      </b-Carousel-slide>
      <b-Carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            style="height: 80vh !important"
            src="https://handicap-international.fr/sn_uploads/federation/news/024--.jpg?maxw=1110"
            alt="image slot"
          >
        </template>
      </b-Carousel-slide>
      <b-Carousel-slide>
        <template v-slot:img>

          <p class="text-center text-dark w-75 margin-auto" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias in repudiandae odio delectus sunt, praesentium reiciendis aut id commodi possimus. Magnam esse explicabo laboriosam veritatis quod, dolorum excepturi doloremque culpa.</p>
          <img
            class="d-block img-fluid w-100 position-relative"
            style="height: 80vh !important"
            src="https://media.istockphoto.com/photos/flock-of-sheeps-grazing-in-green-farm-in-new-zealand-picture-id1061151616"
            alt="image slot"
          > 
          
        </template>
      </b-Carousel-slide>
    </b-Carousel>

    
  </div>
</template>


<script>


export default {
  components: {
  
  },
    data(){
        return{
            slide: 0,

            sliding: null
        }
    },
    methods:{

    }
}
</script>


<style lang="less" scoped>

</style>