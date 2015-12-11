export class MainController {

    constructor(GeneratorService,$state) {
        
        'ngInject';
        this.$state = $state;
        this.generatorService = GeneratorService;
        this.currentCharacter = null;
        this.ages = null;
        this.genders = null;
        this.civilizations = null;
        this.modeChoice='init';
        this.notRandom=false;
        this.initGenerator();
        
        this.btnRandClass="md-raised";
        this.btnPersoClass="md-raised";
        this.btnGenerateIsDisabled=true;
        
        this.changeSelectedMode(this.notRandom);
    }

    /**
     * Change the GENDER attribute in current character values to match
     * to the selected gender.
     */
    updateCharacterFromGender() {
        let newGender = this.currentCharacter.gender.replace("GENERATOR.GENDERS.", "");
        let oldGender = null;
        if (newGender === "MALE") {
            oldGender = "FEMALE";
        } else {
            oldGender = "MALE";
        }

        this.currentCharacter.civilization = this.currentCharacter.civilization.replace(oldGender, newGender);
        this.currentCharacter.age = this.currentCharacter.age.replace(oldGender, newGender);
    }

    /**
     * Update the select lists according to the user choices
     */
    updateSelectListsAccordingToGender() {

        //UPDATE THE CIVILIZATIONS & AGES LABELS ACCORDING TO THE GENDER
        if (this.currentCharacter && !(this.currentCharacter.gender === "RANDOM")) {
            let genderChose = (this.currentCharacter.gender === "GENERATOR.GENDERS.MALE") ? "MALE" : "FEMALE";
            this.civilizations = this.generatorService.getCivilizations(genderChose);
            this.ages = this.generatorService.getAges(genderChose);
        } else {
            this.civilizations = this.generatorService.getCivilizations("MALE");
            this.ages = this.generatorService.getAges("MALE");
        }

        //UPDATE CHARACTER FIELDS
        this.updateCharacterFromGender();
    }

    /**
     * Initialize the generator by setting
     * Some values for the currentCharacter
     * The select lists
     */
    initGenerator() {
        this.genders = this.generatorService.getGenders();
        this.civilizations = this.generatorService.getCivilizations("MALE");
        this.ages = this.generatorService.getAges("MALE");

        this.currentCharacter = {
            age: "RANDOM",
            gender: "RANDOM",
            civilization: "RANDOM"
        };
    }
    
    
    /**
    * Go the generator state with selected init values
    */
    generate(){
         this.$state.go('generated',   { currentCharacter: this.currentCharacter });
    }
    
    
    /**
    * Altern between 'random' mode and 'personalize' mode
    * @param {Boolean} val True if personnalize, false for random
    */
    changeSelectedMode(val){
        if(val==='notRandom'){
            this.notRandom =true;
            this.btnRandClass="md-raised";
            this.btnPersoClass="md-raised md-primary";
            this.btnGenerateIsDisabled=false;
        }else if(val==='rand'){
            this.notRandom =false;
            this.btnRandClass="md-raised md-primary";
            this.btnPersoClass="md-raised";
            this.btnGenerateIsDisabled=false;
        }else{
            this.notRandom =false;
            this.btnRandClass="md-raised";
            this.btnPersoClass="md-raised";
            this.btnGenerateIsDisabled=true;
        }
    }

}