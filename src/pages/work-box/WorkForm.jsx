import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CheckboxOfTermsAndPrivacy } from "src/components/CheckboxOfTermsAndPrivacy";
import { useState } from "react";

export const WorkForm = ({ status }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    file: "", // Inicialmente el campo de archivo está vacío
  };
  const [checkBoxConfirmation, setcheckBoxConfirmation] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Número de teléfono inválido (10 dígitos)")
      .required("El teléfono es obligatorio"),
    message: Yup.string().max(
      500,
      "El mensaje debe tener un máximo de 500 caracteres"
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Manejo del envío del formulario
    console.log(values);
    alert("mensaje enviado");
    resetForm();
    status(false);
  };

  return (
    <div className="workForm">
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Nombre
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </label>

              <label htmlFor="email">
                Correo Electrónico
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </label>

              <label htmlFor="phone">
                Teléfono
                <Field type="text" id="phone" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />
              </label>

              <label htmlFor="message">
                Mensaje
                <Field as="textarea" id="message" name="message" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </label>

              <label htmlFor="file" id="fileLabel">
                Añade tu CV
                <Field type="file" id="file" name="file" />
                <ErrorMessage name="file" component="div" className="error" />
              </label>
              <CheckboxOfTermsAndPrivacy state={setcheckBoxConfirmation}/>
              <button type="submit" disabled={isSubmitting} id="submitButton">
                Enviar
              </button>
            </form>
          )}
        </Formik>
        <button onClick={() => status(false)} id="close">
          Cerrar
        </button>
      </div>
    </div>
  );
};
