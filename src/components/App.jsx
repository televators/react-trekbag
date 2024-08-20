import ItemsProvider from '../contexts/ItemsProvider';
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
        <ItemsProvider>
          <Header />

          <ItemsListWrapper />

          <Sidebar />
        </ItemsProvider>
      </main>

      <Footer />
    </>
  )
}

export default App
