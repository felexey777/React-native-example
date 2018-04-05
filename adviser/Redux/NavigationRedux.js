import AppNavigation from '../Navigators/AppNavigator';


const initialState = AppNavigation.router.getStateForAction(
  AppNavigation.router.getActionForPathAndParams('LoginScreen')
);

export const navReducer = (state = initialState, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};
