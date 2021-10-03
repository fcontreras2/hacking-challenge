import { RoutePage } from "types/global";
import Congratulations from "./Congratulations";
import Home from "./Home";
import LoadData from "./LoadData";

const routes: RoutePage[] = [
  { path: '/carga-informacion', component: LoadData, protected: true },
  { path: '/bienvenido', component: Congratulations , protected: true},
  { path: '/', component: Home },
];

export default routes;
