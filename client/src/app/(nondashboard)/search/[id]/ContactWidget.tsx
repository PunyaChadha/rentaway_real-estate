import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ContactWidget = ({ onOpenModal }: ContactWidgetProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();

  const handleButtonClick = () => {
    if (authUser) {
      onOpenModal();
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className="bg-white border border-[#e0e0e2] rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Property */}
      <div className="flex items-center gap-5 mb-4 border border-[#e0e0e2] p-4 rounded-xl">
        <div className="flex items-center p-4 bg-[#040405] rounded-full">
          <Phone className="text-[#fcfcfc]" size={15} />
        </div>
        <div>
          <p>Contact This Property</p>
          <div className="text-lg font-bold text-[#111113]">
            (+91) 98291 35463
          </div>
        </div>
      </div>

      <Button
        className="w-full bg-[#27272a] text-white hover:bg-[#57575f]"
        onClick={handleButtonClick}
      >
        {authUser ? "Submit Application" : "Sign In to Apply"}
      </Button>

      <hr className="my-4" />
      <div className="text-sm">
        <div className="text-[#57575f] mb-1">Language: English, Bahasa.</div>
        <div className="text-[#57575f]">
          Open by appointment on Monday - Sunday
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;