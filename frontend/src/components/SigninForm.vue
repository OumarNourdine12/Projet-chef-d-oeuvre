<template>
  <div class="signin-form">
    <b-container>
      <b-row class="justify-content-md-conter" cols="10">
        <b-col style="margin-top: 25vh" cols="6">
          <h2>LOGIN</h2>
          <b-form @submit="onSubmit" @reset="onReset" v-f="show">
            <b-form-groupe id="input-group-1" label="User:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.user"
                type="text"
                required
                placeholder="Entre User"
              >
              </b-form-input>
            </b-form-groupe>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
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
export default {
  name: "SigninForm",
  data() {
    return {
      form: {
        user: "",
        password: "",
      },
      show: true,
      con: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.user == "admin" && this.form.password == "123456") {
        this.$router.push("/");
      } else {
        this.con = true;
      }
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