import { Component, Input, ViewChild } from '@angular/core';
import { PriceHistory } from '../price-history';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-graph',
    imports: [BaseChartDirective],
    templateUrl: './graph.component.html',
    styleUrl: './graph.component.css'
})
export class GraphComponent {
    @Input() toGraph!: PriceHistory;
    @Input() name: string = "PriceChart";
    labels?: string[]
    data?: number[]
    lineChartData?: ChartConfiguration['data'] 
    lineChartOptions?: ChartConfiguration['options'] 
    lineChartType: ChartType = 'line';

    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

    ngOnInit() {
        this.labels = Object.keys(this.toGraph.body);
        this.data = this.labels.map((l) => this.toGraph.body[l].close);

        this.lineChartData = {
            datasets: [
                {
                    data: this.data,
                    borderColor: 'rgba(0, 0, 0, 0)',
                    pointBorderColor: 'black',
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                },
            ],
            labels: this.labels
        };

        this.lineChartOptions = {
            elements: {
                line: {
                    tension: 0.5,
                },
            },
            scales: {
                y: {
                    position: 'left',
                },
            },

        };

    }

}
