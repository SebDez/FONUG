export class PersonalityDirectiveController {
    
    constructor($state,$scope) {
        'ngInject';
        
        this.$state = $state;
        this.$scope = $scope;
        this.character = $scope.character;
    }
}