export type step =
  | {
      type: 'START' | 'STEP' | 'END';
      component: React.ReactNode;
    } & (
      | {
          type: 'START' | 'STEP';
          title: string;
          resume?: string;
          buttonTag: string;
        }
      | {
          type: 'END';
        }
    );

export type Tplan = 'arcade' | 'advanced' | 'pro';
export type Tduration = 'monthly' | 'yearly';

export interface TplanOption {
  name: Tplan;
  price: number;
  icon: string;
}
