import React, { useState } from "react";
import QRcode from "react-qr-code";
const Qrcode = () => {
  const [Keywords, setKeywords] = useState("");
  const [Qrcode, setQrcode] = useState("");

  function Generate() {
    setQrcode(Keywords);
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          value={Keywords}
          name="qr-code"
          onChange={(e) => {
            setKeywords(e.target.value);
          }}
          type="text"
          placeholder="Enter Keywords"
        />
        <button
          disabled={Keywords && Keywords.trim() !== "" ? false : true}
          onClick={Generate}
        >
          Generate QR
        </button>
      </div>
      <div>
        <QRcode id="qr-code-value" value={Qrcode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default Qrcode;
