import {connect, NatsConnectionOptions, Payload} from 'ts-nats';
import {NATS_URL, NATS_USERNAME, NATS_PASSWORD, NATS_TLS, NATS_SUBJECT} from './config';

(async () => {
  let nc;

  try {
    if (NATS_USERNAME == undefined || NATS_PASSWORD == undefined) {
      nc = await connect(
        {
          url: NATS_URL,
          payload: Payload.JSON,
          tls: NATS_TLS
        }
      );
    } else {
      nc = await connect(
        {
          url: NATS_URL,
          payload: Payload.JSON,
          tls: NATS_TLS,
          user: NATS_USERNAME,
          pass: NATS_PASSWORD
        }
      );
    }

    nc.subscribe(NATS_SUBJECT, (err, msg) => {
      if(err) {
        console.log(err);
      } else {
        console.log('message received on', msg.subject, ":", msg.data);
      }
    });
  } catch (err) {
    console.log(err);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
