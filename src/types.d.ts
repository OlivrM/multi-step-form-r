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
