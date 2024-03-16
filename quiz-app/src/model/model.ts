export interface Question {
    question: string,
    answerOptions: AnswerOption[]
}

export interface AnswerOption {
    text: string,
    isCorrect: boolean
}