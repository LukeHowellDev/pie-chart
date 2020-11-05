import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;
  @Input() colorOne: string;
  @Input() colorTwo: string;
  @Input() labelOne: string;
  @Input() labelTwo: string;
  @Input() percentage: number;

  constructor() {}

  ngOnInit() {}

  get leftRotation(): number {
    if (this.percentage <= 50) {
      return 0;
    }
    return (360 * (this.percentage - 50)) / 100;
  }

  get rightRotation(): number {
    return (360 * this.percentage) / 100;
  }
}
