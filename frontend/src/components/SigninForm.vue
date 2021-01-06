<template>
  <div class="signin-form">
    <b-container>
      <b-row class="justify-content-md-conter" cols="10">
        <b-col style="margin-top: 25vh" cols="6">
          <h2>LOGIN</h2>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="User:" label-for="input-1">
              <b-form-input
              type="text"
                id="input-1"
                 v-model.trim="$v.email.$model"
                 :class="{ 'is-invalid': validationStatus($v.email) }"
                 class="form-control form-control-lg"
                
                required
                placeholder="Entre email"
              >
              </b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model.trim="$v.password.$model"
                :class="{ 'is-invalid': validationStatus($v.passsword) }"
                type="password"
                required
                placeholder="Entre Password"
              >
              </b-form-input>
            </b-form-group>

            <b-button type="submit" class="mr-4" variant="primary">
              Submit
            </b-button>
            <b-button type="rest" variant="danger"> Reset </b-button>
            <h6 class="tex_danger mt-4" v-if="con">INVALID USER OR PASSWORD</h6>
            <h6 class="mt-4">VILLAGE D'ICI ET D'AILLEURS</h6>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {required, email, minLength, maxLength} from "vuelidate/lib/validators";

export default {
  name: "SigninForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      con: false,
    };
  },
validations: {
   
   
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
   
  },


  methods: {

     validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
      


    }, 
    onSubmit(evt) {
      console.log("SUBMITED")
      evt.preventDefault();
       this.$v.$touch();
      console.log("TOUCHED")

      if (this.$v.$pendding || this.$v.$error) return;
      console.log("AFTER IF")
        var v = this;
        
         v.$http.post(`http://localhost:3000/SigninForm`, {
           email : this.email,
           password: this.password
          })
          .then(function(resp) {
          console.log("RESPONSE => ", resp.data)
           this.$router.push("/");
          })
          .catch(function(err) {
            console.log("CATCH")
            console.log(err)
          });


    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values

      this.form.user = "";
      this.form.password = "";
      this.con = false;
      //  reset/clear native broser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>