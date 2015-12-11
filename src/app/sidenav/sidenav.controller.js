export class SidenavController {

    constructor($state, $timeout, $mdSidenav) {
        'ngInject';
        this.$mdSidenav = $mdSidenav;
        this.$state = $state;
        this.toggleLeft = this.buildDelayedToggler('left');
        this.$timeout = $timeout;
    }

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    debounce(func, wait, context) {
            var timer;
            return () => {
                var args = Array.prototype.slice.call(arguments);
                this.$timeout.cancel(timer);
                timer = this.$timeout(() => {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
    buildDelayedToggler(navID) {
        return this.debounce(() => {
            this.$mdSidenav(navID)
                .toggle();
        }, 200);
    }

    /*
     * Close the sidenav
     */
    close() {
        this.$mdSidenav('left').close();
    }

    /**
     * Go to contact page
     */
    goToContact() {
        this.$state.go('contact');
    }

    /**
     * Go to about page
     */
    goToAbout() {
        this.$state.go('about');
    }
    
    /**
     * Go to main page
     */
    goToMain() {
        this.$state.go('home');
    }

}