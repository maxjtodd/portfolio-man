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

        let lowestItemIndex = 0;
        let lowestNumItems = Object.keys(this.toGraph[0].body).length;
        let i = 0;
        for (; i < this.toGraph.length; i++) {
            const numItems = Object.keys(this.toGraph[i].body).length;
            if (numItems < lowestNumItems) {
                lowestItemIndex = i;
                lowestNumItems = numItems;
            }
        }

        console.log(`Lowest: ${lowestNumItems}`)

        this.labels = Object.keys(this.toGraph[lowestItemIndex].body);
        this.data = this.labels.map((l) => 0);

        for (const ph of this.toGraph!) {
            console.log(Object.keys(ph.body).length)
            let i = 0;
            for (const label of this.labels!) {
                // if (!ph.body[label].open) {
                //     console.log("NOT FOUND!!!!")
                // }
                this.data[i] += ph.body[label].open;
                i += 1;
            }
            i = 0;
        }

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
