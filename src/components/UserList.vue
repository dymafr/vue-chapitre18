<template>
  <div>
    <h3>User list : </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users" :key="index"><pre>{{ user }}</pre></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: ['users']
}
</script>

<style>

</style>
