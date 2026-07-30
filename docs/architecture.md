# Architecture

```
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ├── Invoice Service
   ├── Payment Service
   ├── Webhook Simulator
   └── Transaction Logger
   │
   ▼
Models
   │
   ▼
Storage
```

## Components

### Invoice Service

Creates and manages invoices.

### Payment Service

Processes simulated payments and refunds.

### Webhook Simulator

Generates webhook events similar to Circle API.

### Transaction Logger

Stores transaction history.

### CSV Exporter

Exports transaction history into CSV format.
