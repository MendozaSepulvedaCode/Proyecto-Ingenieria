import React, { useState } from "react";
import "../../styles/StylesForm/rightform.css";
import LogoUtb from "../../assets/logo_utb.png";
import { Button, message, Steps } from "antd";
import { steps } from "./Steps";

function RightForm() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="rg-form">
      <div className="cnt-form">
        <img src={LogoUtb} alt="Utb" className="img-lg-utb" />
        <Steps current={current} items={items} />
        <div className="content-form">{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Siguiente
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Finalizar
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Anterior
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightForm;
