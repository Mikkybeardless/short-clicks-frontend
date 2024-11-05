/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { GoCopy } from "react-icons/go";
import { BsQrCode } from "react-icons/bs";
import { customUrl, generateQRcode } from "@/app/lib/api";
import { CustomUrlFormData, QRcodeFormData, QRRes } from "@/app/types";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { URLSpinner } from "./common/spinner";
import { QRcode } from "./genQRcode";

const CustomUrlForm = () => {
  const [formData, setFormData] = useState<CustomUrlFormData>({
    origUrl: "",
    customDomain: "",
    customSlug: "",
    shortenedUrl: [],
    isRes: false,
    isSpinning: false,
    error: "",
  });

  const [qrData, setQrData] = useState<QRcodeFormData>({
    qrCode: "",
    isQR: false,
    qrError: "",
  });

  const {
    origUrl,
    shortenedUrl,
    customDomain,
    customSlug,
    isRes,
    isSpinning,
    error,
  } = formData;

  const { qrCode, isQR, qrError } = qrData;
  const token: string | null = localStorage.getItem("token");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
    setFormData({ ...formData, isSpinning: true });

    const data: any = await customUrl(token, origUrl, customDomain, customSlug);

    if (!data.statusCode || data.statusCode !== 201) {
      console.log("Shortening URL unsuccessful:", data);
      setFormData({ ...formData, error: data.message });
      return;
    }
    console.log("URL successful shortened:", data);
    const { shortUrl } = data.data;

    setFormData({
      ...formData,
      isRes: true,
      isSpinning: false,
      shortenedUrl: [...formData.shortenedUrl, shortUrl], 
      error: "", 
      origUrl: "",  
      customDomain: "",
      customSlug: "",
    });
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).select();
  };

  const handleCopy = () => {
    const copyText =
      (document.getElementById("shortenedUrl") as HTMLInputElement)?.value || "";
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleQRcode = async (url: string) => {
    console.log("clicked");
    const data: QRRes | any = await generateQRcode(token, url);
    if (!data.statusCode || data.statusCode !== 200) {
      console.log("Generating QR code unsuccessful:", QRcode);
      setQrData({ ...qrData, qrError: data.message });
      return;
    }
    console.log(data);

    setQrData({ ...qrData, qrCode: data.QrCode, isQR: true, qrError: "" });
  };

  const inputStyle =
    "bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full";
  return (
    <>
      <form id="urlForm" onSubmit={handleSubmit} className="input-group ">
        {isQR && (
          <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center z-20">
            
            <QRcode code={qrCode} />
            <button className="btn btn-accent text-white" onClick={()=> setQrData({...qrData, isQR: false})}>close </button>
          </div>
        )}

        {qrError && (
          <div className="absolute z-20">
            <p>{qrError}</p>
          </div>
        )}

        <div className="p-3 md:px-[25rem] text-center flex flex-col gap-2">
          <div>
            <label htmlFor="url">
              <input
                type="text"
                name="origUrl"
                id="url"
                value={origUrl}
                onChange={handleChange}
                placeholder="Enter your long URL"
                className={`${inputStyle}`}
              />
            </label>
          </div>
          <div>
            <label htmlFor="customDomain">
              <input
                type="text"
                name="customDomain"
                id="customDomain"
                value={customDomain}
                onChange={handleChange}
                placeholder="Enter your Custom Domain/Optional"
                className={`${inputStyle}`}
              />
            </label>
          </div>
          <div>
            <label htmlFor="customSlug">
              <input
                type="text"
                name="customSlug"
                id="customSlug"
                value={customSlug}
                onChange={handleChange}
                placeholder="Enter your Custom Slug/Optional"
                className={`${inputStyle}`}
              />
            </label>
          </div>
        </div>
        <button className="btn bg-[#EEEEEE] hover:text-white text-base-200 dark:bg-base-300 dark:text-base-content dark:btn-square dark:hover:bg-[#EEEEEE] dark:hover:text-base-200">
          <LinkIcon className="h-6 w-6 " />
        </button>
      </form>
      {error.length !== 0 && (
        <div className="alert alert-error shadow-lg transition-all mx-auto p-3 flex justify-around mt-2 md:w-[30rem] duration-300">
          <p>{error}</p>
        </div>
      )}

      {isSpinning && (
        <div className="flex justify-around mt-2">
          <URLSpinner />
        </div>
      )}
      {isRes && (
        <div className=" flex flex-col text-base-200 dark:text-base-content">
          <p>Your shortened URLs:</p>
          {shortenedUrl.map((url, index) => (
            <div key={index}>
              <a
                href={url}
                className="link link-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url}
              </a>
              <div className="flex p-3 md:px-[25rem] text-center">
                <input
                  type="text"
                  name="shortenedUrl"
                  id = "shortenedUrl"
                  value={url}
                  readOnly
                  onClick={handleSelect}
                  className="bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full"
                />
                <div className=" flex gap-2">
                  <div className=" relative group pt-2">
                    <button onClick={handleCopy}>
                      <GoCopy className="text-base-100 text-[1.5rem] md:text-[2rem] dark:text-white" />
                    </button>
                    <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-sm px-2 py-1 rounded transition-opacity duration-200">
                      Copy URL
                    </span>
                  </div>
                  <div className=" relative group pt-2">
                    <button onClick={() => handleQRcode(url)}>
                      <BsQrCode className="text-base-100 text-[1rem] md:text-[1.5rem] dark:text-white" />
                    </button>
                    <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-sm px-2 py-1 rounded transition-opacity duration-200">
                      Generate QR code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CustomUrlForm;
