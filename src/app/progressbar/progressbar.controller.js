export class ProgressBarController {

    constructor($state, $scope) {
        'ngInject';
        this.$state = $state;
        this.label=$scope.label;
        this.theme=$scope.theme;
        this.percentage=$scope.percentage;
    }


}
