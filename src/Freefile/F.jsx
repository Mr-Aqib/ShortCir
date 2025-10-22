<div className="container my-4 bg-white rounded-4">
  <div className="row g-3">
    {proddb?.map((items, index) => (
      <Products key={index} {...items} />
    ))}
  </div>
</div>;
