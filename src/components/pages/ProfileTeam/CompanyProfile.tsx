"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import { useState } from "react";

export default function CompanyProfile() {
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [vatTax, setVatTax] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted");
   }
   
  return (
    <Card className="!bg-bgPrimary/5">
      <h2 className="mb-6">Company Profile</h2>
      <Card>
        <div className="flex items-center space-x-4 mb-5">
          <Image
            src="/user-image.jpg"
            alt="avatar"
            width={60}
            height={60}
            className="rounded-2xl"
          />
          <div className="space-y-1.5">
            <h3 className="text-xl font-medium text-textPrimary">Home Management</h3>
            <p>Suite 481 52706 Adeline Court, New Larryland</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Address"
                  type="text"
                  placeholder="Enter Address Here"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Suite 481 52706 Adeline Court, New Larryland"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Input
                  label="VAT/Tax No."
                  type="text"
                  placeholder="FR12545678801"
                  value={vatTax}
                  onChange={(e) => setVatTax(e.target.value)}
                  required
                />
              </div>

              <div>
                <Input
                  label="Phone Number"
                  type="text"
                  placeholder="+33 1 123 45 679"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </Card>
    </Card>
  );
}
