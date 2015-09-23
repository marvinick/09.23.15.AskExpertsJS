askExperts.controller("ApprovedAnswersCtrl", function ApprovedAnswersCtrl($scope, AnswersFactory) {
    $scope.asnwers = AnswersFactory.answers;
    $scope.addAnswerWithApprovalNote = function(answer) {
      answer.approvalNote = true;
    };
});
