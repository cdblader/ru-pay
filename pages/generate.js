import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <div className={styles.main}>
          <div className={styles.card}>Gerar QR Code</div>

      {qrCodeValue != "" && (
        <QRCode value={qrCodeValue} className={styles.containerColumn} />
      )}
      <div><input
        className={styles.card}
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      /></div>
    </div>
  );
}

export default Generate;