import Switch from "components/Switch";
import { useEffect, useRef, useState } from "react";
import { Tab, TabOption } from "types/tabs";
import "./styles.scss";

function Option<T>({
  onChange,
  ...props
}: TabOption<T> & { onChange: (tabOption: TabOption<T> & any) => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const { title, description, icon, active } = props;

  useEffect(() => {
    if (ref.current) ref.current.checked = active;
  }, [active, ref]);

  return (
    <div className="tab-option">
      <img src={icon} className="tab-option__icon" alt={`Icon ${title}`} />
      <div className="tab-option__main">
        <span
          className="tab-option__title d-desktop"
          onClick={() => setOpen(!open)}
        >
          {title}
          <img
            src="/images/arrow.svg"
            className={`${open ? "--open" : ""}`}
            alt="Flecha"
          />
        </span>

        <div className="tab-option__title d-mobile">
          <span>{title}</span>
          <Switch
            ref={ref}
            onClick={() => onChange(props)}
            defaultChecked={Boolean(active)}
          />
        </div>
        <div className="tab-option__add d-desktop">
          <button
            className="button-icon"
            onClick={() => {
              onChange(props);
              if (ref.current) ref.current.checked = Boolean(!active);
            }}
          >
            <img
              src={`/images/icon-${active ? "subtraction" : "plus"}.svg`}
              alt="Icon"
            ></img>
          </button>
          <span>{active ? "QUITAR" : "AGREGAR"}</span>
        </div>

        <div className={`tab-option__content ${open ? "--open" : ""}`}>
          <p>{description}</p>
        </div>

        <button
          className={`tab-option__more d-mobile ${open ? "--open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "VER MENOS" : "VER MÁS"}</span>
          <img
            src={`/images/icon-arrow-${open ? "gray" : "acian"}.svg`}
            alt="Acian"
          />
        </button>
      </div>
    </div>
  );
}

type Props<T> = {
  title: string;
  actives: {
    [idOption: string]: any;
  };
  tabs: Tab<T>[];
  onClickOption: (tab: TabOption<T> | any) => void;
};

function Tabs<T>({ title, tabs, actives, onClickOption }: Props<T>) {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="tabs">
      <h5 className="tabs__title  mb-4 mt-5">{title}</h5>
      <div className="tabs__nav">
        {tabs.map((tab, index) => (
          <button
            className={`tabs__nav-option ${active === index ? "--active" : ""}`}
            key={tab.title}
            onClick={() => setActive(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__options">
        {tabs[active].options.map((option: any) => (
          <Option
            key={option.title}
            active={Boolean(actives[`${option.id}`])}
            onChange={onClickOption}
            {...option}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
