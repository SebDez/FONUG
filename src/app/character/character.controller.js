export class CharacterController {

    constructor(GeneratorService, $state, $stateParams) {
        'ngInject';
        this.generatorService = GeneratorService;
        this.$stateParams = $stateParams;
        this.$state = $state;

        if (!this.$stateParams.currentCharacter) {
            this.$state.go('home');
        } else {
            this.currentCharacter = this.$stateParams.currentCharacter;
            this.setGenderTag();
            this.setCivilization();
            this.generateCharacter();
        }
    }

    /**
     * Convert the civilizaiton get from main to json object
     */
    setCivilization() {
        if (this.currentCharacter.civilization != 'RANDOM') {
            let civ = angular.fromJson(this.currentCharacter.civilization);
            this.currentCharacter.civilization = civ;
        }
    }

    /**
     * Set the character gender tag
     */
    setGenderTag() {
            if (this.currentCharacter.gender === 'GENERATOR.GENDERS.FEMALE') {
                this.currentCharacter.genderTag = 'FEMALE';
            } else {
                this.currentCharacter.genderTag = 'MALE';
            }
        }
        /**
         * Generate all character values
         */
    generateCharacter() {
        //GENDER
        if (this.currentCharacter.gender === 'RANDOM') {
            this.currentCharacter.gender = this.generatorService.getRandomGender();
        }
        this.setGenderTag();
        let gender = this.currentCharacter.genderTag;

        //AGE
        if (this.currentCharacter.age === 'RANDOM') {
            this.currentCharacter.age = this.generatorService.getRandomAge(gender);
        }

        //CIVILIZATION
        if (this.currentCharacter.civilization === 'RANDOM') {
            this.currentCharacter.civilization = this.generatorService.getRandomCivilization(gender);
        }

        //SPECIAL SIGN BODY
        this.currentCharacter.specialSignBody = this.generatorService.getSpecialSignBody(gender);

        //ALIGNMENT
        this.currentCharacter.alignment = this.generatorService.getAlignment();

        //NAME
        this.currentCharacter.name = this.generatorService.generateName(this.currentCharacter.genderTag, this.currentCharacter.civilization.tag);

        //CHARISMA
        this.currentCharacter.charisma = this.generatorService.getCharisma(gender);
        
        //BEAUTY
        this.currentCharacter.beauty = this.generatorService.getBeauty(gender);
        
        //INTELLECT
        this.currentCharacter.intellect = this.generatorService.getIntellect(gender);
        
        
        //PERCEPTION
        this.currentCharacter.perception = this.generatorService.getPerception(gender);
        
        
        //FIGHT SKILLS
        this.currentCharacter.fightSkills = this.generatorService.getFightSkills(gender);
        
        
        //CLASS
        this.currentCharacter.charClass = this.generatorService.getCharClass(gender);
        
        
        //PUNCHLINE
        this.currentCharacter.punchline = this.generatorService.getPunchLine(gender);
        
        
        //CORPULENCE
        this.currentCharacter.corpulence = this.generatorService.getCorpulence(gender);
        
        
        //FACE SHAPE
        this.currentCharacter.faceShape = this.generatorService.getFaceShape(gender);
        
        
        //SKIN TONE
        this.currentCharacter.skinTone = this.generatorService.getSkinTone(gender);
        
        
        //EYES
        this.currentCharacter.eyes = this.generatorService.getEyes(gender);
        
        
        //MOUTH
        this.currentCharacter.mouth = this.generatorService.getMouth(gender);
        
        
        //NOSE
        this.currentCharacter.nose = this.generatorService.getNose(gender);
        
        
        //HAIR
        this.currentCharacter.hair = this.generatorService.getHair(gender);
        
        
        //SPECIAL SIGN FACE
        this.currentCharacter.specialSignFace = this.generatorService.getSpecialSignFace(gender);
    
        
        //GOAL
        this.currentCharacter.goal = this.generatorService.getGoal(gender);
        
        
        //MOTIVATION
        this.currentCharacter.motivation = this.generatorService.getMotivation(gender);
        
        
        //DEFECT
        this.currentCharacter.defect = this.generatorService.getDefect(gender);
        
        
        //QUALITY
        this.currentCharacter.quality = this.generatorService.getQuality(gender);
        
        
        //PHOBIA
        this.currentCharacter.phobia = this.generatorService.getPhobia(gender);
        
        
        //TALENT
        this.currentCharacter.talent = this.generatorService.getTalent(gender);
        
        
        //PROFESSION
        this.currentCharacter.profession = this.generatorService.getProfession(gender);
        
        
        //FAMILY SITUATION
        this.currentCharacter.familySituation = this.generatorService.getFamilySituation(gender);
        
        
        //FINANCIAL SITUATION
        this.currentCharacter.financialSituation = this.generatorService.getFinancialSituation(gender);
        
        
        //ACCENT
        this.currentCharacter.accent = this.generatorService.getAccent(gender);
        
        
        //REPUTATION
        this.currentCharacter.reputation = this.generatorService.getReputation(gender);
        
        
        //COMBAT STYLE
        this.currentCharacter.combatStyle = this.generatorService.getCombatStyle(gender);
        
        
        //CLOTHES
        this.currentCharacter.clothes = this.generatorService.getClothes(gender);
        
        
        //ACCESSORIES
        this.currentCharacter.accessories = this.generatorService.getAccessories(gender);
        
        
        //CLOTHING STYLE
        this.currentCharacter.clothingStyle = this.generatorService.getClothingStyle(gender);
         
        
        //TEMPER
        this.currentCharacter.temper = this.generatorService.getTemper(gender);       
        
    }
    
    /**
    * Get an element name from an object
    * @param {Object} element The element concerned
    * @return {String} The label to translate
    */
    getLabelFromElementObject(element){
        if(this.currentCharacter.genderTag==='MALE'){
            return element.name.MALE;
        }else if(this.currentCharacter.genderTag==='FEMALE'){
            return element.name.FEMALE;
        }
    }

}