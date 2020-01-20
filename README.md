# template-nats-consumer

This is a template NATS consumer. This template listens for messages and simple writes them to STDOUT.

## Environment Variables

* `NATS_URL`: The NATS url. Default: `nats://localhost:4222`
* `NATS_USERNAME`: The NATS username. Default: `<omitted>`
* `NATS_PASSWORD`: The NATS password. Default: `<omitted>`
* `NATS_TLS`: Do you want to use TLS? Default: `false`
* `NATS_ROUTE`: The NATS route to subscribe to. Default: `>`
