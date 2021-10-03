import { useCallback, useEffect, useState } from "react";
import "./styles.scss";

type Option = {
  value: string | number;
  label: string;
};

type Props = {
  value: number;
  id: string;
  options: Option[];
  onChange: (value: number) => void;
};

const Select = (props: Props) => {
  const [currentSelected, setCurrentSelected] = useState<Option>();
  const [open, setOpen] = useState<boolean>(false);

  const checkClickOption = useCallback((e) => {
    if (e.target.className === `form__option`) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("click", checkClickOption);
    }

    return () => {
      document.removeEventListener("click", checkClickOption);
    };
  }, [checkClickOption, open]);

  useEffect(() => {
    const defaultValue = props.options.find((e) => e.value === props.value);
    if (defaultValue) {
      setCurrentSelected(defaultValue);
    }
  }, [props.value, props.options]);

  return (
    <div className="form__select">
      <button
        id={props.id}
        className="form__button-main"
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="form__value">{currentSelected?.label}</span>
        <img
          src="/images/arrow.svg"
          alt="Fecha"
          className={`arrow ${open ? "--open" : ""}`}
        ></img>
      </button>
      {open && (
        <div className="form__options">
          {props.options.map((e) => (
            <button
              className="form__option"
              key={String(e.value + "-key")}
              onClick={() => {
                if (e.value !== currentSelected?.value) {
                  props.onChange(Number(e.value));
                }
                setCurrentSelected(e);
              }}
            >
              {e.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
