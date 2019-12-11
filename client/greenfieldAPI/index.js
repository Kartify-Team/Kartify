import questions from './questions'
export default {
    getQuestions: (id) => {
        return questions.getQuestions(id)
    }
}