const Resume = ({ data }) => {
  return (
    <div className="resume">
      {data.map((heading, index) => (
        <div key={index}>
          <h5>{heading.title}</h5>
          <ul>
            {heading.bulletPoints.map((point, bulletIndex) => (
              <li key={bulletIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Resume;