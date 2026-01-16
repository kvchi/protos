import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function ImageUpload({
  label,
  value,
  onChange,
  variant = "default", // "default" | "gallery" | "auth"
}) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(value);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  const handleFile = (file) => {
    if (!file) return;
    onChange(file);
  };

  const openFilePicker = () => inputRef.current?.click();

  return (
    <div className="space-y-2">
      {label && variant === "default" && (
        <p className="text-sm font-semibold text-primary">{label}</p>
      )}

      <div
        onClick={
          variant === "default" || variant === "auth"
            ? openFilePicker
            : undefined
        }
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files[0]);
        }}
        className={`
          cursor-pointer transition rounded-lg
          ${
            variant === "gallery"
              ? "border border-gray-300 bg-secondary p-8 flex flex-col items-center text-center gap-3 max-w-sm"
              : variant === "auth"
              ? "border-2 border-dashed border-gray-300 bg-secondary p-4 flex items-center gap-4"
              : "border-2 border-dashed border-gray-300 bg-secondary hover:bg-gray-100 p-4 flex items-center gap-4"
          }
        `}
      >

        {variant === "default" && (
          <>
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-gray-500">Logo</span>
              )}
            </div>

            <p className="text-sm text-gray-500">
              Drag and drop image or{" "}
              <span className="text-primary">click to upload</span>
            </p>
          </>
        )}


        {variant === "gallery" && (
          <>
            <FiUpload size={36} className="text-primary" />

            <p className="text-sm text-gray-600">
              Drag and drop photos here
            </p>

            <button
              type="button"
              onClick={openFilePicker}
              className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:opacity-90"
            >
              Browse files
            </button>
          </>
        )}

        {variant === "auth" && (
          <>
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {preview ? (
                <span className="text-xs font-medium text-primary">
                  Uploaded
                </span>
              ) : (
                <span className="text-xs text-gray-500">DOC</span>
              )}
            </div>

            <p className="text-sm text-gray-600">
              Drag and drop document for verification
            </p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={
            variant === "auth"
              ? "image/*,.pdf"
              : "image/*"
          }
          hidden
          onChange={(e) => handleFile(e.target.files?.[0] || null)}
        />
      </div>
    </div>
  );
}
