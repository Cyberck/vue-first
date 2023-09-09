

const app = {
  data() {
    return {
      count: 0,
      holder: 'Ukajite chto to',
      show: true,
      text: '',
      open: true,
      activeColor: 'green'
    }
  },
  methods: {
    addCount() {
      this.count++
      console.log(1);
    }
  }
}



Vue.createApp(app).mount('#app')


