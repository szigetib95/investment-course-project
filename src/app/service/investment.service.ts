import {Injectable, signal} from '@angular/core';
import {AnnualData, InvestmentInput} from "../model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  public readonly resultData = signal<AnnualData[] | undefined>(undefined);
  constructor() { }

  public calculateInvestmentResults(data: InvestmentInput): void {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = Array.from({ length: duration }, (_, i) => {
      const year = i + 1;
      const interestEarned = (initialInvestment * Math.pow(1 + expectedReturn / 100, year) - initialInvestment) / year;
      const valueEndOfYear = initialInvestment * Math.pow(1 + expectedReturn / 100, year) + annualInvestment * year;

      return {
        year,
        interest: interestEarned,
        valueEndOfYear,
        annualInvestment,
        totalInterest: valueEndOfYear - (initialInvestment + annualInvestment * year),
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };
    });

    this.resultData.set(annualData);
  }
}
