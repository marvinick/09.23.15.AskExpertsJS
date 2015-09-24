askExperts.controller("ApprovedAnswersCtrl", function ApprovedAnswersCtrl($scope, QuestionsFactory) {
    $scope.answers = QuestionsFactory.answers;
    $scope.addAnswerWithApprovalNote = function(answer) {
      answer.approvalNote = true;
    };
});
