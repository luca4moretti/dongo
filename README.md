
# Circle Payment Simulator

Circle Payment Simulator is a lightweight Node.js application that mimics a subset of the Circle Payments API for local development and testing.

## Features

- Invoice creation
- Simulated payment processing
- Webhook simulation
- Transaction history
- CSV export
- REST API
- Modular architecture
- Jest unit tests

## Project Structure

```
controllers/
models/
routes/
services/
storage/
tests/
utils/
docs/
```

## API

### Create invoice

```
POST /api/invoices
```

### Get invoices

```
GET /api/invoices
```

### Payment webhook

```
POST /api/webhooks/payment
```

### Refund webhook

```
POST /api/webhooks/refund
```

## Example Response

```json
{
  "id": "9db4...",
  "customer": "Alice",
  "amount": 120,
  "currency": "USDC",
  "status": "PAID"
}
```

## Future Improvements

- SQLite storage
- JWT authentication
- Docker support
- Swagger documentation
- Web dashboard
- Multi-currency support
- Scheduled webhook retries
- PostgreSQL backend

## License

MIT
