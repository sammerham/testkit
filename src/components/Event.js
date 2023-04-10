import { useState } from "react";
import { AhiInput } from "@azaleahealth/azalea-kit-ui/dist/react";

function Event() {
  const [value, setValue] = useState("");
    console.log('value ->', value)
  return (
    <AhiInput
      value={value}
      onAhiInputChange={(event) => setValue(event.target.value)}
    />
  );
}

export default Event;