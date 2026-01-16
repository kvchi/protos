import FormInput from "../../../shared/FormInput";

export default function SocialsTab() {
  return (
    <div>
        <h1 className="text-primary font-semibold mb-4 ">Social Handles</h1>

         <div className="max-w-xl space-y-5">
                <FormInput label="Facebook" placeholder="Yemkemo" />
                <FormInput label="Instagram" placeholder="Lekki" />
                <FormInput label="X" placeholder="Lekki" />
                <FormInput label="LinkedIn" placeholder="12 Admiralty Way" />
                <FormInput label="Youtube" placeholder="Yemkemo.com" />
                <FormInput label="Snapchat" placeholder="Yemkemo.com" />
                <FormInput label="TikTok" placeholder="Yemkemo.com" />
                <FormInput label="Skype" placeholder="Yemkemo.com" />
              </div>
    </div>
  )
}
