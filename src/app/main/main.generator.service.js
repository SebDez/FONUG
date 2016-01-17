/**
 * This Service is used to generate the character
 * It use a factory to get datas (from localStorage, or api in next time)
 */
export class GeneratorService {
    constructor(LocalDataFactory) {
        'ngInject';
        this.localDataFactory = LocalDataFactory;
    }

    /**
     * Get all the ages labels
     * @param {String} gender The character gender
     * @return {String} The ages label to translate
     */
    getAges(gender) {
        return this.localDataFactory.getAges(gender);
    }

    /**
     * Get all the genders labels
     * @param {String} gender The character gender
     * @return {String} The genders label to translate
     */
    getGenders() {
        return this.localDataFactory.getGenders();
    }

    /**
     * Get all the civilizations labels
     * @param {String} gender The character gender
     * @return {String} The civilizations label to translate
     */
    getCivilizations(gender) {
        return this.localDataFactory.getCivilizations(gender);
    }


    /**
     * Get a random gender from list
     * @return {String} The gender to translate
     */
    getRandomGender() {
        let list = this.getGenders();
        let randIndex = this.getRandomIndexInTab(list);
        return list[randIndex];
    }

    /**
     * Get a random age from list
     * @param {String} gender The character's gender
     * @return {String} The age to translate
     */
    getRandomAge(gender) {
        let list = this.getAges(gender);
        let randIndex = this.getRandomIndexInTab(list);
        return list[randIndex];
    }

    /**
     * Get a random civilization from list
     * @param {String} gender The character's gender
     * @return {String} The civilization to translate
     */
    getRandomCivilization(gender) {
        let list = this.getCivilizations(gender);
        let randIndex = this.getRandomIndexInTab(list);
        return list[randIndex];
    }

    /**
     * Get an element label from a list according to its chance to be picked
     * @param [Object] elements The list of elements
     * @param {String} gender The gender's character (can be null)
     * @result {String} The element name to translate
     */
    getElementLabelFromListWithWeighting(elements, gender) {
        let randomList = [];
        let nb = 0;
        for (let element of elements) {
            if (element.weight) {
                nb = element.weight * 10;
            } else {
                nb = 1;
            }
            for (let i = 0; i < nb; i++) {
                if (gender) {
                    randomList.push(element.name[gender]);
                } else {
                    randomList.push(element.name);
                }
            }
        }
        let randIndex = this.getRandomIndexInTab(randomList);
        return randomList[randIndex];
    }


    /**
     * Get an element object from a list according to its chance to be picked
     * @param [Object] elements The list of elements
     * @param {String} gender The gender's character (can be null)
     * @result {String} The element object
     */
    getElementObjectFromListWithWeighting(elements) {
        let randomList = [];
        let nb = 0;
        for (let element of elements) {
            if (element.weight) {
                nb = element.weight * 10;
            } else {
                nb = 1;
            }
            for (let i = 0; i < nb; i++) {
                randomList.push(element);
            }
        }
        let randIndex = this.getRandomIndexInTab(randomList);
        return randomList[randIndex];
    }

    /**
     * Get a random index for an array
     * @param [Array] The array concerned
     * @return {Integer} The random index
     */
    getRandomIndexInTab(array) {
        return Math.floor(Math.random() * array.length);
    }

    /**
     * Get the character special sign
     * @param {String} gender The character's special sign
     * @result {String} The special sign label to translate
     */
    getSpecialSign(gender) {
        let tab = this.localDataFactory.getSpecialSignList();
        return this.getElementLabelFromListWithWeighting(tab, gender);
    }

    /**
     * Get the character alignment
     * @result {String} The alignment to translate
     */
    getAlignment() {
        let tab = this.localDataFactory.getAlignments();
        let randIndex = this.getRandomIndexInTab(tab);
        return tab[randIndex];
    }

    /**
     * Generate a name for a gender and a civilization (or use default)
     * @param {String} inputGender The character gender
     * @param {String} civilization The character civilization
     * @return {String} The name generated
     */
    generateName(inputGender, civilization) {
        let tab = this.localDataFactory.getNames();

        let civ = civilization;
        let gender = inputGender;
        if (!tab[civ]) {
            civ = "DEFAULT";
        }
        if (!gender || (gender != "MALE" && gender != "FEMALE")) {
            gender = "MALE";
        }

        let randIndexBegin = this.getRandomIndexInTab(tab[civ][gender]["beginning"]);
        let randIndexMiddle = this.getRandomIndexInTab(tab[civ][gender]["middle"]);
        let randIndexEnd = this.getRandomIndexInTab(tab[civ][gender]["end"]);


        let begin = tab[civ][gender]["beginning"][randIndexBegin];
        let middle = tab[civ][gender]["middle"][randIndexMiddle];
        let end = tab[civ][gender]["end"][randIndexEnd];

        return "" + begin + middle + end;
    }


    /**
     * Get the character charisma
     * @result {String} The charisma object
     */
    getCharisma() {
        let tab = this.localDataFactory.getCharismaList();
        return this.getElementObjectFromListWithWeighting(tab);
    }


    /**
     * Get the character beauty
     * @result {String} The beauty label to translate
     */
    getBeauty() {
        let tab = this.localDataFactory.getBeautyList();
        return this.getElementObjectFromListWithWeighting(tab);
    }


    /**
     * Get the character intellect
     * @result {String} The intellect label to translate
     */
    getIntellect() {
        let tab = this.localDataFactory.getIntellectList();
        return this.getElementObjectFromListWithWeighting(tab);
    }


