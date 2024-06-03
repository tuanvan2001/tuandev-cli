import crypto from 'crypto';

export const sign = (data, secretKey) => {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(data);
    const signature = hmac.digest('hex');
    return signature;
};

export const verify = (data, secretKey, signature) => {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(data);
    const newSignature = hmac.digest('hex');
    return newSignature === signature;
};
