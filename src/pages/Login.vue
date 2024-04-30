<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="row w-75">
      <div class="col-md-6 offset-md-3">
        <div class="card shadow">
          <div class="card-body p-5">
            <h2 class="text-center mb-4">Login Form</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label text-muted"><small>Username</small></label>
                <input type="text" class="form-control" id="username" v-model="username" placeholder="">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label text-muted"><small>Password</small></label>
                <input type="password" class="form-control" id="password" v-model="password" placeholder="">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe">
                <label class="form-check-label" for="rememberMe"><small>Remember me</small></label>
              </div>
              <div class="d-flex justify-content-between align-items-center p-3 mt-3 w-75 mx-auto">
                <button type="submit" class="btn btn-primary">Sign In</button>
                <a href="#" class="btn btn-secondary">Sign Up</a>
              </div>
            </form>
            <div class="text-center mt-3">
              <a href="#" class="text-decoration-none"><small>Forgot Password?</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    callRequest() {
      const data = {
        username: this.username, password: this.password
      }
      const url = "http://localhost:4000/api/users/login"

      return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res => {
          return res.json()
        })
        .then(res => {
          return res.accessToken
        })
    },
    login() {
      const login = Promise.resolve(this.callRequest())
      login.then(res => {
        if (res) {
          alert('Login Success.')
        } else {
          alert('Login failed.')
        }
      })
    }
  }
}
</script>