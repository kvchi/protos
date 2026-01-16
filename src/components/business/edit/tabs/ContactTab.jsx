import FormInput from "../../../shared/FormInput";

export default function ContactTab() {
  return (
    <div className="space-y-6 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary">Contact</h2>
        <button className="text-sm text-primary font-medium flex items-center gap-1">
          <span className="text-lg">+</span>
          Add contact
        </button>
      </div>

      <div className="max-w-xl space-y-5">
        <FormInput
          label="Full name"
          placeholder="Jason Racky"
        />

        <FormInput
          label="Phone"
          type="tel"
          placeholder="09044004404"
        />

        <FormInput
          label="Your Email Address"
          type="email"
          placeholder="Yemkemo@gmail.com"
        />
      </div>
    </div>
  );
}
