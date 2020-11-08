const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue',
    frutas: [
      {nombre: 'pera',cantidad:10},
      {nombre: 'manzana',cantidad:0},
      {nombre: 'platano',cantidad:11}
    ],
    nomFruta: '',
    total: 0
    // cantFruta: '',
  },
  methods:{
    agregarFruta () {
      this.frutas.push({
        nombre: this.nomFruta,
        cantidad: 0
      });
      this.nomFruta = '';
      // this.cantFruta = '';
    }
  },
  computed:{
    sumarFrutas(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total = this.total + fruta.cantidad
      }
      return this.total;
    }
  }
})