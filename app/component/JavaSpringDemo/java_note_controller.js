/**
 * Created by xiaodong chen on 2/20/2017.
 */

(function () {
    'use strict';

    angular
        .module('cxdApp')
        .controller('javaNoteCtrl', javaNoteCtrl);

    javaNoteCtrl.$inject = ['ajaxService','$stateParams'];

    function javaNoteCtrl(ajaxService ,$stateParams) {

        var vm = this;
        vm.note = {};
        vm.newNote = {};

        (function initController() {
            var id = $stateParams.id;
            console.log("note stateParams: ",id);
            ajaxService.javaGetNoteById(id).then(function(noteData){
                vm.note = noteData;
            })
        })();

        vm.updateNote = function (){
            console.log("update note");
            ajaxService.javaUpdateNote(vm.note).then(
                function(o){
                    console.log(o);
                }
            )
        }
    }

})();
