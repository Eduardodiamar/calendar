import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  weekdaysList: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  monthsList: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  days: string[] = [];
  date: Date = new Date();
  month: number = 0;
  
  ngOnInit(): void {
    this.loadMonthData(0);
  }

  loadMonthData(month: number) {
    this.days = [];
    var monthDate = new Date(this.date.getFullYear(), this.date.getMonth() + month, 1);
    var monthFirstDay = monthDate.getDay();
    monthFirstDay = monthFirstDay === 0 ? 7 : monthFirstDay;
    var totalDays = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i < monthFirstDay; i++) {
      this.days.push('');
    }
    for (let i = 0; i < totalDays; i++) {
      this.days.push((i+1).toString());
    }
  }

  nextMonth() {
    this.month++;
    this.loadMonthData(this.month);
  }

  prevMonth() {
    this.month--;
    this.loadMonthData(this.month);
  }
}
