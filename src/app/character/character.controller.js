export class CharacterController {

    constructor(GeneratorService, $state, $stateParams) {
        'ngInject';
        this.generatorService = GeneratorService;
        this.$stateParams=$stateParams;
        this.$state=$state;
        this.currentCharacter = this.$stateParams.currentCharacter;
        
        if(!this.currentCharacter){
            this.$state.go('home');
        }else{
            if(this.currentCharacter.gender==="GENERATOR.GENDERS.FEMALE"){
                this.currentCharacter.genderTag="FEMALE";
            }else{
                this.currentCharacter.genderTag="MALE";
            }
            this.generateCharacter();
        }
    }
    
    /**
    * Generate all character values
    */
    generateCharacter(){
       let gender=this.currentCharacter.genderTag; this.currentCharacter.physicalTrait=this.generatorService.getPhysicalTrait(gender);
    }
    
    /**
    * Return to main page
    */
    goToMain(){
        this.currentCharacter = null;
        this.$state.go('home');
    }
}