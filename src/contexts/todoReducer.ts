import type { Todo, TodoPayload } from './todo.types';

export function todoReducer(state: Todo[], action: { type: string; payload: TodoPayload }): Todo[] {
  const { id, text = '', completed = false } = action.payload;

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id, text, completed }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}