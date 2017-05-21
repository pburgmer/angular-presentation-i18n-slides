(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'about-me',
      'about-us',
      'overview',

      'intro/i18n',
      'intro/l10n',
      'intro/requirements-non-functional',
      'intro/requirements-functional',

      'features/api/title',
      'features/api/maps',
      'features/api/leaflet',
      'features/api/end',

      'features/format/title',
      'features/format/intro',
      'features/format/number',
      'features/format/date',
      'features/format/sort',

      'features/text/title',
      'features/text/id-custom',
      'features/text/id-generated',
      'features/text/jit',
      'features/text/aot',
      'features/text/demo',
      'features/text/data-format',
      'features/text/interpolation',
      'features/text/pluralization',
      'features/text/selection',
      'features/text/error-messages',

      'features/modules/title',
      'features/modules/languages',
      'features/modules/features',

      'features/styling/title',
      'features/styling/fonts',
      'features/styling/right-to-left',
      'features/styling/layout',

      'summary',
      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
   SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
