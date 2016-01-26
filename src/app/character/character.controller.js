export class CharacterController {

    constructor(GeneratorService, $state, $stateParams, $document, $filter, $log, $timeout) {
        'ngInject';
        this.generatorService = GeneratorService;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.$document=$document;
        this.$filter=$filter;
        this.$log=$log;
        this.$timeout=$timeout;

        /** @type {Boolean}*/
        this.generatePhysical=$stateParams.generatePhysical;
        /** @type {Boolean}*/
        this.generateSocial=$stateParams.generateSocial;
        /** @type {Boolean}*/
        this.generateAppearance=$stateParams.generateAppearance;
        /** @type {Boolean}*/
        this.generatePersonality=$stateParams.generatePersonality;

        if (!this.$stateParams.currentCharacter) {
            this.$state.go('home');
        } else {
            this.currentCharacter = this.$stateParams.currentCharacter;
            this.setGenderTag();
            this.setCivilization();
            this.generateCharacter();
        }

        /** @type {Object} Div to save into PDF*/
        this.characDiv = document.getElementById("toSave");

        /** @type {Boolean} Used to undisplay the svg on pdf save*/
        this.isToSave={value:false};
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
    * Generate character Social
    * @param gender The character gender
    */
    generateCharacterSocial(gender) {
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

        //VOICE
        this.currentCharacter.voice = this.generatorService.getVoice();
    }

    /**
    * Generate character Personnality
    * @param gender The character gender
    */
    generateCharacterPersonnality(gender) {
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

        //TEMPER
        this.currentCharacter.temper = this.generatorService.getTemper(gender);
    }

    /**
    * Generate character Appearance
    * @param gender The character gender
    */
    generateCharacterAppareance(gender) {
        //CLOTHES
        this.currentCharacter.clothes = this.generatorService.getClothes(gender);

        //ACCESSORIES
        this.currentCharacter.accessories = this.generatorService.getAccessories();

        //CLOTHING STYLE
        this.currentCharacter.clothingStyle = this.generatorService.getClothingStyle(gender);

        //CLOTHING COUNTRY
        this.currentCharacter.clothingCountry = this.generatorService.getClothingCountry();

        //COMBAT STYLE
        this.currentCharacter.combatStyle = this.generatorService.getCombatStyle();
    }

    /**
    * Generate character Physical
    * @param gender The character gender
    */
    generateCharacterPhysical(gender) {
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

        //SPECIAL SIGN
        this.currentCharacter.specialSign = this.generatorService.getSpecialSign(gender);
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

        //GENERATE SOCIAL
        if(this.generateSocial){
            this.generateCharacterSocial(gender);
        }

        //GENERATE PERSONALITY
        if(this.generatePersonality){
            this.generateCharacterPersonnality(gender);
        }

        //GENERATE APPEARANCE
        if(this.generateAppearance){
            this.generateCharacterAppareance(gender);
        }

        //GENERATE PHYSICAL
        if(this.generatePhysical){
            this.generateCharacterPhysical(gender);
        }
    }

    /**
    * Create a PDF from HTML
    */
    createPDF(){
        this.isToSave.value=true;
        let pdf = new jsPDF('p','pt','a4');
        pdf.addHTML(this.characDiv,()=>{
            this.isToSave.value=false;
            if(!this.isToSave.value){
                this.$timeout(this.savePDF(pdf),100000);
            }
        });
    }

    /**
    * Save the PDF
    */
    savePDF(pdf){
        let name = this.currentCharacter.name;
        let civ = this.$filter('translate')(this.currentCharacter.civilization.name);
        let charclass=this.$filter('translate')(this.currentCharacter.charClass);
        pdf.save('FONUG_'+name+'_'+civ+'_'+charclass+'_.pdf');
    }

    /**
    * Reset the SVG into the logo div after the pdf has been catch
    */
    setSvgAgain(){
        return new Promise((resolve)=>{
            this.isToSave=false;
            resolve();
        });
    }

}
