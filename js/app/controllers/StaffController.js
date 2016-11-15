angular
  .module('app')
  .controller("StaffController", StaffController)


function StaffController () {
  var vm = this;

  vm.name = "Whut"
  vm.email = "neeehneeeh"
  vm.phone = "555-6655"

  this.changename = function() {
    vm.name = 'Something cool!'
  }
}
