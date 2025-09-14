"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const transactions = [
  {
    id: "#2949274",
    type: "Withdrawal",
    date: "Sep 12, 2025",
  },
  {
    id: "#2949274",
    type: "Deposit",
    date: "Aug 26, 2025",
  },
]

export default function TransactionHistoryPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Transaction history</h1>

          {/* Year Filter */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">This year</span>
              </div>
            </CardContent>
          </Card>

          {/* Transaction List */}
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-blue-600 font-medium mb-1">Transaction id {transaction.id}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{transaction.type}</h3>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
