import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weekdaysList: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  monthsList: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  currentMonth: number = 0;
  date: Date = new Date();
  days: string[] = [];

  constructor() {
    
  }
  ngOnInit(): void {
    this.currentMonth = this.date.getMonth();
    this.loadMonthData(this.currentMonth);
  }


  get monthName(): string {
    var monthDate = new Date(this.date.getFullYear(), this.currentMonth, 1);
    return this.monthsList[monthDate.getMonth()];
  }
  get year(): number {
    var monthDate = new Date(this.date.getFullYear(), this.currentMonth, 1);
    return monthDate.getFullYear();
  }

  private loadMonthData(month: number): void {  
    this.days = [];
    var monthDate = new Date(this.date.getFullYear(), month, 1);
    var monthFirstDay = monthDate.getDay();
    var totalDays = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
    
    for (let i = 0; i < monthFirstDay-1; i++) {
      this.days.push('');
    }
  
    for (let i = 0; i < totalDays; i++) {
      this.days.push((i + 1).toString());
    }
  }

  public nextMonth(): void {
    this.currentMonth++
    this.loadMonthData(this.currentMonth);
  }

  public prevMonth(): void {
    this.currentMonth --
    this.loadMonthData(this.currentMonth);
  }
}
