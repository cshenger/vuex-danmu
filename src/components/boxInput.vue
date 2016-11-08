<template lang="html">
  <form class="prompt" @submit="addText">
    <input id="tcval" type="text" placeholder="吐槽一下！" @keyup="isHaveText" />
    <button type="button" id="tclbtn" :disabled="!isDisabled">吐槽</button>
  </form>
</template>

<script>
  export default {
    name: 'boxInput',
    data () {
      return {
        isDisabled: false
      }
    },
    methods: {
      addText (e) {
        e.preventDefault()
        let tcvalText = document.getElementById('tcval').value.trim()
        if (tcvalText !== '') {
          this.$store.commit('addText', { tcvalText })
          document.getElementById('tcval').value = ''
          document.getElementById('tclbtn').setAttribute('disabled', true)
        }
      },
      isHaveText () {
        document.getElementById('tcval').value.trim() === '' ? this.isDisabled = false : this.isDisabled = true
      }
    }
  }
</script>
