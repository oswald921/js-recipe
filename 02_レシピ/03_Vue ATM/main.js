Vue.createApp({
  data() {
    return {
      inputValue: "",
      count: 0,
    }
  },
  methods: {
    DepositButton: function () {
      let depositValue = document.getElementById("money").value
      this.count += depositValue
    },
    WithdrawButton: function () {
      let depositValue = document.getElementById("money").value
      this.count -= depositValue
    },
  },
}).mount("#nyuryoku")
