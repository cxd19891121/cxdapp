/**
 * Created by xiaodong chen on 4/17/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('jsNoteCtrl', jsNoteCtrl);

    jsNoteCtrl.$inject = [];
    function jsNoteCtrl() {
        var vm = this;
        vm.title = "Cxd Test";

        vm.panelControl = [];
        vm.togglePanel = togglePanel;
        vm.panels =[];
        initialController();



        function togglePanel(index){
            vm.panelControl[index] = !vm.panelControl[index];
        }

        function initialController(){
            vm.panelControl.push(false,false,false,false,false,false,false,false,false,false,false);

            // create a array
            vm.daysOfWeek = new Array();
            vm.daysOfWeek1 = new Array(7);
            vm.daysOfWeek2 = new Array("Mon","Tue","Wed","Thr","Fri","Sat","Sun");
            vm.daysOfWeek3 = [];
            vm.daysOfWeek4 = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"];

            //add and remove
            vm.numbers = [0,1,2,3,4,5];
            vm.numbers[vm.numbers.length] = 6;

            vm.numbers2 = [0,1,2,3,4,5,6];
            vm.numbers2.push(7,8,9,10);

            vm.numbers3 = [0,1,2,3,4,5];
            vm.numbers3.unshift(-2,-1);

            vm.numbers4 = [0,1,2,3,4,5];
            vm.numbers4.pop();

            vm.numbers5 = [0,1,2,3,4,5];
            vm.numbers5.shift();

            vm.numbers6 = ["a","b","c","d","e","f","g","h"];
            vm.numbers6.splice(0,1);
            vm.numbers6.splice(vm.numbers6.indexOf("g"));

            //concat
            var con1 = [1,2,3,4];
            var con2 = [-3,-2];
            var negOne = -1;
            vm.output0 = con2.concat(negOne,0,con1);

            //traverse
            var sampleArr = [-1,0,1];
            function largeThanZero(element, index, array){
                return element > 0;
            }
            vm.output1 = sampleArr.every(largeThanZero);
            vm.output2 = sampleArr.some(largeThanZero);
            vm.output3 = sampleArr.map(largeThanZero);
            vm.output4 = sampleArr.filter(largeThanZero);

            var sampleArr2 = [1,2,3];
            function plusHundred(element, index, array){
                array[index] = element + 100;
            }
            sampleArr2.forEach(plusHundred);
            vm.output5 = sampleArr2;

            //sort and indexOf
            var sampleArr3 = [
                {name: "Alice",math: 1, eng: 100},
                {name: "Bob",math: 100, eng: 1 },
                {name: "David",math: 8, eng: 8},
            ];
            function compareMath(a,b){
                if(a.math == b.math){
                    return 0;
                }
                return a.math > b.math ? 1 : -1;
            }
            vm.output6 = sampleArr3.sort(compareMath).reverse();

            var sampleArr4 = [1,0,0,0,0,1];
            vm.output7 = sampleArr4.indexOf(1);
            vm.output8 = sampleArr4.lastIndexOf(1);



        }



    }

})();
