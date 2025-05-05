import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { loadExam, loadQuestions, submitExam } from '../../store/app.actions';
// import { selectCurrentExam, selectQuestions, selectSubmissionError, selectSubmissionResult } from '../../store/app.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-take-exam',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css'],
})
export class TakeExamComponent {
  examId = signal<string>('');
  exam = '';
  questions=[]
  // exam = this.store.selectSignal(selectCurrentExam);
  // questions = this.store.selectSignal(selectQuestions);
  examForm: FormGroup;
  // error = this.store.selectSignal(selectSubmissionError);
  // success = this.store.selectSignal(selectSubmissionResult);

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    // private store: Store,
    private router: Router
  ) {
    this.examId.set(this.route.snapshot.paramMap.get('examId') || '');
    this.examForm = this.fb.group({
      answers: this.fb.array([]),
    });

    // this.store.dispatch(loadExam({ examId: this.examId() }));
    // this.store.dispatch(loadQuestions({ examId: this.examId() }));

    // this.questions.subscribe(questions => {
      // this.answers.clear();
      // questions.forEach((question, index) => {
      //   this.answers.push(
      //     this.fb.group({
      //       questionId: [question._id, Validators.required],
      //       answer: question.isMultiple ? this.fb.array([]) : ['', Validators.required],
      //     })
      //   );
      // });
    // });

    // this.success.subscribe(result => {
    //   if (result) {
    //     this.router.navigate(['/results']);
    //   }
    // });
  }

  get answers() {
    return this.examForm.get('answers') as FormArray;
  }

  getAnswerArray(index: number) {
    return this.answers.at(index).get('answer') as FormArray;
  }

  onCheckboxChange(event: Event, index: number, choice: string) {
    const answerArray = this.getAnswerArray(index);
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      answerArray.push(new FormControl(choice));
    } else {
      const idx = answerArray.controls.findIndex(control => control.value === choice);
      answerArray.removeAt(idx);
    }
  }

  onSubmit() {
    if (this.examForm.invalid) {
      this.examForm.markAllAsTouched();
      return;
    }

    const answers = this.examForm.value.answers.map((answer: any) => ({
      questionId: answer.questionId,
      answer: answer.answer,
    }));

    // this.store.dispatch(submitExam({ examId: this.examId(), answers }));
  }
}