import {Component, inject, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../model";
import {InvestmentService} from "../service/investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  protected enteredInitialInvestment = signal<number>(0);

  protected enteredAnnualInvestment = signal<number>(0);

  protected enteredExpectedReturn = signal<number>(5);

  protected enteredDuration = signal<number>(10);

  private readonly _investmentService = inject(InvestmentService);
  protected onSubmit(): void {
    this._investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    });
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
