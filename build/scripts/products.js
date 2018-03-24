app.controller('productsCtrl', function(){
    var vm = this;
    vm.check = false;
    vm.trigger = function(){
        if(vm.check == false){
            vm.check = true;
        }
        else{
            vm.check = false;
        }
    };
    console.log(vm.trigger);
})