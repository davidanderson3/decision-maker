export const SAMPLE_DECISIONS = [
  {
    id: 'demo-goal',
    type: 'goal',
    text: 'Welcome to Goal Oriented',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: null,
  },
  {
    id: 'demo-task-1',
    type: 'task',
    text: 'Explore the demo tasks',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal',
  },
  {
    id: 'demo-task-2',
    type: 'task',
    text: 'Sign up to save your own goals',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal',
  },
  {
    id: 'demo-task-3',
    type: 'task',
    text: 'Try editing and reordering tasks',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal',
  },
  {
    id: 'demo-goal-2',
    type: 'goal',
    text: 'Grow your side project',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: null,
  },
  {
    id: 'demo-task-2a',
    type: 'task',
    text: 'Outline your MVP features',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal-2',
  },
  {
    id: 'demo-task-2b',
    type: 'task',
    text: 'Launch a landing page',
    completed: true,
    resolution: '',
    dateCompleted: '2025-06-20',
    parentGoalId: 'demo-goal-2',
  },
  {
    id: 'demo-task-2c',
    type: 'task',
    text: 'Get your first users',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal-2',
  },
  {
    id: 'demo-goal-3',
    type: 'goal',
    text: 'Completed sample goal',
    completed: true,
    resolution: '',
    dateCompleted: '2025-06-15',
    parentGoalId: null,
  },
  {
    id: 'demo-task-3a',
    type: 'task',
    text: 'This is done!',
    completed: true,
    resolution: '',
    dateCompleted: '2025-06-14',
    parentGoalId: 'demo-goal-3',
  },
  {
    id: 'demo-task-3b',
    type: 'task',
    text: 'So is this',
    completed: true,
    resolution: '',
    dateCompleted: '2025-06-15',
    parentGoalId: 'demo-goal-3',
  },
  {
    id: 'demo-goal-4',
    type: 'goal',
    text: 'Future conference talk',
    completed: false,
    resolution: '',
    dateCompleted: '',
    scheduled: '2025-07-10',
    parentGoalId: null,
  },
  {
    id: 'demo-task-4a',
    type: 'task',
    text: 'Write an outline',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal-4',
  },
  {
    id: 'demo-task-4b',
    type: 'task',
    text: 'Create slides',
    completed: false,
    resolution: '',
    dateCompleted: '',
    parentGoalId: 'demo-goal-4',
  },
  {
    id: 'daily-task-1',
    type: 'task',
    text: 'Review tasks each morning',
    completed: false,
    resolution: '',
    dateCompleted: '',
    recurs: 'daily',
    parentGoalId: null,
  },
  {
    id: 'daily-task-2',
    type: 'task',
    text: 'Plan your week on Monday',
    completed: false,
    resolution: '',
    dateCompleted: '',
    recurs: 'weekly',
    parentGoalId: null,
  },
  {
    id: 'daily-task-3',
    type: 'task',
    text: 'Share progress on Friday',
    completed: false,
    resolution: '',
    dateCompleted: '',
    recurs: 'weekly',
    parentGoalId: null,
  }
];

export const SAMPLE_LISTS = [
  {
    name: 'Books to Read',
    columns: [
      { name: 'Title', type: 'link' },
      { name: 'Author', type: 'text' }
    ],
    items: [
      { Title: 'https://example.com/book1', Title_label: 'Deep Work', Author: 'Cal Newport' },
      { Title: 'https://example.com/book2', Title_label: 'Atomic Habits', Author: 'James Clear' }
    ]
  },
  {
    name: 'Groceries',
    columns: [
      { name: 'Item', type: 'text' },
      { name: 'Qty', type: 'number' }
    ],
    items: [
      { Item: 'Apples', Qty: '3' },
      { Item: 'Milk', Qty: '1' },
      { Item: 'Eggs', Qty: '12' }
    ]
  }
];

