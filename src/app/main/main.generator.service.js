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
    * Get an element label from a list according to its chance to be picked
    * @param [Object] elements The list of elements
    * @param {String} gender The gender's character (can be null)
    * @result {String} The element name to translate
    */
    getElementLabelFromListWithWeighting(elements, gender){
        let randomList =[];
        let nb=0;
        for(let element of elements){
            if(element.weight){
                nb=element.weight*10;
            }else{
                nb=1;
            }
            for(let i=0; i<nb; i++){
                if(gender){
                    randomList.push(element.name[gender]);
                }else{
                    randomList.push(element.name);
                }
            }
        }
        let randIndex=Math.floor(Math.random() * randomList.length) ;
        return randomList[randIndex];
    }
    
    /**
    * Get the character physical trait
    * @param {String} gender The gender's character
    * @result {String} The  physical trait to translate
    */
    getPhysicalTrait(gender){
        let tab = this.localDataFactory.getPhysicalTraits(gender);
        return this.getElementLabelFromListWithWeighting(tab);
    }
    
    /**
    * Get the character alignment
    * @result {String} The  alignment to translate
    */
    getAlignment(){
        let tab = this.localDataFactory.getAlignments();
        let randIndex=Math.floor(Math.random() * tab.length) ;
        return tab[randIndex];
    }
    
    /**
    * Generate a name for a gender and a civilization (or use default)
    * @param {String} inputGender The character gender
    * @param {String} civilization The character civilization
    * @return {String} The name generated
    */
    generateName(inputGender, civilization){
        let tab = this.localDataFactory.getNames();
        let civ = civilization;
        let gender = inputGender;
        if(!tab[civ]){
            civ="DEFAULT";
        }
        if(!gender || (gender!="MALE" && gender !="FEMALE")){
            gender="MALE";
        }
        
        let randIndexBegin=Math.floor(Math.random() * tab[civ][gender]["beginning"].length);
        let randIndexMiddle=Math.floor(Math.random() * tab[civ][gender]["middle"].length);
        let randIndexEnd=Math.floor(Math.random() * tab[civ][gender]["end"].length);
        
        let begin = tab[civ][gender]["beginning"][randIndexBegin];
        let middle= tab[civ][gender]["middle"][randIndexMiddle];
        let end = tab[civ][gender]["end"][randIndexEnd];
        
        return ""+begin+middle+end;
    }
}