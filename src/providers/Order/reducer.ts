import { ActionsProps } from "types/global";
import { Car, Coverage } from "types/insurance";

export type toggleCoveragePayload = {
  id: number;
  price: number;
  exonerated: boolean;
}

export interface OrderState {
  car?: Car;
  coverage?: Coverage;
  cart: {
    priceBase: number; // Precio base
    subTotal?: number; // Monto
    totalCoverage?: number; // Suma del input
    total?: number; // Calculo final según condiciones (> 16000 / quitar cobertura exoneradas)
    coverageSelected: {
      [covegare:string]: toggleCoveragePayload
    },
  }
}

export const SET_CAR = 'SET_CAR';
export const TOGGLE_COVERAGE = 'TOGGLE_COVERAGE';
export const TOTALCOVERAGE_UPDATE = 'TOTALCOVERAGE_UPDATE';

function OrderReducer(
  state: OrderState,
  action: ActionsProps<any>,
): OrderState {
 
  const nextCart = {...state.cart}

  switch (action.type) {
    case SET_CAR:
      return {
        ...state,
        car: action.payload,
      };

    case TOGGLE_COVERAGE:

      // Agregar
      if (!nextCart.coverageSelected[`${action.payload.id}`]) {
        const newCoverage: {
          [covegare: string]: toggleCoveragePayload
        } = {};

        newCoverage[`${action.payload.id}`] = action.payload;

        nextCart.coverageSelected = {
          ...nextCart.coverageSelected,
          ...newCoverage
        };
      } else { // Eliminar
        delete nextCart.coverageSelected[action.payload.id];
      }


      return {
        ...state,
        cart: { ...nextCart}
      }

    case TOTALCOVERAGE_UPDATE: 
      
    nextCart.totalCoverage = action.payload
      return {
        ...state,
        cart: nextCart
      }

    default:
      throw new Error();
  }
}

export default OrderReducer;
