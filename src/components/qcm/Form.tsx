import { Formik, Field, Form } from "formik";
import type { FormikHelpers } from "formik";

type FormDescription = Question[];

type Question = {
  title: string;
  type: "checkbox" | "radio";
  answers?: string[];
};

type Props = {
  formDescription: FormDescription;
  formStyle?: string;
  submitStyle?: string;
};

const Formulary = ({ formDescription, formStyle, submitStyle }: Props) => {
  const initialValues: Record<string, string> = formDescription.reduce(
    (acc, question) => {
      acc[question.title] = "";
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: Record<string, string>,
          { setSubmitting }: FormikHelpers<Record<string, string>>,
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={formStyle}>
          {formDescription.map((question, index) => {
            switch (question.type) {
              case "radio":
                return (
                  <div key={index}>
                    <p>{question.title}</p>
                    {question.answers?.map((answer, ansIndex) => (
                      <div key={ansIndex}>
                        <Field
                          type="radio"
                          id={`${question.title}-${ansIndex}`}
                          name={question.title}
                          value={answer}
                        />
                        <label htmlFor={`${question.title}-${ansIndex}`}>
                          {answer}
                        </label>
                      </div>
                    ))}
                  </div>
                );
              case "checkbox":
                return (
                  <div key={index}>
                    <p>{question.title}</p>
                    {question.answers?.map((answer, ansIndex) => (
                      <div key={ansIndex}>
                        <Field
                          type="checkbox"
                          id={`${question.title}-${ansIndex}`}
                          name={question.title}
                          value={answer}
                        />
                        <label htmlFor={`${question.title}-${ansIndex}`}>
                          {answer}
                        </label>
                      </div>
                    ))}
                  </div>
                );
              default:
                return null;
            }
          })}
          <button className={submitStyle} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Formulary;
