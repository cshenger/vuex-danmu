<template lang="html">
  <div class="main" :style="{ backgroundImage: bgImgUrl }">
    <section class="main_dan">
      <span-list v-for="lists in listArr" :lists="lists"></span-list>
    </section>
  </div>
</template>

<script>
import SpanList from './spanList.vue'
import bgImg from '../assets/img.jpg'

export default {
  name: 'board',
  data () {
    return {
      bgImgUrl: 'url(' + bgImg + ')',
      listArr: this.$store.state.listArr
    }
  },
  components: {
    SpanList
  }
}

function addMoveStyle () {
  let span = document.querySelectorAll('.main_dan span')
  let len = span.length

  for (let i = 0; i < len; i++) {
    span[i].setAttribute('class', '')
  }

  let j = 0
  let timer = null
  if (j < len) {
    timer = setInterval(function () {
      span[j].setAttribute('class', 'move')
      j++
      if (j === len) clearInterval(timer)
    }, 800)
  }
}

window.onload = function () {
  addMoveStyle()
}
</script>
