export class MainDirectiveController {

    constructor($state,$scope, $filter) {
        'ngInject';

        this.$state = $state;
        this.$scope = $scope;
        this.$filter=$filter;
        this.character = $scope.character;
        this.isToSave = $scope.istosave;

        /** @type {Object} */
        this.beautyLabel={};
        /** @type {Object} */
        this.charismaLabel={};
        /** @type {Object} */
        this.perceptionLabel={};
        /** @type {Object} */
        this.intellectLabel={};
        /** @type {Object} */
        this.fightSkillsLabel={};

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
        this.beautyLabel.value= this.getElementTrans(this.character.beauty);
    }

    /**
    * Set Charisma label translated
    */
    setCharismaLabel(){
        this.charismaLabel.value=this.getElementTrans(this.character.charisma);
    }

    /**
    * Set Perception label translated
    */
    setPerceptionLabel(){
        this.perceptionLabel.value= this.getElementTrans(this.character.perception);
    }

    /**
    * Set Intellect label translated
    */
    setIntellectLabel(){
        this.intellectLabel.value= this.getElementTrans(this.character.intellect);
    }

    /**
    * Set Fight Skills label translated
    */
    setFightSkillsLabel(){
        this.fightSkillsLabel.value= this.getElementTrans(this.character.fightSkills);
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
