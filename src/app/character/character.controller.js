export class CharacterController {

    constructor(GeneratorService, $state, $stateParams) {
        'ngInject';
        this.generatorService = GeneratorService;
        this.$stateParams=$stateParams;
        this.$state=$state;
        this.currentCharacter = this.$stateParams.currentCharacter;
        
        if(!this.currentCharacter){
            this.$state.go('home');
        }
    }
    
    
    goToMain(){
        this.currentCharacter = null;
        this.$state.go('home');
    }
}