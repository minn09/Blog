import { Header } from "@components/Header";
import { Footer } from "./components/Footer";
import { HeroPost } from "./components/HeroPost";
import { Posts } from "./components/Posts";
function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <HeroPost />
        </section>
        <section>
          <Posts />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
