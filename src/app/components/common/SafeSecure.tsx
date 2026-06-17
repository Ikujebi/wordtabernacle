"use client";

import { FC } from "react";
import { Divider } from "antd";

const SafeSecure: FC = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 lg:mx-10 mb-12 p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm items-center justify-between gap-6 md:gap-4">
      {/* Block 1 */}
      <div className="flex-1 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
            Easy and Convenient
          </h2>
          <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
            Apply for Training, Track your application, check your Postings, Result and much more Online.
          </p>
        </div>
      </div>

      {/* Vertical Divider for desktop, Horizontal for mobile */}
      <Divider type="vertical" className="hidden md:block h-12 border-zinc-200" />
      <Divider type="horizontal" className="block md:hidden my-1 border-zinc-100" />

      {/* Block 2 */}
      <div className="flex-1 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
            Safe and Secure
          </h2>
          <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
            All user Interactions &amp; Transactions are secured using industry best standards.
          </p>
        </div>
      </div>

      {/* Vertical Divider for desktop, Horizontal for mobile */}
      <Divider type="vertical" className="hidden md:block h-12 border-zinc-200" />
      <Divider type="horizontal" className="block md:hidden my-1 border-zinc-100" />

      {/* Block 3 */}
      <div className="flex-1 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-zinc-900 text-sm font-black tracking-wider uppercase">
            Flexible Payment
          </h2>
          <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
            Manage Training Processes; Access e-Payment Options; Use on any Device: PC, Tablet, Mobile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeSecure;