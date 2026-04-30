"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, ComponentType, SVGProps } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown, Edit, ImageIcon, Mail } from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ImagePickerFieldProps = {
  imageUrl?: string;
  onImageSelect?: (file: string) => void;
};

function ImagePickerField({ imageUrl, onImageSelect }: ImagePickerFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [localImage, setLocalImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const value = reader.result as string;
      setImageName(file.name);
      setLocalImage(value);
      onImageSelect?.(value);
    };
    reader.readAsDataURL(file);
  };

  const preview = localImage || imageUrl;
  const ActionIcon = localImage ? Edit : ImageIcon;

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="flex w-full items-center rounded-[10px] border border-[#E7E5E4] bg-white p-3 text-left active:opacity-80"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E7E5E4] bg-white">
        {preview ? (
          <img src={preview} alt="" className="h-full w-full object-cover" />
        ) : (
          <ImageIcon className="h-[22px] w-[22px] text-[#1C1917]" />
        )}
      </span>

      <span className="mx-3 min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-[#1C1917]">
          {imageName || "Select Image"}
        </span>
        <span className="mt-0.5 block text-xs text-[#1C1917]">
          Tap to choose image
        </span>
      </span>

      <ActionIcon className="h-[18px] w-[18px] shrink-0 text-primary-brown" />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </button>
  );
}

type InputTextFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: IconComponent;
};

function InputTextField({
  label,
  value,
  onChangeText,
  placeholder,
  type = "text",
  icon: Icon,
}: InputTextFieldProps) {
  return (
    <label className="block w-full">
      <span className="mb-1 block text-sm font-semibold text-[#1C1917]">{label}</span>
      <span className="flex min-h-12 items-center rounded-lg border-2 border-[#E7E5E4] bg-white">
        {Icon ? (
          <span className="flex justify-center pl-3">
            <Icon className="h-5 w-5 text-[rgba(28,25,23,0.45)]" strokeWidth={1.3} />
          </span>
        ) : null}
        <input
          type={type}
          value={value}
          onChange={(event) => onChangeText(event.target.value)}
          placeholder={placeholder || `Enter ${label}`}
          className="min-h-12 flex-1 bg-transparent py-3 pl-2.5 pr-3 text-sm text-[#1C1917] outline-none placeholder:text-[#78716C]"
        />
      </span>
    </label>
  );
}

type MobileInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  onIsdCodeChange?: (value: string) => void;
  isdCode?: string;
};

function MobileInput({
  label,
  value,
  onChangeText,
  onIsdCodeChange,
  isdCode = "+91",
}: MobileInputProps) {
  return (
    <label className="block w-full">
      <span className="mb-1 block text-sm font-semibold text-[#1C1917]">{label}</span>
      <span className="flex min-h-12 items-center rounded-lg border-2 border-[#E7E5E4] bg-white">
        <button
          type="button"
          className="flex items-center px-2 active:opacity-70"
          onClick={() => onIsdCodeChange?.(isdCode)}
        >
          <span className="mr-1 text-sm font-medium text-[#1C1917]">{isdCode}</span>
          <ChevronDown className="h-4 w-4 text-[#78716C]" />
        </button>
        <span className="mx-1.5 h-5 w-px bg-[#E7E5E4]" />
        <input
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={value}
          onChange={(event) => {
            onIsdCodeChange?.(isdCode);
            onChangeText(event.target.value.replace(/[^0-9]/g, ""));
          }}
          placeholder="Enter mobile number"
          className="min-h-12 min-w-0 flex-1 bg-transparent py-3 pr-3 text-sm text-[#1C1917] outline-none placeholder:text-[#78716C]"
        />
      </span>
    </label>
  );
}

export default function EditProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [canEditOrganization] = useState(true);

  const [formData, setFormData] = useState({
    user_info: {
      first_name: "Instalearn",
      last_name: "User",
      mobile_number: "1234567893",
      isd_code: "+91",
      profile_image: "",
    },
    org_info: {
      name: "New Business",
      email: "admin@instalearnapp.com",
      mobile: "+911112223334",
      website: "https://www.training.com",
      logo: "",
      banner_image: "",
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1500);
  };

  return (
    <div className="mobile-container flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-[#E7E5E4] bg-white px-3 pb-3 pt-3">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-6 w-6 items-center justify-center rounded-full active:bg-stone-100"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-[#1C1917]" strokeWidth={2.5} />
          </button>
          <h1 className="text-base font-semibold text-[#1C1917]">Edit Profile</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="space-y-4 p-4 pb-8">
          <section className="space-y-4 rounded-xl bg-white p-4 shadow-[0_4px_8px_rgba(0,0,0,0.06)]">
            <h2 className="text-base font-semibold text-[#1C1917]">Personal Details</h2>

            <ImagePickerField
              imageUrl={formData.user_info.profile_image}
              onImageSelect={(image) =>
                setFormData((prev) => ({
                  ...prev,
                  user_info: { ...prev.user_info, profile_image: image },
                }))
              }
            />

            <InputTextField
              label="First Name"
              value={formData.user_info.first_name}
              onChangeText={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  user_info: { ...prev.user_info, first_name: value },
                }))
              }
            />

            <InputTextField
              label="Last Name"
              value={formData.user_info.last_name}
              onChangeText={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  user_info: { ...prev.user_info, last_name: value },
                }))
              }
            />

            <MobileInput
              label="Mobile Number"
              value={formData.user_info.mobile_number}
              onChangeText={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  user_info: { ...prev.user_info, mobile_number: value },
                }))
              }
              onIsdCodeChange={(isdCode) =>
                setFormData((prev) => ({
                  ...prev,
                  user_info: { ...prev.user_info, isd_code: isdCode },
                }))
              }
            />
          </section>

          {canEditOrganization ? (
            <section className="space-y-4 rounded-xl bg-white p-4 shadow-[0_4px_8px_rgba(0,0,0,0.06)]">
              <h2 className="text-base font-semibold text-[#1C1917]">Organization Details</h2>

              <ImagePickerField
                imageUrl={formData.org_info.logo}
                onImageSelect={(image) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, logo: image },
                  }))
                }
              />

              <ImagePickerField
                imageUrl={formData.org_info.banner_image}
                onImageSelect={(image) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, banner_image: image },
                  }))
                }
              />

              <InputTextField
                label="Organization Name"
                value={formData.org_info.name}
                onChangeText={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, name: value },
                  }))
                }
              />

              <InputTextField
                label="Organization Email"
                value={formData.org_info.email}
                type="email"
                icon={Mail}
                placeholder="Enter your Organization Email"
                onChangeText={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, email: value },
                  }))
                }
              />

              <MobileInput
                label="Organization Contact"
                value={formData.org_info.mobile}
                onChangeText={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, mobile: value },
                  }))
                }
              />

              <InputTextField
                label="Website"
                value={formData.org_info.website}
                onChangeText={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    org_info: { ...prev.org_info, website: value },
                  }))
                }
              />
            </section>
          ) : null}
        </div>
      </main>

      <footer className="mt-auto bg-white px-4 py-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-lg bg-primary-brown py-3 text-center text-xs font-semibold text-white disabled:opacity-70"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </footer>
    </div>
  );
}
