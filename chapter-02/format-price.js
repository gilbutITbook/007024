var webstore = new Vue({
  el: '#app',
  data: { ... },
  filters: {
    formatPrice: function(price) {
      if (!parseInt(price)) { return ""; }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index+3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");	
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  }
});
