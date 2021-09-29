import Button from "components/Button";
import {
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "components/Form/Input";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Header from "shared/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./styles.scss";
import Select from "components/Form/Select";
import { FormCheckbox } from "components/Form/Checkbox";

const schema = yup
  .object({
    type: yup.number().required("Campo requerido"),
    document: yup.string().required("Campo requerido"),
    cellphone: yup.string().required("Campo requerido"),
    plate: yup.string().required("Campo requerido"),
  })
  .required();

const DOCUMENTS = [
  { value: 0, label: "DNI" },
  { value: 1, label: "CE" },
];

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Fragment>
      <Helmet>
        <title>Rimac - Seguro vehicular Tracking</title>
      </Helmet>
      <Header />
      <div className="container --reverse">
        <div className="banner">
          <img
            src="/images/home-people.svg"
            className="banner__image d-desktop"
            alt="Persona"
          />
          <div className="banner__titles">
            <p>¡NUEVO!</p>
            <h2>
              Seguro <span className="bold-title">Vehicular</span>
            </h2>
            <h4>
              <span>Tracking</span>
            </h4>
            <p>Cuéntanos donde le harás seguimiento a tu seguro</p>
          </div>
          <p className="banner__copyright d-desktop">
            © 2021 RIMAC Seguros y Reaseguros.
          </p>
        </div>
        <div className="form-home">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6 className="form-home__title mb-3">Déjanos tus datos</h6>

            <FormGroup
              className={`form__group --select mb-3 ${
                errors.document ? "--error" : ""
              }`}
            >
              <div className="form__group-left">
                <Select
                  id="document"
                  options={DOCUMENTS}
                  value={0}
                  onChange={() => {}}
                />
              </div>

              <div className="form__group-center">
                {watch("document") && <FormLabel>Nro. de doc</FormLabel>}
                <FormInput
                  placeholder="Nro. de doc"
                  {...register("document")}
                />
              </div>

              {errors.document && (
                <FormError>{errors.document?.message}</FormError>
              )}
            </FormGroup>

            <FormGroup
              className={`form__group mb-3 ${errors.document && "--error"}`}
            >
              {watch("cellphone") && <FormLabel>Celular</FormLabel>}
              <FormInput placeholder="Celular" {...register("cellphone")} />
              {errors.cellphone && (
                <FormError>{errors.cellphone?.message}</FormError>
              )}
            </FormGroup>

            <FormGroup
              className={`form__group  mb-4 ${errors.document && "--error"}`}
            >
              {watch("plate") && <FormLabel>Placa</FormLabel>}
              <FormInput placeholder="Placa" {...register("plate")} />
              {errors.plate && <FormError>{errors.plate?.message}</FormError>}
            </FormGroup>

            <div className="terms mb-3">
              <FormCheckbox className="form__checkbox mr-1" />
              <p>
                Acepto la{" "}
                <a
                  href="https://www.rimac.com.pe/uploads/Politica_Proteccion_de_Datos_Personales_POL_2437.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Protección de Datos Personales{" "}
                </a>{" "}
                y los
                <a
                  href="https://www.rimac.com.pe/uploads/Condiciones_generales_de_contrataci%C3%B3n.pdf?_ga=2.21655483.1001281860.1620774611-1895881966.1620658317"
                  target="_blank"
                  rel="noreferrer"
                >
                  Términos y Condiciones.
                </a>
              </p>
            </div>

            <Button>COTÍZALO</Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
