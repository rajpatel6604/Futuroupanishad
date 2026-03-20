"use client";
import React, { use, useState } from "react";

const Donation = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-[#ed344c] md:mx-4 rounded-[20px] md:rounded-[80px] my-8 py-4">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="md:p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">
              Donation
            </h2>
          </div>

          {/* Donation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Bank Details Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 relative overflow-hidden h-full">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bank Transfer
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Bank Name</p>
                    <div className="flex justify-between items-center bg-blue-50 rounded-lg px-4 py-2">
                      <p className="font-medium">Bank of Baroda (Ganthiyol)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Account Number</p>
                    <div className="flex justify-between items-center bg-blue-50 rounded-lg px-4 py-2">
                      <p className="font-mono font-medium">69240100000441</p>
                      <button
                        onClick={() => copyToClipboard("69240100000441")}
                        className="text-primary-1 hover:text-primary-2 ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">IFSC Code</p>
                    <div className="flex justify-between items-center bg-blue-50 rounded-lg px-4 py-2">
                      <p className="font-mono font-medium">BARB0DBGANT</p>
                      <button
                        onClick={() => copyToClipboard("BARB0DBGANT")}
                        className="text-primary-1 hover:text-primary-2 ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {copied && (
                  <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg text-center text-sm">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>

            {/* QR Code Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 relative overflow-hidden h-full">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Quick Transfer
                  </h3>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="w-56 h-56 bg-white p-4 rounded-xl shadow-md mb-6 flex items-center justify-center">
                    {/* Replace with your QR code image */}
                    <img
                      src="/images/qrcode/qrcode.png"
                      alt="Donation QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-center">
                    Scan this QR code with your banking app to make a quick
                    donation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 text-center mt-8 bg-white rounded-xl">
          <p className="text-md text-gray-600 text-justify leading-relaxed">
              If you wish then please feel free to visit the hospital before donating. For all major donation please drop an email and someone will get in touch with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
