export default {
    data () {
      return {
        asyncDataLogin_ready: this.asyncDataLogin_ready()
      }
    },
    methods: {
      asyncDataLogin_ready() {
        const token = localStorage.get('token')
        if (token) {
          return true
        } else {
          return false
        }
      }
    }
  }
  