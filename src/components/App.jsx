import ItemsProvider from '../contexts/ItemsProvider';
import BackgroundHeading from './BackgroundHeading';
import Header from './Header';
// import ItemList from './ItemList';
// import EmptyView from './EmptyView';
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

          {/* { items.length > 0 ? <ItemList /> : <EmptyView /> } */}
          <ItemsListWrapper />

          <Sidebar />
        </ItemsProvider>
      </main>

      <Footer />
    </>
  )
}

export default App
