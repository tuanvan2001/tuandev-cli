import crypto from 'crypto';
import {config} from "dotenv";
config()
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.AES_SECRET,"utf8");


export const encrypt = (text) => {
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decrypt = (text) => {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};

(() => {
    const decryptedData = decrypt("d837f1ea89c38f306b848d6139dafcae:e13f64e7b5fb14bc17fd23cf69c6d5d2");
    console.log(`Decrypted Data: ${decryptedData}`);
})();