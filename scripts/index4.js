const app = new Vue({
  el: '#app',
  data: {
    titulo: 'soy el ciclo de vida de Vue'
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
})