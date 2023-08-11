import Button from "@restart/ui/esm/Button";
import React from "react";

const Sample = () => {
  return (
    <div className="container-md">
      100% wide until small breakpoint
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
        aria-label="default input example"
      />
      <input
        className="form-control form-control-sm"
        type="text"
        placeholder=".form-control-sm"
        aria-label=".form-control-sm example"
      />
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </div>
  );
};

export default Sample;
