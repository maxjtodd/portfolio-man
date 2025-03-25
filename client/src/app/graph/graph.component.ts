import { Component, Input, ViewChild } from '@angular/core';
import { PriceHistory } from '../price-history';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';
import { PriceHistoryMoment } from '../price-history-moment';

@Component({
    selector: 'app-graph',
    imports: [BaseChartDirective],
    templateUrl: './graph.component.html',
    styleUrl: './graph.component.css'
})
export class GraphComponent {
    @Input() toGraph!: PriceHistory[];
    @Input() name: string = "PriceChart";
    labels?: string[]
    data?: number[]
    lineChartData?: ChartConfiguration['data'] 
    lineChartOptions?: ChartConfiguration['options'] 
    lineChartType: ChartType = 'line';

    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

    ngOnInit() {
        this.labels = Object.keys(this.toGraph[0].body);
        this.data = this.labels.map((l) => this.toGraph[0].body[l].close);

        this.lineChartData = {
            datasets: [
                {
                    label: "Data",
                    data: this.data,
                },
            ],
            labels: this.labels
        };

        this.lineChartOptions = {
            // elements: {
            //     line: {
            //         tension: 0.5,
            //     },
            // },
            // scales: {
            //     y: {
            //         position: 'left',
            //     },
            // },
            //
        };

    }

}
