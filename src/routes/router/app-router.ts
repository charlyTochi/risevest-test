import {CreatePin} from '../../ui/app/create-pin/CreatePin';
import {Home} from '../../ui/app/home/Home';
import {Login} from '../../ui/auth/sign-in/Login';
import {SignUp} from '../../ui/auth/sign-up/SignUp';
import {Splash} from '../../ui/auth/splash/SplashScreen';
import {SuccessPage} from '../../ui/auth/success-page/SuccessPage';
import {TellUsMore} from '../../ui/auth/tell-us-more/TellUsMore';
import {WelcomeScreen} from '../../ui/welcome-screen/WelcomeScreen';
import routes from '../routes';

const appRouter = [
  {
    route: routes.homeScreen,
    component: Home,
  },

  {
    route: routes.loginOptionsScreen,
    component: Login,
  },
  {
    route: routes.successPage,
    component: SuccessPage,
  },

  {
    route: routes.tellUsMore,
    component: TellUsMore,
  },
  {
    route: routes.signUpScreen,
    component: SignUp,
  },

  {
    route: routes.welcomeScreen,
    component: WelcomeScreen,
  },

  {
    route: routes.splashScreen,
    component: Splash,
  },
  {
    route: routes.createPin,
    component: CreatePin,
  },
];

export default appRouter;
