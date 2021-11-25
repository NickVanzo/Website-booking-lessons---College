<template>
  <div class="alert alert-warning w-25 p-3 message" style="z-index: 10" v-if="show" role="alert" id="message">
    {{this.message}}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ['message'],
  data: function () {
    return {
      show: true
    }
  },
  mounted() {
    let self = this;
    setTimeout(function () {
      self.show = false
    }, 5000)
  }
}
</script>

<style scoped>
#message {
  position: absolute;
  top: 9%;
  right: 5%;
}
</style>