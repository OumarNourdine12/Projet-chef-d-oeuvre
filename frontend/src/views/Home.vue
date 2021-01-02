<template>
  <div>
    <Navbar />
    <Carroussel />
    <div class="container shadow p-3 mb-5 bg-white rounded mt-5 text-green">
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        modi eos nobis, aliquid minima accusamus in officia rem voluptates
        provident similique aliquam suscipit cupiditate iusto sapiente
        reprehenderit quasi doloremque labore?
      </h5>
      <h5>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid
        dolor voluptatibus minus provident? Vel nam qui alias! Saepe eveniet quo
        consectetur consequuntur officiis cumque beatae natus dolorum fugiat
        praesentium.
      </h5>
    </div>
    <div class="contrainer d-flex m-auto  w-100">
                <div class="text-center">
        <img src="../../public/img/sheeps.jpeg" class="rounded m-2" alt="..." width="400px" height="400px" />
      </div>

      <div class="text-center ">
        <img src="../../public/img/icon.jpeg" class="rounded m-2" alt="..." width="400px" height="400px" />
      </div> 
            <div class="text-center"> 
        <img src="../../public/img/sdf.jpeg" class="rounded m-2" alt="..." width="400px" height="400px" />  
      </div>
  
            <div class="text-center">
        <img src="../../public/img/statics.jpeg" class="rounded m-2" alt="..." width="400px" height="400px" />
      </div> 
    </div>
    <div class="contauner text-center">
      <button type="button" class="btn px-5 py-3 m-3 w-50" style="background-color: gray;">Faire un Don</button>
    </div>
  </div>
</template>






<script>
import Carroussel from "../components/Carroussel";
import Navbar from "../components/Navbar";
export default {
  name: "home",
  components: { Carroussel, Navbar },
};
</script>