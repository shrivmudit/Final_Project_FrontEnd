import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`)

  }
  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`, question);

  }
  //for deleting

  public deleteQuestion(quesId:any){
    return this.http.delete(`${baseUrl}/question/${quesId}`);
  }
}
