<template>
  <form @submit="trySubmit" class="d-flex flex-column p-3">
    <h3 class="pb-3">Add user</h3>
    <div class="form-group">
      <label>Username</label>
      <input v-model="form.username" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="form.email" type="text" class="form-control">
    </div>
    <button class="btn btn-primary"> Save </button>
  </form>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      form: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    trySubmit(e) {
      e.preventDefault();
      this.$http.post('https://http-vue-bb78e.firebaseio.com/user.json', this.form )
                .then( res => console.log(res) )
                .catch( err => console.log(res));
    }
  }
}
</script>

<style>

</style>
