export class CharacterController {

    constructor(GeneratorService, $state, $stateParams) {
        'ngInject';
        this.generatorService = GeneratorService;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.currentCharacter = this.$stateParams.currentCharacter;

        if (!this.currentCharacter) {
            this.$state.go('home');
        } else {
            this.setGenderTag();
            this.generateCharacter();
        }
    }

    /**
    * Set the character gender tag
    */
    setGenderTag(){
        if (this.currentCharacter.gender === "GENERATOR.GENDERS.FEMALE") {
                this.currentCharacter.genderTag = "FEMALE";
            } else {
                this.currentCharacter.genderTag = "MALE";
            }
    }
    /**
     * Generate all character values
     */
    generateCharacter() {
        //GENDER
        if(this.currentCharacter.gender==="RANDOM"){
            this.currentCharacter.gender=this.generatorService.getRandomGender();
        }
        this.setGenderTag();
        let gender = this.currentCharacter.genderTag;
        
        //AGE
        if(this.currentCharacter.age==="RANDOM"){
            this.currentCharacter.age=this.generatorService.getRandomAge(gender);
        }
        
        //CIVILIZATION
        if(this.currentCharacter.civilization==="RANDOM"){
 this.currentCharacter.civilization=this.generatorService.getRandomCivilization(gender);
        }
        
        //PHYSICAL TRAIT
 this.currentCharacter.physicalTrait=this.generatorService.getPhysicalTrait(gender);
    }

    /**
     * Return to main page
     */
    goToMain() {
        this.currentCharacter = null;
        this.$state.go('home');
    }
}