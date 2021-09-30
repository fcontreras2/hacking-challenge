import { useState } from "react";
import { Tab, TabOption } from "types/tabs";
import "./styles.scss";

type Props = {
  title: string;
  tabs: Tab[];
  onChange: (tab: Tab) => void;
};

const Option = ({ title, description, icon }: TabOption) => {
  const [open, setOpen] = useState<boolean>(false);

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

        <span className="tab-option__title d-mobile">{title}</span>
        <div className="tab-option__add d-desktop">
          <button className="button-icon">
            <img src="/images/icon-plus.svg" alt="Icon"></img>
          </button>
          <span>AGREGAR</span>
        </div>
        <div className={`tab-option__content ${open ? "--open" : ""}`}>
          <p>{description}</p>
        </div>
        <button
          className={`tab-option__more d-mobile ${open ? "--open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "VER MENOS" : "VER MÁS"}</span>
          <img src={`/images/icon-arrow-${open ? 'gray': 'acian'}.svg`} alt="Acian" />
        </button>
      </div>
    </div>
  );
};

const Tabs = ({ title, tabs, onChange }: Props) => {
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
        {tabs[active].options.map((option) => (
          <Option key={option.title} {...option} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
