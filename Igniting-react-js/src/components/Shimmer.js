const Shimmer = () => {
  return (
    <>
      <div className="card-shimmer">
        {Array(10)
          .fill("")
          .map((e, i) => (
            <div key={i} className="shimmers"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
