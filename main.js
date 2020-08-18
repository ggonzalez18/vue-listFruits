const app = new Vue({
  el: '#app',
  data: {
    title: 'Bienvenido a Fruta virtual, Haz tu pedido',
    fruits: [
      {
        name: 'Manzana',
        stock: 10,
      },
      {
        name: 'Platano',
        stock: 13,
      },
      {
        name: 'Kiwi',
        stock: 18,
      },
      {
        name: 'Melones',
        stock: 7,
      }
    ],
    newFruit: "",
    stock: "",
  },
  methods: {
    addFruits() {
      this.fruits.push({
        name: this.newFruit,
        stock: this.stock
      })
      this.newFruit = ''
    }
  }
})