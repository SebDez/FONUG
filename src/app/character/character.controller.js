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

        //SPECIAL SIGN
        this.currentCharacter.specialSign = this.generatorService.getSpecialSign(gender);

        //ALIGNMENT
        this.currentCharacter.alignment = this.generatorService.getAlignment();

        //NAME
        this.currentCharacter.name = this.generatorService.generateName(this.currentCharacter.genderTag, this.currentCharacter.civilization.tag);

        //CHARISMA
        this.currentCharacter.charisma = this.generatorService.getCharisma();
        
        //BEAUTY
        this.currentCharacter.beauty = this.generatorService.getBeauty();
        
        //INTELLECT
        this.currentCharacter.intellect = this.generatorService.getIntellect();
        
        
        //PERCEPTION
        this.currentCharacter.perception = this.generatorService.getPerception();
        
        
        //FIGHT SKILLS
        this.currentCharacter.fightSkills = this.generatorService.getFightSkills();
        
        
        //CLASS
        this.currentCharacter.charClass = this.generatorService.getCharClass(gender);
        
        
        //PUNCHLINE
        this.currentCharacter.punchline = this.generatorService.getPunchLine();
        
        
        //CORPULENCE
        this.currentCharacter.corpulence = this.generatorService.getCorpulence(gender);
        
        
        //FACE SHAPE
        this.currentCharacter.faceShape = this.generatorService.getFaceShape(gender);
        
        
        //SKIN TONE
        this.currentCharacter.skinTone = this.generatorService.getSkinTone(gender);
        
        
        //EYES
        this.currentCharacter.eyes = this.generatorService.getEyes();
        
        
        //MOUTH
        this.currentCharacter.mouth = this.generatorService.getMouth(gender);
        
        
        //NOSE
        this.currentCharacter.nose = this.generatorService.getNose();
        
        
        //HAIR
        this.currentCharacter.hair = this.generatorService.getHair();
        
        
        //GOAL
        this.currentCharacter.goal = this.generatorService.getGoal();
        
        
        //MOTIVATION
        this.currentCharacter.motivation = this.generatorService.getMotivation();
        
        
        //DEFECT
        this.currentCharacter.defect = this.generatorService.getDefect(gender);
        
        
        //QUALITY
        this.currentCharacter.quality = this.generatorService.getQuality(gender);
        
        
        //PHOBIA
        this.currentCharacter.phobia = this.generatorService.getPhobia();
        
        
        //TALENT
        this.currentCharacter.talent = this.generatorService.getTalent();
        
        
        //PROFESSION
        this.currentCharacter.profession = this.generatorService.getProfession(gender);
        
        
        //FAMILY SITUATION
        this.currentCharacter.familySituation = this.generatorService.getFamilySituation(gender,this.currentCharacter.age);
        
        
        //FINANCIAL SITUATION
        this.currentCharacter.financialSituation = this.generatorService.getFinancialSituation();
        
        
        //ACCENT
        this.currentCharacter.accent = this.generatorService.getAccent();
        
        
        //REPUTATION
        this.currentCharacter.reputation = this.generatorService.getReputation(gender);
        
        
        //COMBAT STYLE
        this.currentCharacter.combatStyle = this.generatorService.getCombatStyle();
        
        
        //CLOTHES
        this.currentCharacter.clothes = this.generatorService.getClothes(gender);
        
        
        //ACCESSORIES
        this.currentCharacter.accessories = this.generatorService.getAccessories();
        
        
        //CLOTHING STYLE
        this.currentCharacter.clothingStyle = this.generatorService.getClothingStyle(gender);
        
        
        //CLOTHING COUNTRY
        this.currentCharacter.clothingCountry = this.generatorService.getClothingCountry();
         
        
        //TEMPER
        this.currentCharacter.temper = this.generatorService.getTemper(gender);   
        
        
        //VOICE
        this.currentCharacter.voice = this.generatorService.getVoice();   
        
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