import { Component, OnInit } from '@angular/core';
import { ExerciseRecord } from 'src/app/users/interfaces/exercise-record.interface';
import { ExerciseRecordService } from 'src/app/users/services/exercise-record.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

  // public labels1: string[] = [];
  // public data1: number[] = [];

  public completedChallenges: ExerciseRecord[] = [];

  constructor(
    private _exerciseRecord: ExerciseRecordService
  ) {
    
    // this._exerciseRecord.getAll().subscribe({
    //   next: response => {
      
    //     // const CHILDREN = response.data.filter( exercise => exercise.passenger.passengerType === 'CHILDREN' ).length;
    //     // const STUDENTS = response.data.filter( exercise => exercise.passenger.passengerType === 'STUDENTS' ).length;
    //     // const TEACHERS = response.data.filter( exercise => exercise.passenger.passengerType === 'TEACHERS' ).length;
    //     // const DISABLED = response.data.filter( exercise => exercise.passenger.passengerType === 'DISABLED' ).length;
    //     // const ELDERLY = response.data.filter( exercise => exercise.passenger.passengerType === 'ELDERLY' ).length;        

    //     // const sort = [CHILDREN, STUDENTS, TEACHERS, DISABLED, ELDERLY].sort(function(a, b) {
    //     //   return b - a;
    //     // });


    //     // const CHILDREN_VALUE = CHILDREN;
    //     // const STUDENTS_VALUE = STUDENTS;
    //     // const TEACHERS_VALUE = TEACHERS;
    //     // const DISABLED_VALUE = DISABLED;
    //     // const ELDERLY_VALUE = ELDERLY;


    //     const newLabels1: string[] = [];
    //     // const top3 = sort.slice(0, 3);

    //     // top3.forEach( top => {
    //     //   if(top === CHILDREN_VALUE) newLabels1.push('CHILDREN');
    //     //   if(top === STUDENTS_VALUE) newLabels1.push('STUDENTS');
    //     //   if(top === TEACHERS_VALUE) newLabels1.push('TEACHERS');
    //     //   if(top === DISABLED_VALUE) newLabels1.push('DISABLED');
    //     //   if(top === ELDERLY_VALUE) newLabels1.push('ELDERLY');
    //     // });

    //     this.labels1 = [...newLabels1];
    //     // this.data1 = [...top3];
    //   }
    // });


    // this.data2 = [18, 30, 9];

  }

  // ngOnInit(): void {
  //   this.getCompletedChallengeToday();
  // }

  // getCompletedChallengeToday():void {
  //   this._exerciseRecord.getAllWhoCompletedChallengeToday().subscribe({
  //     next: completedChallenges => {
  //       this.completedChallenges = completedChallenges;
  //     }
  //   });
  // }

  get labels1() {
    return ['Admin', 'Elderly', 'Teacher', 'Children', 'Student'];
  }

  get data1() {
    return [6,5,7,6,13];
  }

  get labels2() {
    return ['Periferico Norte', 'Circunvalacion Country', 'CUCEI', 'Plaza Universidad', 'Patria', 'Zapopan Centro', 'Lazaro Cardenas'];
  }

  get data2() {
    return [1,3,11,1,1,2,1];
  }

}
