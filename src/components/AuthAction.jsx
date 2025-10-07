

export default function AuthAction({ page, loading }) {
    const buttonLabel = page === "businessInfo" ? "Add business" : "Sign up"

    const buttonAlignment = page === "businessInfo" ? "items-start" : "items-center";

  return (
    <div className={`md:col-span-2 flex flex-col ${buttonAlignment}`}>
            <p className="font-medium text-sm mt-6">
              By continuing, you agree to{" "}
              <span className="text-[#0E375F]">Protos</span>{" "}
              <span className="text-amber-300 underline">Business Terms</span>{" "}
              and acknowledge our{" "}
              <span className="text-amber-300 underline">Privacy Policy.</span>{" "}
              We may email you about Protos products, services and local events.
              You can unsubscribe at any time.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="mt-8 bg-[#0E375F] py-3 px-4 rounded-lg text-white mb-20 cursor-pointer"
            >
              {buttonLabel}
            </button>
            </div>
  )
}
