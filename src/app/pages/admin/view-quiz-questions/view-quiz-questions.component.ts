import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
qId:any;
qTitle:any;
questions =[
  {
    content:'',
    option1:'Basic Java Quiz',
    option2: 'Core Java covers the basic concepts of the Java programming language. Advance Java covers the advanced topics and concepts of the Java programming language',
    option3: '',
    option4: '',
    answer:'',

  },

];
  constructor(private _route: ActivatedRoute, private _question: QuestionService, private _snak : MatSnackBar) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this.qTitle= this._route.snapshot.params.title;
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data)
      this.questions=data;
    },
    (error)=>{
      console.log(error);
    })
    

  }
  // deleteQuestion(qId:any){
  //   Swal.fire({
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Delete',
  //     title: 'Are you sure, want to delete this question?'
  //   }).then((result)=>{
  //     if(result.isConfirmed){
  //       this._question.deleteQuestion(qid).subscribe((data)=>{
  //         this._snak.open('Question Deleted', '', {
  //           duration : 3000,
  //         })
  //         this.questions=this.questions.filter((q)=>q.quesId!=qid)
  //       })
  //     }
  //     (error:any)=>{

  //     }
  //   })

  // }

}
