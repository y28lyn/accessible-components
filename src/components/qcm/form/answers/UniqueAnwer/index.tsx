type Props = {
  answers: string[];
};

export const UniqueAnswer = ({ answers }: Props) => {
  return (
    <ul className={}>
      {answers.map((answer) => (
        <li className={} key={}>
          <label className={} for={}>
            {answer}
          </label>
          <input className={} id={} name={} type="radio" />
        </li>
      ))}
    </ul>
  );
};
