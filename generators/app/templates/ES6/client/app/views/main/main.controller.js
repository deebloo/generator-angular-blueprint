'use strict';

class MainCtrl {
  constructor(isActive) {
    var vm = this;

    vm.isActive = isActive;
  }
}

MainCtrl.$inject = ['isActive'];

export default MainCtrl;
