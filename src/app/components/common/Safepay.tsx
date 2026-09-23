"use client";

import { FC } from "react";
import { Divider } from "antd";
import {
  HiSparkles,
  HiShieldCheck,
  HiDevicePhoneMobile,
  HiXMark,
} from "react-icons/hi2";

export interface SafepayProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  fund: string;
  note: string;
}

const Safepay: FC<SafepayProps> = ({ isOpen, onClose, amount, fund, note }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl md:p-8">
        {/* Modal Header & Close Button */}
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div>
            <h2 className="text-lg font-black uppercase tracking-wider text-zinc-900">
              Confirm Contribution
            </h2>
            <p className="text-xs font-medium text-zinc-500">
              Review your details before proceeding to payment gateway.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
            aria-label="Close modal"
          >
            <HiXMark className="text-xl" />
          </button>
        </div>

        {/* Payment Summary */}
        <div className="my-6 space-y-3 rounded-2xl bg-zinc-50 p-5 border border-zinc-100">
          <div className="flex justify-between text-xs">
            <span className="font-bold text-zinc-400 uppercase tracking-wider">Fund</span>
            <span className="font-black text-zinc-800 uppercase">{fund}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="font-bold text-zinc-400 uppercase tracking-wider">Amount</span>
            <span className="font-mono text-base font-bold text-rose-600">₦{amount}</span>
          </div>
          {note && (
            <div className="flex justify-between text-xs border-t border-zinc-200/60 pt-2">
              <span className="font-bold text-zinc-400 uppercase tracking-wider">Note</span>
              <span className="font-medium text-zinc-600">{note}</span>
            </div>
          )}
        </div>

        {/* Feature Badges */}
        <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
            {/* Block 1 */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-50 text-rose-500 shrink-0">
                <HiSparkles className="text-lg" />
              </div>
              <div>
                <h3 className="text-zinc-900 text-[11px] font-black tracking-wider uppercase">
                  Easy &amp; Convenient
                </h3>
                <p className="text-zinc-500 text-[10px] font-medium leading-tight">
                  Give in seconds from anywhere.
                </p>
              </div>
            </div>

            <Divider type="vertical" className="hidden md:block h-auto my-1 border-zinc-200" />

            {/* Block 2 */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 text-rose-400 shrink-0">
                <HiShieldCheck className="text-lg" />
              </div>
              <div>
                <h3 className="text-zinc-900 text-[11px] font-black tracking-wider uppercase">
                  Safe &amp; Secure
                </h3>
                <p className="text-zinc-500 text-[10px] font-medium leading-tight">
                  Protected with end-to-end encryption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            alert("Redirecting to payment gateway...");
            onClose();
          }}
          className="w-full rounded-xl bg-rose-600 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-rose-700 active:scale-[0.99]"
        >
          Pay ₦{amount} Now
        </button>
      </div>
    </div>
  );
};

export default Safepay;