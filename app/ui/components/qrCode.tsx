/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { GoCopy } from "react-icons/go";

import { shortenUrl } from "@/app/lib/api";
import { QRcodeFormData } from "@/app/types";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";


const UrlForm = () => {

    const[formData, setFormData] = useState<QRcodeFormData>({
        origUrl: "",
        qrCode: [],
        isRes: false,
        error: "",
    })

    const {origUrl, qrCode, isRes, error} = formData
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("clicked")

        // const data: any = await shortenUrl(origUrl)

        // if ( !data.statusCode || data.statusCode !== 201 ) {
        //   console.log("Shortening URL unsuccessful:", data);
        //   setFormData({ ...formData, error: data.message });
        //   return;
        // }
        // console.log("QRcode successful create:", data);
        // const { shortUrl } = data.data
      
        // setFormData(({
        //   ...formData,
        //   isRes: true,
        //   qrCode: [...formData.qrCode, shortUrl],  // Append new URL
        //   error: "",  // Clear any previous errors if necessary
        // }));
        // console.log(formData)
        
    }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
        
    }

    const handleSelect = (e: React.MouseEvent<HTMLInputElement>) => {
      (e.target as HTMLInputElement).select()
    }

    const handleCopy = () => {
      const copyText = (document.getElementById("url") as HTMLInputElement)?.value || "";
      navigator.clipboard.writeText(copyText).then(() => {
        alert("URL copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    };
        
  return (
    <div>
        <form id="urlForm" onSubmit={handleSubmit}className="input-group">
              <label htmlFor="url">
                <input
                  type="text"
                  name="origUrl"
                  id="url"
                  value={origUrl}
                  onChange={handleChange}
                  placeholder="Enter your long URL"
                  className=" bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full"
                />
                </label>
                <button  className="btn bg-[#EEEEEE] hover:text-white text-base-200 dark:bg-base-300 dark:text-base-content dark:btn-square">
     <LinkIcon className="h-6 w-6 " />
     </button> 
        </form>
        {error.length !== 0 && <div className="alert alert-error shadow-lg transition-all duration-300"  > {error} </div>}
        {isRes && <div className=" flex flex-col text-base-200 dark:text-base-content">
  <p>Your shortened URLs:</p>
  {qrCode.map((qr, index)=>(

<div key={index}>
<a href={qr} className="link link-success" target="_blank" rel="noopener noreferrer">
{qr}
</a>
<div className="flex">
<input
type="text"
name="qrCode"
value={qr}
readOnly
onClick={handleSelect}
className="bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full"
/>
<button onClick={handleCopy}><GoCopy className="text-base-100 test-[1rem] md:text-[2rem]"/></button>
</div>
</div>
  ))}
  
</div>}
</div>
  )
}

export default UrlForm
