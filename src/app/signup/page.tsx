"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Building, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    orgName: "",
    mobile: "",
    address: "Default Address",
    city: "Default City",
    state: "Default State",
    country: "Default Country",
    postalCode: "000000"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Mapping frontend fields to backend expected fields
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        mobile_number: formData.mobile,
        name: formData.orgName, // backend organization name
        address_line_1: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postal_code: formData.postalCode
      };

      const res: any = await api.post('/source/internal/create-organization', payload);
      
      if (res?.result) {
        console.log("Signup successful", res.data);
        router.push('/login?signup=success');
      } else {
        setError(res?.message || "Signup failed. Please check your details.");
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Signup failed. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mobile-container flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col px-6 pt-12 pb-12 overflow-y-auto">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-[#7C2D12] mb-2">Create Account</h1>
        <p className="text-gray-500 text-base mb-8">Join Instalearn and start training</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full px-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full px-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
                required
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Building className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="orgName"
              placeholder="Organization Name"
              value={formData.orgName}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-4 bg-[#F5EFEA] border-none rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#7C2D12] transition-all outline-none"
              required
            />
          </div>

          {/* Location Details (Simplified for now) */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Organization Location</p>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-[#F5EFEA] border-none rounded-xl text-sm text-gray-900 outline-none"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-[#F5EFEA] border-none rounded-xl text-sm text-gray-900 outline-none"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium px-2">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-6 bg-[#7C2D12] text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center pb-8">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-[#7C2D12] font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
