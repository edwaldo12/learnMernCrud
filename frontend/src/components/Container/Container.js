const Container = ({ children }) => {
  return (
    <div className="min-w-full bg-slate-100 min-h-screen">
      <section className="container">{children}</section>
    </div>
  );
};

export default Container;
