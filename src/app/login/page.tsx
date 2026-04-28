"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader } from "lucide-react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@instalearnapp.com");
  const [password, setPassword] = useState("admin@123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res: any = await api.post('/user/login', {
        email,
        password,
        login_provider: 'email-password'
      });
      
      if (res?.result && res?.data?.access) {
        // Save tokens and profile
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        localStorage.setItem('user_profile', JSON.stringify(res.data.user));
        
        // Success feedback
        console.log("Login successful", res.data);
        router.push('/dashboard');
      } else {
        setError(res?.message || "Invalid credentials. Please try again.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Connection failed. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="mobile-container flex flex-col min-h-screen justify-center"
      style={{ backgroundColor: "#ffffff", paddingLeft: "16px", paddingRight: "16px" }}
    >
      {/* Logo */}
      <div className="flex justify-center items-center" style={{ paddingBottom: "16px" }}>
        <img
          src="/instalearn.png"
          alt="Instalearn"
          style={{ width: "70%", height: "120px", objectFit: "contain" }}
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0px" }}>

        {/* Title */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#7C2D12",
            fontFamily: "Inter, sans-serif",
            marginBottom: "4px",
          }}
        >
          Login
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#1C1917",
            fontFamily: "Inter, sans-serif",
            marginBottom: "12px",
          }}
        >
          Enter your details to log in
        </p>

        {/* Email Field */}
        <div style={{ width: "100%", marginBottom: "15px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#1C1917", marginBottom: "4px", fontFamily: "Inter, sans-serif" }}>
            Email
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              minHeight: "48px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: error ? "#B91C1C" : "#E7E5E4",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ paddingLeft: "12px", display: "flex", alignItems: "center" }}>
              <Mail size={20} color="rgba(28,25,23,0.45)" strokeWidth={1.3} />
            </div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              style={{
                flex: 1,
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "10px",
                paddingRight: "12px",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                color: "#1C1917",
                background: "transparent",
                border: "none",
                outline: "none",
              }}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div style={{ width: "100%", marginBottom: "15px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#1C1917", marginBottom: "4px", fontFamily: "Inter, sans-serif" }}>
            Password
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              minHeight: "48px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: error ? "#B91C1C" : "#E7E5E4",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ paddingLeft: "12px", display: "flex", alignItems: "center" }}>
              <Lock size={20} color="rgba(28,25,23,0.45)" strokeWidth={1.3} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              style={{
                flex: 1,
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "10px",
                paddingRight: "4px",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                color: "#1C1917",
                background: "transparent",
                border: "none",
                outline: "none",
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                paddingLeft: "12px",
                paddingRight: "12px",
                display: "flex",
                alignItems: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword
                ? <EyeOff size={20} color="rgba(28,25,23,0.45)" strokeWidth={1.3} />
                : <Eye size={20} color="rgba(28,25,23,0.45)" strokeWidth={1.3} />
              }
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "#B91C1C", fontSize: "12px", marginBottom: "8px", fontFamily: "Inter, sans-serif" }}>
            {error}
          </p>
        )}

        {/* Other Login Options */}
        <Link
          href="/otp-login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#7C2D12",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            textDecoration: "none",
            marginBottom: "16px",
          }}
        >
          Other Login Options
          <ArrowRight size={16} color="#7C2D12" strokeWidth={2.6} />
        </Link>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: loading ? "rgba(124,45,18,0.6)" : "#7C2D12",
            color: "#FFFFFF",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.3s ease",
          }}
        >
          {loading ? (
            <>
              <Loader size={18} className="animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
