/**
 * This Factory is used to get datas for the generator
 * It could be replace by an api in the future
 */
export class LocalDataFactory {
    constructor() {
        'ngInject';
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
        return [
            'GENERATOR.CIVILIZATIONS.HUMAN.' + gender,
            'GENERATOR.CIVILIZATIONS.DWARF.' + gender
        ];
    }

    /**
     * Get all the physical traits labels
     * @return {String} The the physical traits labels to translate
     * //TODO : GET FROM JSON FILE
     */
    getPhysicalTrait() {
        return [
            {
                name: {
                    MALE: "patateM",
                    FEMALE: "patateF"
                },
                weight: 0.5
        }, {
                name: {
                    MALE: "bananeM",
                    FEMALE: "bananeF"
                },
                weight: 0.5
        }
        ];
    }

}