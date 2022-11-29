<template>
    <v-app>
      <div class="login"></div>
      <v-main class="d-flex  justify-center align-center">
        <v-col cols="10" lg="6" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <v-avatar size="100" color="indigo lighten-4">
                <v-icon size="40" color="indigo">mdi-account</v-icon>
              </v-avatar>
              <h2 class="indigo--text">Vue login Page</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  prepend-inner-icon="mdi-account"
                  required
                />
                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :type="passwordShow?'text':'password'"
                        label="Password"
                        placeholder="Password"
                        prepend-inner-icon="mdi-key"
                        :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow"
                        required
                />
                <v-switch label="Remember me" color="indigo"></v-switch>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="indigo">
                  <span class="white--text px-8">Login</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
      <v-snackbar top color="green" v-model="snackbar">
        Login success
      </v-snackbar>
    </v-app>
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
  
    data: () => ({
      loading:false,
      snackbar:false,
      passwordShow:false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail es valido',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Contraseña requeria',
        v => (v && v.length >= 6) || 'la contraseña debe de tener mas de 6 caracteres!',
      ],
    }),
    methods:{
      submitHandler(){
        if (this.$refs.form.validate()){
            this.loading = true
          setTimeout(()=> {
            this.loading = false
            this.snackbar = true
          },3000)
        }
      }
    }
  };
  </script>
  <style>
    .backgruond{
      background-image: url(../assets/logo.png) !important;
      height: 300px;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      background-size: cover;
    }
  </style>