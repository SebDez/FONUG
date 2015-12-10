export class NavbarController {
    
    //Import angular translate and set default language
    constructor($translate, $state) {
        'ngInject';
        
        this.$state = $state;
        this.$translate = $translate;
        this.language=this.$translate.use();
        
        this.radioFrClass="label label-info";
        this.radioGbClass="label";
        
        this.setSelectedLang(this.language);
    }


    /**
    * Altern between 'random' mode and 'personalize' mode
    * @param {Boolean} val True if personnalize, false for random
    */
    setSelectedLang(val){
        this.setLanguage(val);
        if(val==='fr'){
            this.radioFrClass="label label-info";
            this.radioGbClass="label";
        }else if(val==='en'){
            this.radioFrClass="label";
            this.radioGbClass="label label-info";
        }
    }
    
        
    //Set the language to the selected value
    setLanguage(value){
        this.$translate.use(value);
    }
}