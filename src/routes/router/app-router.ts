import Home from '../../ui/app/home/Home';
import Login from '../../ui/auth/sign-in/Login';
import SignUp from '../../ui/auth/sign-up/SignUp';
import WelcomeScreen from '../../ui/welcome-screen/WelcomeScreen';
import routes from '../routes';

const appRouter = [
  {
    route: routes.homeScreen,
    component: Home,
  },
  {
    route: routes.welcomeScreen,
    component: WelcomeScreen,
  },
  {
    route: routes.loginOptionsScreen,
    component: Login,
  },
  {
    route: routes.signUpScreen,
    component: SignUp,
  },
];

export default appRouter;
