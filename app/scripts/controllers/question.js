'use strict';

sanguineTestApp.controller('questionControl', function ($scope, $http, $modal) {

    $scope.questionContent = [
      {
        title: 'Who?',
        desc: 'Anyone over 18 years of age',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/18.png'
      },
      {
        title: 'What?',
        desc: '6 tbsp of blood (less than 1/5 of a blood donation)',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/tubes.png'
      },
      {
        title: 'When?',
        desc: 'You decide. We work with your schedule',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/calendar.png'
      },
      {
        title: 'Where?',
        desc: 'The comfort of your own home. We come to you',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/house.png'
      },
      {
        title: 'Why?',
        desc: 'Because medicine doesn\'t move forward without you',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/steth.png'
      },
      {
        title: 'Study Requirements',
        desc: 'Click here to view this study\'s requirements',
        imgSrc: 'https://d2xrs3qqoda7l2.cloudfront.net/asset/study.png'
      }
    ];


    $scope.open = function () {
      console.log(this);
      if (this.item.title === 'Study Requirements') {
        var modalInstance = $modal.open({
          templateUrl: '/partials/requirements-modal.html',
          controller: 'modalControl',
          size: 'sm',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
      };
    };

});


sanguineTestApp.controller('modalControl', function ($scope, $modalInstance, items) {

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
