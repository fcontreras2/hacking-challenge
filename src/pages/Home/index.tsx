import { useHistory } from "react-router";
import { Fragment, useCallback, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
} from "components/Form/Input";
import Select from "components/Form/Select";
import Button from "components/Button";
import { FormCheckbox } from "components/Form/Checkbox";
import Header from "shared/Header";
import useFetch from "services/useFetch";
import useOrderActions from "providers/Order/actions";
import { Car, DocumentType } from "types/insurance";

import "./styles.scss";

const schema = yup
  .object({
    documentType: yup.number().required("Campo requerido"),
    document: yup
      .string()
      .when("documentType", {
        is: "0",
        then: yup.string().length(8, "Debe contener 8 dígitos"),
        otherwise: yup
          .string()
          .min(8, "Debe contener mínimo 8 dígitos")
          .max(12, "debe contener máximo 12 dígitos"),
      })
      .required("Campo requerido"),
    cellphone: yup
      .string()
      .length(9, "Debe ingresar 9 dígitos")
      .matches(/[9]([0-9]{0,8})/, "Formato incorrecto")
      .required("Campo requerido"),
    plate: yup
      .string()
      .matches(
        /(?:([a-zA-Z]|[0-9])){3}-(?:([a-zA-Z]|[0-9])){3}/,
        "Formato incorrecto de placa"
      )
      .required("Campo requerido"),
    terms: yup.bool().oneOf([true], "Aceptar los términos y condiciones"),
  })
  .required();

const Home = () => {
  const history = useHistory();
  const { setCar } = useOrderActions();
  const [notFound, setNotFound] = useState<boolean>(false);
  const { fetch, loading } = useFetch(true);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      documentType: 0,
    },
    resolver: yupResolver(schema),
  });

  const DOCUMENTS = useMemo(
    () => [
      { value: DocumentType.DNI, label: "DNI", maxLength: 8 },
      { value: DocumentType.CE, label: "CE", maxLength: 12 },
    ],
    []
  );

  const onSubmit = async ({ documentType, document, plate }: any) => {
    if (!loading) {
      setNotFound(false);
      const response = await fetch<Car[]>({
        url: "/cars",
        method: "GET",
        params: {
          documentType,
          document,
          plate,
        },
      });

      if (response.status && response.data?.length > 0) {
        setCar(response.data[0]);
        history.push("/carga-informacion");
      } else {
        setNotFound(true);
      }
    }
  };

  const onKeyPress = useCallback(($event: any) => {
    const { target, key } = $event;
    const { value, name } = target;

    switch (name) {
      case "plate":
        if ((String(value) + key).length === 3) {
          setTimeout(() => {
            setValue("plate", String(value) + key + "-");
          }, 0);
        } else if (
          (String(value) + key).length > 7 ||
          !/[0-9A-Z]/.test(String(key).toUpperCase())
        ) {
          $event.preventDefault();
        }
        break;
      case "cellphone":
        if (
          !/[9]([0-9]{0,8})/.test(String(value) + key) ||
          (String(value) + key).length > 9
        ) {
          $event.preventDefault();
        }
        break;
      case "document":
        if ((String(value) + key).length > DOCUMENTS[getValues("documentType")].maxLength) {
          $event.preventDefault();
        }
    }
  }, [DOCUMENTS, getValues, setValue]);

  const onBlur = useCallback(
    ($event: any) => {
      const { value } = $event.target;
      setValue("plate", value.toUpperCase());
    },
    [setValue]
  );

  const onChangeDocumentType = useCallback(
    (value: number) => {
      setValue("documentType", value);
      setValue("document", "");
    },
    [setValue]
  );


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
            {notFound && (
              <div className="home-errors">
                ¡Tu vehículo no fue encontrado, volver intentar!
              </div>
            )}

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
                  onChange={onChangeDocumentType}
                />
              </div>

              <div className="form__group-center">
                {watch("document") && <FormLabel>Nro. de doc</FormLabel>}
                <FormInput
                  placeholder="Nro. de doc"
                  type="number"
                  onKeyPress={onKeyPress}
                  {...register("document", { minLength: 8, maxLength: 8 })}
                />
              </div>

              {errors.document && (
                <FormError>{errors.document?.message}</FormError>
              )}
            </FormGroup>

            <FormGroup
              className={`form__group mb-3 ${errors.cellphone && "--error"}`}
            >
              {watch("cellphone") && <FormLabel>Celular</FormLabel>}
              <FormInput
                type="number"
                placeholder="Celular"
                onKeyPress={onKeyPress}
                {...register("cellphone")}
              />
              {errors.cellphone && (
                <FormError>{errors.cellphone?.message}</FormError>
              )}
            </FormGroup>

            <FormGroup
              className={`form__group  mb-4 ${errors.plate && "--error"}`}
            >
              {watch("plate") && <FormLabel>Placa</FormLabel>}
              <FormInput
                onKeyPress={onKeyPress}
                onBlurCapture={onBlur}
                placeholder="Placa"
                maxLength={7}
                {...register("plate")}
              />
              {errors.plate && <FormError>{errors.plate?.message}</FormError>}
            </FormGroup>

            <div className="terms mb-3">
              <FormCheckbox
                {...register("terms")}
                className="form__checkbox mr-1"
              />
              <div>
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
                {errors.terms && (
                  <div className="home-errors mt-1">
                    {errors.terms?.message}
                  </div>
                )}
              </div>
            </div>

            <Button loading={loading} type="submit">
              COTÍZALO
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
