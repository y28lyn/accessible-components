type FormDescription = Question[];

type Question = {
  title: string;
  type: "checkbox" | "radio";
  answers?: string[];
};

type Props = {
  formDescription: FormDescription;
  formStyle?: "default" | "inline";
};

const Form = ({ formDescription, formStyle = "default" }: Props) => {
  return (
    <form
      style={{ display: formStyle === "inline" ? "inline-block" : "block" }}
    >
      {formDescription.map((question, index) => {
        switch (question.type) {
          case "radio":
            return (
              <div key={index}>
                <p>{question.title}</p>
                {question.answers?.map((answer, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={`${question.title}-${index}`}
                      name={question.title}
                      value={answer}
                    />
                    <label htmlFor={`${question.title}-${index}`}>
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
                {question.answers?.map((answer, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`${question.title}-${index}`}
                      name={question.title}
                      value={answer}
                    />
                    <label htmlFor={`${question.title}-${index}`}>
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
    </form>
  );
};

export default Form;
