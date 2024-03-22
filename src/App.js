import './App.css';
import {
  Accordian,
  GitFinder,
  ImageSlider,
  LoadMore,
  ModalPopup,
  QrGenerator,
  RandomColor,
  ScrollIndicator,
  TabsTest,
  Search,
  StarRating,
  ThemeSwitch,
  TicTacToe,
  TreeView,
  FeatureFlags,
  FeatureFlagGlobalState,
  UseFetchHookTest,
  UseOnClickOutsideTest,
  UseWindowResizeTest,
  ScrollToTopAndBottom,
  ScrollToSection,
} from './components/index';

import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating noOfStars={10} />

      {/* Image Slider */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'15'}
        page={'1'}
      />

      {/* Load More Data */}
      <LoadMore />

      {/* Tree View / menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />
      {/* <MenuList list={menus} />  this works too , we only use another parent (treeView) to be a container for styling */}

      {/* QR code generator */}
      <QrGenerator />

      {/* Dark / Light mode switch - Theme switch */}
      <ThemeSwitch />

      {/* Scroll indicator */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

      {/* Custom Tabs */}
      <TabsTest />

      {/* Custom Modal Component */}
      <ModalPopup />

      {/* Github profile finder */}
      <GitFinder />

      {/* Search Auto Complete with API Implementation */}
      <Search />

      {/* Tic Tac Toe Game  */}
      <TicTacToe />

      {/* Feature Flags Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      {/* useFetch - Custom Hook */}
      <UseFetchHookTest />

      {/* useOnClick Outside - Custom Hook */}
      <UseOnClickOutsideTest />

      {/* useWindowResize - Custom Hook */}
      <UseWindowResizeTest />

      {/* Scroll to top and bottom */}
      <ScrollToTopAndBottom />

      {/* Scroll to a particular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
