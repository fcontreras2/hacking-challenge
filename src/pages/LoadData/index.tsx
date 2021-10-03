import { Fragment, useCallback, useContext, useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import Header from "shared/Header";
import InputAccount from "./InputAccount";
import Summary from "./Summary";
import SideBar from "./SideBar";
import "./styles.scss";
import Tabs from "shared/Tabs";
import { OrderState } from "providers/Order/reducer";
import { OrderDataContext } from "providers/Order/provider";
import useFetch from "services/useFetch";
import { Coverage, CoverageOption } from "types/insurance";
import { Tab, TabOption } from "types/tabs";
import Spinner from "components/Spinner";
import useOrderActions from "providers/Order/actions";

const LoadData = () => {
  const { car, cart } = useContext<OrderState>(OrderDataContext);
  const { fetch, loading } = useFetch({ loading: true });
  const { toggleCoverage } = useOrderActions()
  const [coverage, setCovergas] = useState<Tab<Coverage>[]>([]);

  const [coverageSelected, setCoverageSelected] = useState<any>();
  const loadCoverages = useCallback(async () => {
    const response = await fetch<Tab<Coverage>[]>({
      url: "/coverage",
      method: "GET",
    });

    setCovergas(response.data);

  }, [fetch]);


  const handleClickOption = (({id, price, exonerated }:TabOption<CoverageOption> ) => {
    toggleCoverage({
      id,
      price,
      exonerated
    })
  });

  useEffect(() => {
    loadCoverages();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cart.coverageSelected) setCoverageSelected(cart.coverageSelected)
    return () => {
      setCoverageSelected({})
    }
  }, [cart])

  return (
    <Fragment>
      <Header variant="white" />
      <div className="wrapper-content">
        <div className="container">
          <SideBar />
          <div className="content">
            <Link className="button-back d-desktop" to={"/"}>
              <button>
                {" "}
                <img src="/images/arrow.svg" alt="Fecha" />
              </button>
              <span>VOLVER</span>
            </Link>
            <div className="main mt-3">
              <div className="info">
                <div className="info__title mb-5">
                  <h6 className="mb-1 d-mobile">Mira las coberturas</h6>

                  <h6 className="mb-1 d-desktop">
                    ¡Hola, <span>{car?.name}!</span>
                  </h6>
                  <p>Conoce las coberturas para tu plan</p>
                </div>
                <div className="info__card mb-6">
                  <span>Placa: {car?.plate}</span>
                  <h6>
                    {car?.brand} {car?.year} {car?.model}
                  </h6>
                </div>
                <InputAccount />
                {loading ? (
                  <Spinner className="loader --red" />
                ) : (
                  <Tabs
                    title="Agrega o quita coberturas"
                    tabs={coverage}
                    actives={coverageSelected || {}}
                    onClickOption={handleClickOption}
                  />
                )}
              </div>
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadData;
