import { useCallback } from "react";

interface CalculateMonthlyPaymentParams {
  principal: number;
  rate: number;
  term: number;
}

interface UseCalculateMonthlyPaymentResult {
  calculateMonthlyPayment: (params: CalculateMonthlyPaymentParams) => number;
}

export const useCalculateMonthlyPayment =
  (): UseCalculateMonthlyPaymentResult => {
    const calculateMonthlyPayment = useCallback(
      ({ principal, rate, term }: CalculateMonthlyPaymentParams): number => {
        if (rate <= 0 || term <= 0 || principal <= 0) {
          throw new Error(
            "Principal, rate, and term must be greater than zero."
          );
        }

        const monthlyRate = rate / 100 / 12;

        if (monthlyRate === 0) {
          return principal / term;
        }

        return (
          (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))
        );
      },
      []
    );

    return { calculateMonthlyPayment };
  };
