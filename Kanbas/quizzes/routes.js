import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  // for quizzes
  const createQuiz = async (req, res) => {
    const { cid } = req.params;      
    const quiz = await dao.createQuiz(cid, req.body);
    res.json(quiz);
  };
  
  const findQuizzesForCourse = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizzesForCourse(cid);
    res.json(quizzes);
  };
  
    const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };
  
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };
    

  // for questions
  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const question = await dao.createQuestion(quizId, req.body);
    res.json(question);
  };
  
  const findQuestionById = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  };
  
  const updateQuestion = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  
  const deleteQuestion = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };

  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", findQuizzesForCourse); 
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
    
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionById); 
  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion); 
  app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuestion); 
}
  


