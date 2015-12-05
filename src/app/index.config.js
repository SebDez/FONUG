export function config($logProvider, toastrConfig, $translateProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    // Initialize Translations
    $translateProvider.useStaticFilesLoader({
        prefix: './contents/languages/local-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('fr');

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
}