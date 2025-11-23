import { TodoList } from '@/components/TodoListReduxToolkit';
import { Provider } from 'react-redux';
import { todoStore } from '@/stores/redux-store';

const ReduxToolkitListPage = function () {
  return (
    <Provider store={todoStore}>
      <div className="flex flex-col w-full">
        <header>
          <h1 className="text-left mb-8">Redux Toolkit</h1>
        </header>
        <TodoList />
      </div>
    </Provider>
  );
}

export default ReduxToolkitListPage;