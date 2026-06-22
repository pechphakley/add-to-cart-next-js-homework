


import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  {
    "id": "728ed52f",
    "amount": 100,
    "status": "pending",
    "email": "m@example.com"
  },
  {
    "id": "489e1c2a",
    "amount": 250,
    "status": "success",
    "email": "john@example.com"
  },
  {
    "id": "7f3d9b11",
    "amount": 75,
    "status": "failed",
    "email": "jane@example.com"
  },
  {
    "id": "a12bc345",
    "amount": 500,
    "status": "pending",
    "email": "alex@example.com"
  },
  {
    "id": "d89ef012",
    "amount": 320,
    "status": "success",
    "email": "sara@example.com"
  },
  {
    "id": "c4567de8",
    "amount": 150,
    "status": "failed",
    "email": "mike@example.com"
  },
  {
    "id": "f9012abc",
    "amount": 90,
    "status": "pending",
    "email": "emma@example.com"
  },
  {
    "id": "1234abcd",
    "amount": 420,
    "status": "success",
    "email": "david@example.com"
  },
  {
    "id": "5678efgh",
    "amount": 60,
    "status": "failed",
    "email": "olivia@example.com"
  },
  {
    "id": "9xyz1234",
    "amount": 800,
    "status": "pending",
    "email": "noah@example.com"
  }
]
}

export default async function PaymentPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}