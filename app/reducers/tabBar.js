import ImportList from '../components/ImportList';
import ImportView from '../components/ImportView';
import tabBar from '../components/navigator/tabNavigation';

export default function tabBar(state,action)  {
  TabBar.router.getStateForAction(action,state);
}

export default function ImportList(state, action) {
  ImportList.router.getStateForAction(action,state);
}

export default function ImportView(state, action) {
  ImportView.router.getStateForAction(action,state);
}
