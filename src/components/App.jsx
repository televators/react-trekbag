import BackgroundHeading from './BackgroundHeading';
import Header from './Header';
import ItemsListWrapper from './ItemsListWrapper';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemsListWrapper />
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default App
