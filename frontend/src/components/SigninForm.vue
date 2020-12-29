<template>
  <form id="signin-form" v-on:submit.prevent="submit">
    <div class="row">
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Email <span class="text-danger">*</span></label
        >
        <input
          type="email"
          v-model.trim="$v.email.$model"
          :class="{ 'is-invalid': validationStatus($v.email) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.email.required" class="invalid-feedback">
          The email field is required.
        </div>
        <div v-if="!$v.email.email" class="invalid-feedback">
          The email is not valid.
        </div>
      </div>

      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Password <span class="text-danger">*</span></label
        >
        <input
          type="password"
          v-model.trim="$v.password.$model"
          :class="{ 'is-invalid': validationStatus($v.password) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.password.required" class="invalid-feedback">
          The password field is required.
        </div>
        <div v-if="!$v.password.minLength" class="invalid-feedback">
          You must have at least
          {{ $v.password.$params.minLength.min }} letters.
        </div>
        <div v-if="!$v.password.maxLength" class="invalid-feedback">
          You must not have greater then
          {{ $v.password.$params.maxLength.min }} letters.
        </div>
      </div>
    </div>
  </form>
</template>



<script>
import axios from "axios";
import jwt from "jsonwebtoken";

export default {
  name: "SignIn",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:3000/SignIn", this.form)
        .then( async(response) => {
        localStorage.setItem("jwt", response.data);
    

          this.form = response;
        

          // alert(JSON.stringify(this.form))
          // this.$router.push('/')

          var decode = await jwt.decode(response.data);
         await localStorage.setItem("decodetoken", decode)
          console.log('decode isdmin=')
          console.log(decode.is_admin);
          if (decode.is_admin == 1) {
            this.$router.push("/");
          } else {
            this.$router.push("/");
          }
        })

        .catch(function (error) {
          console.log(error.response.data);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


<style scoped>
</style>