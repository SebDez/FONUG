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
    getRandomGender(){
        let list =this.getGenders();
        let randIndex=Math.floor(Math.random() * list.length);
        return list[randIndex];
    }
    
    /**
    * Get a random age from list
    * @param {String} gender The character's gender
    * @return {String} The age to translate
    */
    getRandomAge(gender){
        let list =this.getAges(gender);
        let randIndex=Math.floor(Math.random() * list.length);
        return list[randIndex];
    }
    
    /**
    * Get a random civilization from list
    * @param {String} gender The character's gender
    * @return {String} The civilization to translate
    */
    getRandomCivilization(gender){
        let list =this.getCivilizations(gender);
        let randIndex=Math.floor(Math.random() * list.length);
        return list[randIndex];
    }
    
    /**
    * Get an element from a list according to its chance to be picked
    * @param [Object] elements The list of elements
    * @param {String} gender The gender's character
    * @result {String} The element name to translate
    */
    getElementFromListWithWeighting(elements, gender){
        let randomList =[];
        let nb=0;
        for(let element of elements){
            nb=element.weight*10;
            for(let i=0; i<nb; i++){
                randomList.push(element.name[gender]);
            }
        }
        let randIndex=Math.floor(Math.random() * randomList.length-1) ;
        return randomList[randIndex];
    }
    
    /**
    * Get the caractere physical trait
    * @param {String} gender The gender's character
    * @result {String} The  physical trait to translate
    */
    getPhysicalTrait(gender){
        let tab = this.localDataFactory.getPhysicalTraits();
        return this.getElementFromListWithWeighting(tab, gender);
    }

}