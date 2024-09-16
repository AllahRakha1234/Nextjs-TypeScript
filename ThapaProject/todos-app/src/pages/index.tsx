import Image from "next/image";
import localFont from "next/font/local";
import Navbar from '../components/Navbar';
import AddTodo from '../components/AddTodo';
import Todos from './../components/Todos';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
