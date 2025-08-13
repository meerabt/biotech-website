// "use client";

// import GradientHeading from "@/components/gradient";
// import React, { useState } from "react";

// export default function ContactInfo() {
//   const [copied, setCopied] = useState(false);

//   const phoneNumber = "9986513101, 8050303012";
//   const email = "biotechservices.india@gmail.com";
//   const address = "3rd Block, HBR Layout, Bengaluru, Karnataka 560043";

//   const copyPhone = () => {
//     navigator.clipboard.writeText(phoneNumber).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const openGmail = () => {
//     window.open(
//       `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
//       "_blank"
//     );
//   };

//   return (
//     <div className="bg-white h-screen px-4 py-12">
//       <div className="max-w-3xl mx-auto shadow-md p-6 rounded-xl">
//         <div className="text-2xl font-bold text-center mb-4">
//           <GradientHeading useCustomGradient>Contact Us</GradientHeading>
//         </div>

//         <div className="text-center space-y-2 mb-6">
//           <p
//             onClick={copyPhone}
//             className="text-primarydark cursor-pointer hover:text-primarylight"
//             title="Click to copy phone number"
//           >
//             Phone: {phoneNumber}
//           </p>

//           {copied && (
//             <p className="text-primarylight text-sm">Phone number copied!</p>
//           )}

//           <p
//             onClick={openGmail}
//             className="text-primarydark cursor-pointer hover:text-primarylight"
//             title="Click to send an email"
//           >
//             Email: {email}
//           </p>

//           <p className="text-primarydark">{address}</p>
//         </div>

//         {/* ✅ Responsive Map */}
//         <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1190155248655!2d77.62816167454744!3d13.028092213638281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d8d55f6ca9%3A0xfc468176b42a2195!2sBiotech%20Technical%20Services!5e0!3m2!1sen!2sin!4v1754499147465!5m2!1sen!2sin"
//             className="absolute top-0 left-0 w-full h-full"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import GradientHeading from "@/components/gradient";
import React, { useState } from "react";

export default function ContactInfo() {
  const [copied, setCopied] = useState("");

  const phoneNumbers = ["9986513101", "8050303012"];
  const email = "biotechservices.india@gmail.com";
  const address = "3rd Block, HBR Layout, Bengaluru, Karnataka 560043";

  const copyPhone = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(number);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const openGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white h-screen px-4 py-12 sm:mb-10">
      <div className="max-w-3xl mx-auto shadow-md p-6 rounded-xl">
        <div className="text-2xl font-bold text-center mb-4">
          <GradientHeading useCustomGradient>Contact Us</GradientHeading>
        </div>

        <div className="text-center space-y-2 mb-6">
          {phoneNumbers.map((num, index) => (
            <div key={index}>
              <p
                onClick={() => copyPhone(num)}
                className="text-primarydark cursor-pointer hover:text-primarylight"
                title="Click to copy phone number"
              >
                Phone : {num}
              </p>
              {copied === num && (
                <p className="text-primarylight text-sm">
                  Phone number copied!
                </p>
              )}
            </div>
          ))}

          <p
            onClick={openGmail}
            className="text-primarydark cursor-pointer hover:text-primarylight"
            title="Click to send an email"
          >
            Email: {email}
          </p>

          <p className="text-primarydark">{address}</p>
        </div>

        <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1190155248655!2d77.62816167454744!3d13.028092213638281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d8d55f6ca9%3A0xfc468176b42a2195!2sBiotech%20Technical%20Services!5e0!3m2!1sen!2sin!4v1754499147465!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
