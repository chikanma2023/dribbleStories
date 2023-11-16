const Index = ({ className }) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className="flex items-center gap-3">
        <div className="spinner"></div>
        <p>LOADING...</p>
      </div>
    </div>
  );
};

export default Index;
