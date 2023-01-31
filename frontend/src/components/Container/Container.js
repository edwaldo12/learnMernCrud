const Container = ({ children }) => {
  return (
    <div className="min-w-full bg-slate-100 min-h-screen">
      <section className="container mx-auto py-16 px-44">{children}</section>
    </div>
  );
};

export default Container;
