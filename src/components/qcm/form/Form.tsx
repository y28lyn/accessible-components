import { Formik, Form as FormikForm } from "formik";
import RadioButton from "./questions/RadioButton";
import Checkbox from "./questions/Checkbox";

export type FormDescription = Question[];

type Question = {
  title: string;
  type: "checkbox" | "radio";
  answers?: string[];
  correctAnswers: string[];
};

type Props = {
  formDescription: FormDescription;
  formStyle?: string;
  submitStyle?: string;
  questionStyle?: string;
  radioStyle?: string;
  checkboxStyle?: string;
};

const Form = ({
  formDescription,
  formStyle,
  submitStyle,
  questionStyle,
  radioStyle,
  checkboxStyle,
}: Props) => {
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Réponses de l'utilisateur:", values);
            console.log("Réponses correctes:", formDescription);

            const incorrectResponses: {
              question: string;
              correctAnswer: string;
            }[] = [];
            formDescription.forEach((question) => {
              if (question.type === "checkbox") {
                const userResponses = Object.entries(values)
                  .filter(([key, value]) => key === question.title && value)
                  .map(([key]) => key);

                console.log(
                  "Réponses de l'utilisateur pour",
                  question.title + ":",
                  userResponses,
                );
                console.log(
                  "Réponses correctes pour",
                  question.title + ":",
                  question.correctAnswers,
                );

                const isAnyCorrect = userResponses.some((response) =>
                  question.correctAnswers.includes(response),
                );

                if (!isAnyCorrect) {
                  incorrectResponses.push({
                    question: question.title,
                    correctAnswer: question.correctAnswers.join(", "),
                  });
                }
              } else {
                const userResponse = values[question.title];
                if (
                  userResponse &&
                  !question.correctAnswers.includes(userResponse)
                ) {
                  incorrectResponses.push({
                    question: question.title,
                    correctAnswer: question.correctAnswers.join(", "),
                  });
                }
              }
            });
            if (incorrectResponses.length === 0) {
              alert("Toutes vos réponses sont correctes !");
            } else {
              const message = incorrectResponses
                .map(
                  ({ question, correctAnswer }) =>
                    `\n${question} : \n${correctAnswer}`,
                )
                .join("\n");
              alert(
                `Les réponses incorrectes et leurs réponses correctes :\n${message}`,
              );
            }
            setSubmitting(false);
          }, 500);
        }}
      >
        <FormikForm className={formStyle}>
          {formDescription.map((question, index) => {
            switch (question.type) {
              case "radio":
                return (
                  <div
                    key={index}
                    role="radiogroup"
                    aria-labelledby="group_radio"
                  >
                    <p className={questionStyle}>{question.title}</p>
                    {question.answers?.map((answer, ansIndex) => (
                      <RadioButton
                        key={ansIndex}
                        id={`${question.title}-${ansIndex}`}
                        name={question.title}
                        value={answer}
                        label={answer}
                        style={radioStyle}
                      />
                    ))}
                  </div>
                );

              case "checkbox":
                return (
                  <div key={index} role="group" aria-labelledby="group_label">
                    <p className={questionStyle}>{question.title}</p>
                    {question.answers?.map((answer, ansIndex) => (
                      <Checkbox
                        key={ansIndex}
                        id={`${question.title}-${ansIndex}`}
                        name={question.title}
                        value={answer}
                        label={answer}
                        style={checkboxStyle}
                      />
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
        </FormikForm>
      </Formik>
    </>
  );
};

export default Form;
