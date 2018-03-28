(function() {
    'use strict';

    angular.module('myApp.mini', ['ngMaterial'])
        .controller('AnimationCtrl', AnimationCtrl)
        .controller('DialogCtrl', DialogCtrl);

    function AnimationCtrl($mdPanel) {
        this._mdPanel = $mdPanel;
        this.openFrom = 'button';
        this.closeTo = 'button';
        this.animationType = 'scale';
        this.duration = 300;
        this.separateDurations = {
            open: this.duration,
            close: this.duration
        };
    }

    AnimationCtrl.prototype.showDialog = function() {
        var position = this._mdPanel.newPanelPosition()
            .absolute()
            .right()
            .top();

        var animation = this._mdPanel.newPanelAnimation();

        animation.duration(this.duration || this.separateDurations);
        animation.openFrom('.animation-target');
        animation.closeTo('.animation-target');
        animation.withAnimation(this._mdPanel.animation.SLIDE);

        var config = {
            animation: animation,
            attachTo: angular.element(document.body),
            controller: DialogCtrl,
            controllerAs: 'ctrl',
            templateUrl: 'app/directives/miniCart/miniTemplate.html',
            panelClass: 'demo-dialog-example',
            position: position,
            trapFocus: true,
            zIndex: 150,
            clickOutsideToClose: true,
            clickEscapeToClose: true,
            hasBackdrop: true,
        };

        this._mdPanel.open(config);
    };

// Necessary to pass locals to the dialog template.
    function DialogCtrl(mdPanelRef) {
        this._mdPanelRef = mdPanelRef;
    }

    DialogCtrl.prototype.closeDialog = function() {
        this._mdPanelRef && this._mdPanelRef.close();
    };

})();