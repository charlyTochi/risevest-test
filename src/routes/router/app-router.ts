import {Review} from './../../ui/app/plan/create-plan/components/Review';
import {CreatePin} from '../../ui/app/create-pin/CreatePin';
import {Home} from '../../ui/app/home/Home';
import {HomeScreen} from '../../ui/app/home/HomeScreen';
import {CreatePlan} from '../../ui/app/plan/create-plan/CreatePlan';
import {PlanForm} from '../../ui/app/plan/create-plan/components/PlanForm';
import {FundPlan} from '../../ui/app/plan/fund-plan/FundPlan';
import {SuccessPage} from '../../ui/auth/success-page/SuccessPage';
import routes from '../routes';
import {ViewPlan} from '../../ui/app/plan/create-plan/components/ViewPlan';
import {ChooseFromPlans} from '../../ui/app/plan/components/ChooseFromPlans';
import {SelectBank} from '../../ui/app/plan/components/SelectBank';

const appRouter = [
  {
    route: routes.home,
    component: Home,
  },
  {
    route: routes.homeScreen,
    component: HomeScreen,
  },
  {
    route: routes.fundPlan,
    component: FundPlan,
  },

  {
    route: routes.viewPlan,
    component: ViewPlan,
  },
  {
    route: routes.createPlan,
    component: CreatePlan,
  },

  {
    route: routes.planForm,
    component: PlanForm,
  },
  {
    route: routes.selectBank,
    component: SelectBank,
  },
  {
    route: routes.chooseFromPlans,
    component: ChooseFromPlans,
  },
  {
    route: routes.review,
    component: Review,
  },

  {
    route: routes.successPage,
    component: SuccessPage,
  },

  {
    route: routes.createPin,
    component: CreatePin,
  },
];

export default appRouter;
