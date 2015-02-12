/**
* @module Visual QA
* @description A CasperJS task to create screenschots of page elements for automated visual regression teseting
* @todo Include more advanced CasperJS commands to show dynamic content:
* @todo [casper.waitForSelector]{@link http://casperjs.readthedocs.org/en/latest/modules/casper.html#waitforselector}
* @todo [casper.click]{@link http://casperjs.readthedocs.org/en/latest/modules/casper.html#click}
* @todo And using angular.element().scope to modify $scope.
*/
casper.start('http://localhost:9001/')
.then(function() {
  phantomcss.screenshot('.header', 'Nav');
})
.then(function() {
  phantomcss.screenshot('.footer', 'Footer');
})
.then(function() {
  phantomcss.screenshot('h1', 'H1');
});