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
    
    vm.check2 = false;
    vm.trigger2 = function(){
        if(vm.check2 == false){
            vm.check2 = true;
        }
        else{
            vm.check2 = false;
        }
    };
    
    vm.check3 = false;
    vm.trigger3 = function(){
        if(vm.check3 == false){
            vm.check3 = true;
        }
        else{
            vm.check3 = false;
        }
    };
   
})