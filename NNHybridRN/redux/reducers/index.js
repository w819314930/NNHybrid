import { combineReducers } from 'redux';
import { navReducer} from '../../navigator/AppNavigator';
// import { rootCom, RootNavigator } from '../../navigator/AppNavigator';
// import { createNavigationReducer } from 'react-navigation-redux-helpers';

// 以下就是createNavigationReducer的实现
// const defaultNavState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

// const navReducer = (state = defaultNavState, action) => {
//     const nextState = RootNavigator.router.getStateForAction(action, state);
//     return nextState || state;
// };

// const navReducer = createNavigationReducer(RootNavigator);

export default combineReducers({
    nav: navReducer,
    // home: home,
});