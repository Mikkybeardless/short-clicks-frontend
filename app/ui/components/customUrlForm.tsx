/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { GoCopy } from "react-icons/go";

import { customUrl } from "@/app/lib/api";
import { CustomUrlFormData } from "@/app/types";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";


const CustomUrlForm = () => {

    const[formData, setFormData] = useState<CustomUrlFormData>({
        origUrl: "",
        customDomain: "",
        customSlug: "",
        shortenedUrl: [],
        isRes: false,
        error: "",
    })

    const {origUrl, shortenedUrl,  customDomain, customSlug, isRes, error} = formData
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("clicked")
        const token: string | null = localStorage.getItem('token');

        const data: any = await customUrl(token, origUrl, customDomain, customSlug)

        if ( !data.statusCode || data.statusCode !== 201 ) {
          console.log("Shortening URL unsuccessful:", data);
          setFormData({ ...formData, error: data.message });
          return;
        }
        console.log("URL successful shortened:", data);
        const { shortUrl } = data.data
      
        setFormData(({
          ...formData,
          isRes: true,
          shortenedUrl: [...formData.shortenedUrl, shortUrl],  // Append new URL
          error: "",  // Clear any previous errors if necessary
        }));
        console.log(formData)
        
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
        
   const inputStyle = "bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full";
  return (
    <>
        <form id="urlForm" onSubmit={handleSubmit}className="input-group ">
            <div className="p-3 md:px-[25rem] text-center flex flex-col gap-2">
              <div><label htmlFor="url">
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
                  placeholder="Enter your Custom Slug Optional"
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
                  placeholder="Enter your Custom Slug Optional"
                  className={`${inputStyle}`}
                />
                </label>
                </div>
                </div>
    <button  className="btn bg-[#EEEEEE] hover:text-white text-base-200 dark:bg-base-300 dark:text-base-content dark:btn-square dark:hover:bg-[#EEEEEE] dark:hover:text-base-200">
     <LinkIcon className="h-6 w-6 " />
     </button> 
        </form>
        {error.length !== 0 && <div className="alert alert-error shadow-lg transition-all duration-300"> {error} </div>}
        {isRes && <div className=" flex flex-col text-base-200 dark:text-base-content">
  <p>Your shortened URLs:</p>
  {shortenedUrl.map((url, index)=>(

<div key={index}>
<a href={url} className="link link-success" target="_blank" rel="noopener noreferrer">
{url}
</a>
<div className="flex p-3 md:px-[25rem] text-center">
<input
type="text"
name="shortenedUrl"
value={url}
readOnly
onClick={handleSelect}
className="bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full"
/>
<button onClick={handleCopy}><GoCopy className="text-base-100 test-[1rem] md:text-[2rem]"/></button>
</div>
</div>
  ))}
  
</div>}
</>
  )
}

export default CustomUrlForm
