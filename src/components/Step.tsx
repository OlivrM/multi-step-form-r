type Props = {
  title: string;
  resume?: string;
};

const Step = (props: Props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.resume}</p>
      </div>
    </div>
  );
};

export default Step;
