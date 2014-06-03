'use strict';

sanguineTestApp.controller('processControl', function ($scope, $http, $interval) {

    var slides = $scope.slides = [
      {
        step: 1,
        title: 'step one: Sign Up',
        desc: 'Start advancing research by signing up online or calling for more information. A study coordinator will call you to explain the donation process, answer any questions and collect some basic health information.',
        imgSrc: '/images/da1edc7b.signup_image_1.png'
      },
      {
        step: 2,
        title: 'step two: Schedule',
        desc: 'After you are screened, you will join our list of eligible donors! We will work to match you to a current research study. As soon as we do, we will call to schedule a convenient time for you to donate.',
        imgSrc: '/images/3a1768ec.schedule_image_1.png'
      },
      {
        step: 3,
        title: 'step three: Donate',
        desc: 'Your appointment takes place in the comfort of your home. During the appointment you will get your blood drawn and receive compensation. Our patient advocates (P.A.’s) are expert phlebotomists, dedicated researchers and true patient advocates.',
        imgSrc: '/images/03e88a68.donate_image.png'
      },
      {
        step: 4,
        title: 'step four: Join',
        desc: 'It all starts with YOU!',
        imgSrc: '/images/79603d55.join_image_1.png'
      }
    ];

    $scope.stepIndex = 1;
    $scope.currentSlide = slides[0];

    $scope.$watch('stepIndex', function() {
      $scope.currentSlide = slides[$scope.stepIndex-1];
    });

    $scope.nextStep = function() {
      if($scope.stepIndex===4) {
        $scope.stepIndex=1;
      }
      else {
        $scope.stepIndex++;
      }
    };

    $scope.prevStep = function() {
      if($scope.stepIndex===1) {
        $scope.stepIndex=4;
      }
      else {
        $scope.stepIndex--;
      }
    };

    $scope.stepLoop = function() {
      $scope.nextStep();
      console.log("test: ", $scope.stepIndex);
    };

    $scope.initLoop = $interval($scope.stepLoop, 8000);

  });