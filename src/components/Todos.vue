<template>
  <div>
      <h3>Tod  </h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
name:"Todos",
computed:mapGetters(['allTodos'])
}
</script>

<style>

</style>