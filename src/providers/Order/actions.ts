import { useContext } from "react";
import { Car } from "types/insurance";
import { OrderDispatchContext } from "./provider";
import { TOGGLE_COVERAGE, SET_CAR, toggleCoveragePayload, TOTALCOVERAGE_UPDATE } from "./reducer";

const useOrderActions = (): {
  setCar: (payload: Car) => void;
  toggleCoverage: (payload:toggleCoveragePayload) => void;
  totalCoverageUpdate: (payload: number) => void;
} => {
  const dispatch = useContext<any>(OrderDispatchContext);

  const setCar = (payload: Car): void => {
    dispatch({
      type: SET_CAR,
      payload,
    });
  };

  const toggleCoverage = (payload: toggleCoveragePayload): void => {
    dispatch({
      type: TOGGLE_COVERAGE,
      payload,
    });
  };

  const totalCoverageUpdate = (payload: number): void => {
    dispatch({
      type: TOTALCOVERAGE_UPDATE,
      payload,
    });
  };

  return {
    setCar,
    toggleCoverage,
    totalCoverageUpdate,
  };
};

export default useOrderActions;
