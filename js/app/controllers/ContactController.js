angular
  .module('app')
  .controller("ContactController", ContactController)


function ContactController () {
  var vm = this;

  vm.name = "Whoa"
  vm.email = "nahnah"
  vm.phone = "555-1212"

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}
