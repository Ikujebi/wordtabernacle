"use client";

import { FC } from "react";
import { Divider } from "antd";
import { HiSparkles, HiShieldCheck, HiDevicePhoneMobile } from "react-icons/hi2";

const SafeSecure: FC = () => {
  return (
    <div className="mx-4 lg:mx-10 mb-12 bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md/50 transition-shadow duration-300">
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4">
        
        {/* Block 1: Easy & Convenient */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 p-2 rounded-2xl transition-colors duration-200 hover:bg-zinc-50/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-500 shrink-0 shadow-sm shadow-rose-500/5">
            <HiSparkles className="text-xl" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
              Easy &amp; Convenient
            </h2>
            <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-xs">
              Support the kingdom quickly. Select your target fund, choose your preference, and give in seconds from anywhere.
            </p>
          </div>
        </div>

        {/* Dividers (Desktop/Mobile) */}
        <Divider type="vertical" className="hidden md:block h-auto self-stretch border-zinc-200/80 my-2" />
        <Divider type="horizontal" className="block md:hidden my-1 border-zinc-100" />

        {/* Block 2: Safe & Secure */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 p-2 rounded-2xl transition-colors duration-200 hover:bg-zinc-50/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 text-rose-400 shrink-0 shadow-sm">
            <HiShieldCheck className="text-xl" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
              Safe &amp; Secure
            </h2>
            <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-xs">
              Your financial stewardship is fully guarded. All online transactions use industry-standard encryption protocols.
            </p>
          </div>
        </div>

        {/* Dividers (Desktop/Mobile) */}
        <Divider type="vertical" className="hidden md:block h-auto self-stretch border-zinc-200/80 my-2" />
        <Divider type="horizontal" className="block md:hidden my-1 border-zinc-100" />

        {/* Block 3: Flexible Stewardship */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 p-2 rounded-2xl transition-colors duration-200 hover:bg-zinc-50/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 text-zinc-600 shrink-0 shadow-sm border border-zinc-100">
            <HiDevicePhoneMobile className="text-xl" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
              Flexible Stewardship
            </h2>
            <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-xs">
              Give your tithes or special building offerings seamlessly on any device—optimized for your smartphone, tablet, or desktop.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SafeSecure;