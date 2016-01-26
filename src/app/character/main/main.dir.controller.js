export class MainDirectiveController {

    constructor($state,$scope, $filter) {
        'ngInject';

        this.$state = $state;
        this.$scope = $scope;
        this.$filter=$filter;
        this.character = $scope.character;
        this.isToSave = $scope.istosave;

        /** @type {String} */
        this.beautyLabel;
        /** @type {String} */
        this.charismaLabel;
        /** @type {String} */
        this.perceptionLabel;
        /** @type {String} */
        this.intellectLabel;
        /** @type {String} */
        this.fightSkillsLabel;

        this.setLabelsForProgressBar();
    }

    /**
    * Get an element name from an object
    */
    setLabelsForProgressBar(){
        this.setBeautyLabel();
        this.setCharismaLabel();
        this.setPerceptionLabel();
        this.setIntellectLabel();
        this.setFightSkillsLabel();
    }

    /**
    * Get an element translation
    * @param {Object} element The element concerned
    * @return {String} The label translated
    */
    getElementTrans(element){
        return this.$filter('translate')(this.getLabelFromElementObject(element));
    }

    /**
    * Set Beauty label translated
    */
    setBeautyLabel(){
        this.beautyLabel= this.getElementTrans(this.character.beauty);
    }

    /**
    * Set Charisma label translated
    */
    setCharismaLabel(){
        this.charismaLabel=this.getElementTrans(this.character.charisma);
    }

    /**
    * Set Perception label translated
    */
    setPerceptionLabel(){
        this.perceptionLabel= this.getElementTrans(this.character.perception);
    }

    /**
    * Set Intellect label translated
    */
    setIntellectLabel(){
        this.intellectLabel= this.getElementTrans(this.character.intellect);
    }

    /**
    * Set Fight Skills label translated
    */
    setFightSkillsLabel(){
        this.fightSkillsLabel= this.getElementTrans(this.character.fightSkills);
    }

    /**
    * Get an element name from an object
    * @param {Object} element The element concerned
    * @return {String} The label to translate
    */
    getLabelFromElementObject(element){
        if(this.character.genderTag==='MALE'){
            return element.name.MALE;
        }else if(this.character.genderTag==='FEMALE'){
            return element.name.FEMALE;
        }
    }
}
