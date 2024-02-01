import "../../styles/StylesForm/rightform.css";
import { useState, useEffect } from "react";
import { camposPrimerPaso, camposSegundoPaso } from "./objetosForm";

function FormularioReserva({ campos }) {
  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    const defaultValuesObj = {};
    campos.forEach((campo) => {
      if (campo.type === "select" && campo.options) {
        defaultValuesObj[campo.id] =
          campo.options.find((option) => option.disabled)?.value || "";
      }
    });
    setDefaultValues(defaultValuesObj);
  }, [campos]);

  const renderCampos = () => {
    return campos.map((campo, index) => {
      const commonProps = {
        key: index,
        id: campo.id || `campo-${index}`,
        name: campo.name || `campo-${index}`,
      };

      if (campo.type === "input") {
        return (
          <div className="input-frm" key={index}>
            <input
              className="input-size"
              type={campo.inputType}
              placeholder={campo.placeholder}
              {...commonProps}
            />
          </div>
        );
      } else if (campo.type === "select") {
        return (
          <div className="select-frm" key={index}>
            <select
              {...commonProps}
              className="select-size"
              defaultValue={defaultValues[campo.id] || ""}
            >
              {campo.options.map((option, optionIndex) => (
                <option
                  key={optionIndex}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return <form className="formulario-reserva">{renderCampos()}</form>;
}

export const steps = [
  {
    title: "",
    content: <FormularioReserva campos={camposPrimerPaso} />,
  },
  {
    title: "",
    content: <FormularioReserva campos={camposSegundoPaso} />,
  },
  {
    title: "",
    content: "Check Page",
  },
];
