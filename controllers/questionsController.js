const questionsForm = require('../models/QuestionsForm.model')

const sendAnswers = async(req, res) => {
try {
    const { questionId, field, question, selectedAnswer } = req.body;
    console.log(req.payload._id, questionId, req.params);
    const question = await Questions.findByIdAndUpdate(
        req.params.questionId,
        {
$push: {}
        },
{ new: true }
    )
} catch (error) {
    console.error('Error sending the selected options', error)
}

}
 
export default sendAnswers;