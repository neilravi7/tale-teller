const Loader = () => {
  return (
    <div className="container px-5 bg-info-subtle my-3">
      <div className="row align-items-center justify-content-center">
            <iframe 
              src="https://lottie.host/embed/12ce79e3-1d3f-4a42-9c36-18c5f5555373/zy1oN8SYUc.json"
              width={"500px"}
              height={"300px"}
            >
            </iframe>
            <p className="text-info fw-bolder display-6">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;