import { useContext } from 'react';
import {
  Accordian,
  QrGenerator,
  RandomColor,
  ThemeSwitch,
  TicTacToe,
  TreeView,
} from '../index';
import { FeatureFlagsContext } from './context';
import menus from '../tree-view/data';

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <ThemeSwitch key="showLightAndDarkMode" />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe key="showTicTacToeBoard" />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor key="showRandomColorGenerator" />,
    },
    { key: 'showAccordian', component: <Accordian key="showAccordian" /> },
    {
      key: 'showTreeView',
      component: <TreeView key="showTreeView" menus={menus} />,
    },
    {
      key: 'showQRGenerator',
      component: <QrGenerator key="showQRGenerator" />,
    },
  ];

  function checkEnabledFlags(getcurrentKey) {
    return enabledFlags[getcurrentKey]; // to check if the component key is true or false in order to render it or not
  }

  if (loading) return <h1>Loading data! please wait...</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender?.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
