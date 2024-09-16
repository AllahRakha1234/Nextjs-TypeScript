import Navbar from '../components/Navbar';
import AddTodo from '../components/AddTodo';
import Todos from './../components/Todos';

export default function Home() {
  return (
      <main>
        <h2>TODO NEXTJS + TYPESCRIPT + REDUX TOOLKIT</h2>
        <Navbar/>
        <AddTodo/>
        <Todos/>
      </main>
  );
}
