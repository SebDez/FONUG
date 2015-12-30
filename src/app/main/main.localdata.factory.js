import SpecialSignBody from '../elements/SpecialSignBody';
import Civilizations from '../elements/Civilizations';
import Alignments from '../elements/Alignments';
import Names from '../elements/Names';
import Charisma from '../elements/Charisma';
import Beauty from '../elements/Beauty';
import Intellect from '../elements/Intellect';
import Perception from '../elements/Perception';
import FightSkills from '../elements/FightSkills';
import Goals from '../elements/Goals';
import Defects from '../elements/Defects';
import Qualities from '../elements/Qualities';

/**
 * This Factory is used to get datas for the generator
 * It could be replace by an api in the future
 */
export class LocalDataFactory {
    constructor() {
        'ngInject';

        this.notSet = [{
            'name': {
                'MALE': 'VIEWS.GENERATOR.SOON',
                'FEMALE': 'VIEWS.GENERATOR.SOON'
            }
        }];
    }


    /**
     * Get all the ages labels
     * @param {String} gender The character gender
     * @return {String} The ages label to translate
     */
    getAges(gender) {
        return [
            'GENERATOR.AGES.CHILD.' + gender,
            'GENERATOR.AGES.ADOLESCENT.' + gender,
            'GENERATOR.AGES.YOUNGADULT.' + gender,
            'GENERATOR.AGES.ADULT.' + gender,
            'GENERATOR.AGES.OLD.' + gender,
            'GENERATOR.AGES.VERYOLD.' + gender
        ];
    }

    /**
     * Get all the genders labels
     * @param {String} gender The character gender
     * @return {String} The genders label to translate
     */
    getGenders() {
        return [
            'GENERATOR.GENDERS.FEMALE',
            'GENERATOR.GENDERS.MALE'
        ];
    }

    /**
     * Get all the civilizations labels
     * @param {String} gender The character gender
     * @return {String} The civilizations label to translate
     */
    getCivilizations(gender) {
        return Civilizations[gender];
    }

    /**
     * Get all the special sign body labels
     * @return {String} The special sign body labels to translate
     */
    getSpecialSignBodyList() {
        return SpecialSignBody;
    }

    /**
     * Get all the alignment labels
     * @return {String} The alignments labels to translate
     */
    getAlignments() {
        return Alignments;
    }

    /**
     * Get all the alignment labels
     * @return {String} The alignments labels to translate
     */
    getNames() {
        return Names;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getCharismaList() {
        return Charisma;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getBeautyList() {
        return Beauty;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getIntellectList() {
        return Intellect;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getPerceptionList() {
        return Perception;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getFightSkillsList() {
        return FightSkills;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getCharClassList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getPunchLineList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getCorpulenceList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getFaceShapeList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getSkinToneList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getEyesList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getMouthList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getNoseList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getHairList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getSpecialSignFaceList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getGoalList() {
        return Goals;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getMotivationList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getDefectList() {
        return Defects;
    }

    /**
     * Get all the qualities labels
     * @return {String} The alignments labels to translate
     */
    getQualityList() {
        return Qualities;
    }

    /**
     * Get all the Phobia labels
     * @return {String} The alignments labels to translate
     */
    getPhobiaList() {
        return this.notSet;
    }
    
    /**
     * Get all the temper labels
     * @return {String} The tempers labels to translate
     */
    getTemperList() {
        return this.notSet;
    }


    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getTalentList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getProfessionList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getFamilySituationList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getFinancialSituationList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getAccentList() {
        return this.notSet;
    }


    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getReputationList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getCombatStyleList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getClothesList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getAccessoriesList() {
        return this.notSet;
    }

    /**
     * Get all the x labels
     * @return {String} The alignments labels to translate
     */
    getClothingStyleList() {
        return this.notSet;
    }
}