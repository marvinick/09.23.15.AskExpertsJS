askExperts.factory('AnswersFactory', function AnswersFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswer = function() {
    factory.answers.push({ content: factory.answerContent });
    factory.answerContent = null;
    };
    return factory;
});
