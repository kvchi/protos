import { useState, useEffect } from "react";
import FormInput from "../../../shared/FormInput";

export default function LocationTab({ business }) {
  const [streetAddress, setStreetAddress] = useState(business?.location ?? "");

  useEffect(() => {
    if (business?.location) setStreetAddress(business.location);
  }, [business?.id, business?.location]);

  return (
    <div className="space-y-6 pt-6">
      <h2 className="text-lg font-semibold text-primary">
        Location
      </h2>

      <div className="max-w-xl space-y-5">
        <FormInput label="State" placeholder="Lagos" />
        <FormInput label="City" placeholder="Lekki" />
        <FormInput label="Local Government" placeholder="Lekki" />
        <FormInput
          label="Street Address"
          placeholder="12 Admiralty Way"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <FormInput label="Website" placeholder="Yemkemo.com" />
      </div>
    </div>
  );
}
