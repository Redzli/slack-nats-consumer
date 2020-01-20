export const NATS_URL: string = process.env.NATS_URL || 'nats://localhost:4222';
export const NATS_TLS: boolean = (process.env.NATS_TLS == 'true') || false;
export const NATS_USERNAME: string = process.env.NATS_USERNAME;
export const NATS_PASSWORD: string = process.env.NATS_PASSWORD;
export const NATS_SUBJECT: string = process.env.NATS_SUBJECT || '>';
