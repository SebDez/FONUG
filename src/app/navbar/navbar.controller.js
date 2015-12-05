export class NavbarController {
    
    //Import angular translate and set default language
    constructor($translate) {
        'ngInject';
        this.$translate = $translate;
        this.language=this.$translate.use();
    }
    
    //Set the language to the selected value
    setLanguage(value){
        this.$translate.use(value);
    }
    
}