<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-md-4 h1 header">Sign up</div>
            </div>
            <form  @submit.prevent="handleSubmit">
                <div class="row">
                    <div class="form-group col-xs-12 col-sm-6 col-md-6  inputMargin">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-validate="'required'" v-model="FName">
                        <div v-if="submitted && errors.has('FName')" class="invalid-feedback">{{ errors.first('FName') }}</div>
                    </div>
                    <div class="form-group col-xs-12 col-sm-6 col-md-6  inputMargin">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-validate="'required'" v-model="LName">
                        <div v-if="submitted && errors.has('LName')" class="invalid-feedback">{{ errors.first('LName') }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 col-sm-12 col-md-12 inputMargin">
                        <label>E-mail</label>
                        <input type="email" class="form-control" v-validate="'required|email'" v-model="email">
                        <div v-if="submitted && errors.has('FName')" class="invalid-feedback">{{ errors.first('FName') }}</div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-xs-12 col-sm-12 col-md-12 inputMargin">
                        <label>Username</label>
                        <input type="text" class="form-control" v-validate="'required'" v-model="username">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 col-sm-12 col-md-12 inputMargin">
                        <label for="">Password</label>
                        <input type="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" v-validate="{ required: true, min: 6 }" v-model="password">
                        <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 inputMargin">
                        <label for="">Confirm Password</label>
                        <input type="password" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12 col-sm-12 col-md-10">
                        <button type="submit" class="btn btn-primary btn-lg submitMargin" @click="validation()">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      FName: "",
      LName: "",
      email: "",
      username: "",
      password: "",
      conpassword:""
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
        }
      });
    },
    validation() {
        if(this.FName==''||this.LName==''||this.username==''){
            alert("nani refill your text");
        }
        if(this.password.length<6){
            alert("nani refill your number");
        }
        if(this.password!=this.conpassword){
            alert("nani refill your numberrrrrrrrrrrrrrrrr");
        }
    }
  }
};
</script>

<style>
.header {
  margin: 2% 0% 2% 0%;
}
.inputMargin {
  margin: 2% 0% 2% 0%;
}
</style>
