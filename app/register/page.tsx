"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [notify, setNotify] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNotify("SMS code sent to your email");
    formRef.current?.reset();
    setTimeout(() => setNotify(""), 4000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Create your account
        </h2>
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="firstName"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="lastName"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Middle Name</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="middleName"
            placeholder="Alexandrovich"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="phone"
            placeholder="+998 90 123 45 67"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="dob"
            placeholder="ДД.ММ.ГГГГ"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="address"
            placeholder="Street, City, Country"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Passport (upload)
          </label>
          <input
            type="file"
            className="w-full rounded-lg border px-4 py-2 bg-white"
            name="passport"
            accept="image/*,.pdf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Selfie with Passport
          </label>
          <input
            type="file"
            className="w-full rounded-lg border px-4 py-2 bg-white"
            name="selfie"
            accept="image/*"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            className="w-full rounded-lg border px-4 py-2 text-lg bg-gray-50"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>
        <Button type="submit" className="w-full mt-2 text-lg font-semibold">
          Register
        </Button>
        {notify && (
          <div className="mt-2 text-center text-green-600 font-medium bg-green-50 rounded-lg py-2">
            {notify}
          </div>
        )}
      </form>
    </div>
  );
}
