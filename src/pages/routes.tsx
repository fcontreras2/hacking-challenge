import { RoutePage } from "types/global";
import Congratulations from "./Congratulations";
import Home from "./Home";
import LoadData from "./LoadData";

const routes: RoutePage[] = [
  { path: '/carga-informacion', component: LoadData },
  { path: '/bienvenido', component: Congratulations },
  { path: '/', component: Home },
];

export default routes;
