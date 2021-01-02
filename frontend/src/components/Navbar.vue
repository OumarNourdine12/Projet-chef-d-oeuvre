<template>
  <div>
                <div class="text-center">
        <img src="../../public/img/logo.jpeg" class="rounded m-2" alt="..." width="80%" height="400px" />
      </div> 
  <b-navbar toggleable="lg"  variant="info" class="bg-white">
    <b-navbar-brand href="#"> VIA </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
         <b-nav-item href="#">Nos Actions</b-nav-item>
          <b-nav-item href="#">Qui nous sommes ?</b-nav-item>
          <b-nav-item href="#"> Contact </b-nav-item>

       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          
          
        </b-nav-form>

       

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Users</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
           <b-dropdown-item href="#">SignIn / SignUp </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>




<script>
export default {
  name: "Navbar" ,
    
}
</script>


