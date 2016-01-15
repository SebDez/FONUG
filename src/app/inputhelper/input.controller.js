/**
 * InputController, use to generate objects from form, used only by me
 */
export class InputController {

  /**
   * Create an InputController
   */
  constructor($state) {
    'ngInject';
    /** @type {Object} */
    this.$state = $state;
    /** @type {String} */
    this.elementKey = 'defaultKey';
    /** @type {String} */
    this.elementName = 'name';
    /** @type {Float} */
    this.defaultWeight = 0.5;
    /** @type {Boolean} */
    this.withWeight = true;
    /** @type {Boolean} */
    this.withGender = true;
    /** @type {Object[]} */
    this.elementList = [];
    /** @type {Object} */
    this.frTranslationObject = {};
    /** @type {Object} */
    this.enTranslationObject = {};
  }

  /**
   * Create new object in element list
   */
  createObject() {
    let obj = {};
    this.elementList.push(obj);
  }

  /**
   * Set an object to the input format according to the values in the form
   * @param {Object} obj The object to format
   */
  setObjectToInputFormat(obj){
    if (this.withGender) {
      obj.name = {
        MALE: 'GENERATOR.' + this.elementKey.toUpperCase() + '.' + obj.tag.toUpperCase() + '.MALE',
        FEMALE: 'GENERATOR.' + this.elementKey.toUpperCase() + '.' + obj.tag.toUpperCase() + '.FEMALE'
      };
    } else {
      obj.name = 'GENERATOR.' + this.elementKey.toUpperCase() + '.' + obj.tag.toUpperCase();
    }
  }

  /**
   * Format the element list by removing some useless data before to print it
   * @return {Object} The element list formated
   */
  formatElementListToPrint(){
    let returnObject = [];
    let objToPrint ={};
    for(let obj of this.elementList){
      this.setObjectToInputFormat(obj);
      objToPrint = angular.copy(obj);
      this.deleteUselessInformations(objToPrint);

      if(!this.withWeight){
        delete objToPrint.weight;
      }

      returnObject.push(objToPrint);
    }
    this.updateTranslations();
    return returnObject;
  }

  /**
  * Remove some keys of an element
  * @param {Object} obj The object concerned
  */
  deleteUselessInformations(obj){
    delete obj.tag;
    delete obj.labelMaleFr;
    delete obj.labelFemaleFr;
    delete obj.labelMaleEn;
    delete obj.labelFemaleEn;
    delete obj.defaultLabelFr;
    delete obj.defaultLabelEn;
  }

  /**
   * Update the translations object
   * @param {Object} obj The translation object to update
   */
  updateTranslationsObject(obj) {
    let mkey = this.elementKey.toUpperCase();
    let tag = obj.tag.toUpperCase();

    if(obj.tag)
    {
      this.frTranslationObject[mkey][tag] ={};
      this.enTranslationObject[mkey][tag] ={};

      if (this.withGender) {
        this.frTranslationObject[mkey][tag] = {
          MALE: this.capitalizeFirstLetter(obj.labelMaleFr),
          FEMALE: this.capitalizeFirstLetter(obj.labelFemaleFr)
        };
        this.enTranslationObject[mkey][tag] = {
          MALE: this.capitalizeFirstLetter(obj.labelMaleEn),
          FEMALE: this.capitalizeFirstLetter(obj.labelFemaleEn)
        };
      } else {
        this.frTranslationObject[mkey][tag] = this.capitalizeFirstLetter(obj.defaultLabelFr);
        this.enTranslationObject[mkey][tag] = this.capitalizeFirstLetter(obj.defaultLabelEn);
      }
    }
  }

  /**
   * Capitalize first letter of a given string
   * @param {String} obj The string concerned
   * @return {String} The string with first letter capitilized
   */
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Update all translations objects
   */
  updateTranslations(){
    this.frTranslationObject = {};
    this.frTranslationObject[this.elementKey.toUpperCase() ] = {};

    this.enTranslationObject = {};
    this.enTranslationObject[this.elementKey.toUpperCase() ] = {};

    for(let obj of this.elementList){
      this.updateTranslationsObject(obj);
    }
  }
}
