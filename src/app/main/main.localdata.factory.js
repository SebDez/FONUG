import SpecialSign from '../elements/SpecialSign';
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
import Tempers from '../elements/Tempers';
import Phobia from '../elements/Phobia';
import CharClass from '../elements/CharClass';
import PunchLines from '../elements/PunchLines';
import Corpulences from '../elements/Corpulences';
import FaceShapes from '../elements/FaceShapes';
import SkinTones from '../elements/SkinTones';
import Noses from '../elements/Noses';
import Mouth from '../elements/Mouth';
import Eyes from '../elements/Eyes';
import Hairs from '../elements/Hairs';
import Motivations from '../elements/Motivations';
import Professions from '../elements/Professions';
import FinancialSituation from '../elements/FinancialSituation';
import Accents from '../elements/Accents';
import Reputations from '../elements/Reputations';
import CombatStyle from '../elements/CombatStyle';
import Clothes from '../elements/Clothes';
import Accessories from '../elements/Accessories';
import FamilialSituationAdult from '../elements/FamilialSituationAdult';
import FamilialSituationYoung from '../elements/FamilialSituationYoung';

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
     * Get all the ages labels list
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
     * Get all the genders labels list
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
     * Get all the civilizations labels list
     * @param {String} gender The character gender
     * @return {String} The civilizations label to translate
     */
    getCivilizations(gender) {
        return Civilizations[gender];
    }

    /**
     * Get all the alignment labels list
     * @return {String} The alignments labels list to translate
     */
    getAlignments() {
        return Alignments;
    }

    /**
     * Get all the names
     * @return {String} The names values
     */
    getNames() {
        return Names;
    }

    /**
     * Get all the Charisma labels list
     * @return {String} The Charisma labels list to translate
     */
    getCharismaList() {
        return Charisma;
    }

    /**
     * Get all the Beauty labels list
     * @return {String} The Beauty labels list to translate
     */
    getBeautyList() {
        return Beauty;
    }

    /**
     * Get all the Intellect labels list
     * @return {String} The Intellect labels list to translate
     */
    getIntellectList() {
        return Intellect;
    }

    /**
     * Get all the Perception labels list
     * @return {String} The Perception labels list to translate
     */
    getPerceptionList() {
        return Perception;
    }

    /**
     * Get all the FightSkills labels list
     * @return {String} The FightSkills labels list to translate
     */
    getFightSkillsList() {
        return FightSkills;
    }

    /**
     * Get all the charclass labels list
     * @return {String} The charclass labels list to translate
     */
    getCharClassList() {
        return CharClass;
    }

    /**
     * Get all the punchline labels list
     * @return {String} The punchline labels list to translate
     */
    getPunchLineList() {
        return PunchLines;
    }

    /**
     * Get all the corpulence labels list
     * @return {String} The corpulence labels list to translate
     */
    getCorpulenceList() {
        return Corpulences;
    }

    /**
     * Get all the faceshape labels list
     * @return {String} The faceshape labels list to translate
     */
    getFaceShapeList() {
        return FaceShapes;
    }

    /**
     * Get all the skin tone labels list
     * @return {String} The skin tone labels list to translate
     */
    getSkinToneList() {
        return SkinTones;
    }

    /**
     * Get all the eyes labels list
     * @return {String} The eyes labels list to translate
     */
    getEyesList() {
        return Eyes;
    }

    /**
     * Get all the mouth labels list
     * @return {String} The mouth labels list to translate
     */
    getMouthList() {
        return Mouth;
    }

    /**
     * Get all the nose labels list
     * @return {String} The nose labels list to translate
     */
    getNoseList() {
        return Noses;
    }

    /**
     * Get all the hair labels list
     * @return {String} The hair labels list to translate
     */
    getHairList() {
        return Hairs;
    }

    /**
     * Get all the special sign  labels list
     * @return {String} The special sign  labels list to translate
     */
    getSpecialSignList() {
        return SpecialSign;
    }


    /**
     * Get all the goal labels list
     * @return {String} The goal labels list to translate
     */
    getGoalList() {
        return Goals;
    }

    /**
     * Get all the motivation labels list
     * @return {String} The motivation labels list to translate
     */
    getMotivationList() {
        return Motivations;
    }

    /**
     * Get all the x labels list
     * @return {String} The alignments labels list  to translate
     */
    getDefectList() {
        return Defects;
    }

    /**
     * Get all the qualities labels list
     * @return {String} The alignments labels list to translate
     */
    getQualityList() {
        return Qualities;
    }

    /**
     * Get all the Phobia labels list
     * @return {String} The alignments labels list to translate
     */
    getPhobiaList() {
        return Phobia;
    }

    /**
     * Get all the temper labels list
     * @return {String} The tempers labels list to translate
     */
    getTemperList() {
        return Tempers;
    }


    /**
     * Get all the talent labels list
     * @return {String} The talent labels list to translate
     */
    getTalentList() {
        return this.notSet;
    }

    /**
     * Get all the profession labels list
     * @return {String} The profession labels list to translate
     */
    getProfessionList() {
        return Professions;
    }

    /**
     * Get all the familySituation for adults labels list
     * @return {String} The familySituation for adults labels list to translate
     */
    getFamilialSituationAdultList() {
        return FamilialSituationAdult;
    }
    
    /**
     * Get all the familySituation for youngs labels list
     * @return {String} The familySituation for youngs labels list to translate
     */
    getFamilialSituationYoungList() {
        return FamilialSituationYoung;
    }

    /**
     * Get all the financialSituation labels list
     * @return {String} The financialSituation labels list to translate
     */
    getFinancialSituationList() {
        return FinancialSituation;
    }

    /**
     * Get all the accent labels list
     * @return {String} The accent labels list to translate
     */
    getAccentList() {
        return Accents;
    }


    /**
     * Get all the reputation labels list
     * @return {String} The reputation labels list to translate
     */
    getReputationList() {
        return Reputations;
    }

    /**
     * Get all the combatStyle labels list
     * @return {String} The combatStyle labels list to translate
     */
    getCombatStyleList() {
        return CombatStyle;
    }

    /**
     * Get all the clothes labels list
     * @return {String} The clothes labels list to translate
     */
    getClothesList() {
        return Clothes;
    }

    /**
     * Get all the accessories labels list
     * @return {String} The accessories labels list to translate
     */
    getAccessoriesList() {
        return Accessories;
    }

    /**
     * Get all the clothingStyle labels list
     * @return {String} The clothingStyle labels list to translate
     */
    getClothingStyleList() {
        return this.notSet;
    }
}
