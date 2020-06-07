export interface Result {
  header: [{ name: string }];
  card: [{ category: string; balance: string }];
  investment: [{ amount: string; quantity: string }];
  goals: [
    { titleGoal: string; performance: string; goal: string; image: string; percent: string }
  ];
  briefcase: [{status: string; balance:string; type:string; percent:string}]
  sliderArray: [{ img: string; alt: string; text: string }];
  blog:[{ title:string; description:string; image:string}]
}