    /**
     * Get the character
     * @result {String} The label to translate
     */
    getPerception() {
        let tab = this.localDataFactory.getPerceptionList();
        return this.getElementObjectFromListWithWeighting(tab);
    }


    /**
     * Get the character fight skills
     * @result {String} The label to translate
     */
    getFightSkills() {
        let tab = this.localDataFactory.getFightSkillsList();
        return this.getElementObjectFromListWithWeighting(tab);
    }


    /**
     * Get the character char class
     * @param {String} gender The character's gender
     * @result {String} The char class label to translate
     */
    getCharClass(gender) {
        let tab = this.localDataFactory.getCharClassList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character punch line
     * @result {String} The punch line label to translate
     */
    getPunchLine() {
        let tab = this.localDataFactory.getPunchLineList();

        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character corpulence
     * @param {String} gender The character's gender
     * @result {String} The corpulence label to translate
     */
    getCorpulence(gender) {
        let tab = this.localDataFactory.getCorpulenceList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character face shape
     * @param {String} gender The character's gender
     * @result {String} The face shape label to translate
     */
    getFaceShape(gender) {
        let tab = this.localDataFactory.getFaceShapeList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character skin tone
     * @param {String} gender The character's gender
     * @result {String} The skin tone label to translate
     */
    getSkinTone(gender) {
        let tab = this.localDataFactory.getSkinToneList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character eyes
     * @result {String} The eyes label to translate
     */
    getEyes() {
        let tab = this.localDataFactory.getEyesList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character mouth
     * @result {String} The mouth label to translate
     */
    getMouth() {
        let tab = this.localDataFactory.getMouthList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character nose
     * @result {String} The nose label to translate
     */
    getNose() {
        let tab = this.localDataFactory.getNoseList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character hair
     * @result {String} The hair label to translate
     */
    getHair() {
        let tab = this.localDataFactory.getHairList();
        return this.getElementLabelFromListWithWeighting(tab);
    }

    /**
     * Get the character goal
     * @result {String} The goal label to translate
     */
    getGoal() {
        let tab = this.localDataFactory.getGoalList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character motivation
     * @result {String} The motivation label to translate
     */
    getMotivation() {
        let tab = this.localDataFactory.getMotivationList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character defect
     * @param {String} gender The character's gender
     * @result {String} The defect label to translate
     */
    getDefect(gender) {
        let tab = this.localDataFactory.getDefectList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character quality
     * @param {String} gender The character's gender
     * @result {String} The quality label to translate
     */
    getQuality(gender) {
        let tab = this.localDataFactory.getQualityList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character phobia
     * @result {String} The phobia label to translate
     */
    getPhobia() {
        let tab = this.localDataFactory.getPhobiaList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character talent
     * @result {String} The talent label to translate
     */
    getTalent() {
        let tab = this.localDataFactory.getTalentList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character profession
     * @param {String} gender The character's gender
     * @result {String} The profession label to translate
     */
    getProfession(gender) {
        let tab = this.localDataFactory.getProfessionList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character family situation
     * @param {String} gender The character's gender
     * @param {String} age The character's age
     * @result {String} The family situation label to translate
     */
    getFamilySituation(gender, age) {
        let tab =[];
        if(age.indexOf('CHILD')>-1 || age.indexOf('ADOLESCENT')>-1){
            tab = this.localDataFactory.getFamilialSituationYoungList(); 
        }else{ 
            tab = this.localDataFactory.getFamilialSituationAdultList();
        }
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character financial situation
     * @result {String} The financial situation label to translate
     */
    getFinancialSituation() {
        let tab = this.localDataFactory.getFinancialSituationList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character accent
     * @result {String} The accent label to translate
     */
    getAccent() {
        let tab = this.localDataFactory.getAccentList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character reputation
     * @param {String} gender The character's gender
     * @result {String} The reputation label to translate
     */
    getReputation(gender) {
        let tab = this.localDataFactory.getReputationList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character combat style
     * @result {String} The combat style label to translate
     */
    getCombatStyle() {
        let tab = this.localDataFactory.getCombatStyleList();
        return this.getElementLabelFromListWithWeighting(tab);
    }

    /**
     * Get the character clothes
     * @param {String} gender The character's gender
     * @result {String} The clothes label to translate
     */
    getClothes(gender) {
        let tab = this.localDataFactory.getClothesList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }


    /**
     * Get the character accessories
     * @result {String} The accessories label to translate
     */
    getAccessories() {
        let tab = this.localDataFactory.getAccessoriesList();
        return this.getElementLabelFromListWithWeighting(tab);
    }


    /**
     * Get the character clothing style
     * @param {String} gender The character's gender
     * @result {String} The clothing style label to translate
     */
    getClothingStyle(gender) {
        let tab = this.localDataFactory.getClothingStyleList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }
    
    /**
     * Get the character clothing country
     * @result {String} The clothing country label to translate
     */
    getClothingCountry() {
        let tab = this.localDataFactory.getClothingCountryList();
        return this.getElementLabelFromListWithWeighting(tab);
    }

    /**
     * Get the character temper
     * @param {String} gender The character's gender
     * @result {String} The temper label to translate
     */
    getTemper(gender) {
        let tab = this.localDataFactory.getTemperList();
        return this.getElementLabelFromListWithWeighting(tab,gender);
    }
    
    
    /**
     * Get the character voice
     * @result {String} The voice label to translate
     */
    getVoice() {
        let tab = this.localDataFactory.getVoicesList();
        return this.getElementLabelFromListWithWeighting(tab);
    }

}
