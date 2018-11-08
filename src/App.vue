<template>
  <div id="app" class="container p-5">
    <app-add-user></app-add-user>
    <br /><br />
    <app-user-list :users="users" ></app-user-list>
  </div>
</template>

<script>
import AppAddUser from './components/AddUser';
import AppUserList from './components/UserList';


export default {
  name: 'app',
  components: {
    AppAddUser,
    AppUserList
  },
  data() {
    return {
      users: {}
    }
  },
  created() {
    this.$http.get('/user.json')
              .then( res => { 
                console.log(res) 
                this.users = res.data;
              })
              .catch( err => console.log(err));

  }
}
</script>

<style>

</style>
