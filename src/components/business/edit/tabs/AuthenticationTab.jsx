import { useState } from "react";
import ImageUpload from "../../../shared/ImageUpload";

export default function AuthenticationTab() {
  const [document, setDocument] = useState(null);

  return (
    <div className="space-y-4 text-primary font-semibold">
      <h1 className="font-bold text-2xl">Authentication</h1>
      <p>KYC Verification</p>

      <div className="max-w-2xl">
        <ImageUpload
          variant="auth"
          value={document}
          onChange={setDocument}
        />
      </div>
    </div>
  );
}
