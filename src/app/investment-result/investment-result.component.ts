import {Component, computed, inject, input, signal} from '@angular/core';
import {AnnualData} from "../model";
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../service/investment.service";

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private readonly _investmentService = inject(InvestmentService);

  protected readonly results = computed(() => this._investmentService.resultData());
}
