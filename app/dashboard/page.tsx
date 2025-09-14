"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProtectedRoute } from "@/components/protected-route";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Info } from "lucide-react";

function BrokerInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Broker info"
          className="ml-1 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <Info className="h-4 w-4 text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogTitle className="text-xl font-bold mb-4">
          Broker information
        </DialogTitle>
        <div className="space-y-4">
          <div>
            <div className="text-gray-500 text-sm font-medium">Company</div>
            <div className="text-black font-semibold">Faza Liquit</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-medium">
              Serial number
            </div>
            <div className="text-black font-bold text-base">26812</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-medium">
              Address registration
            </div>
            <div className="text-black font-semibold">
              Ukraina, Verkhnii Val St, 4A, Офіс 314A
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-medium">
              Office address
            </div>
            <div className="text-black font-semibold">Ukrain</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const tradingData = [
  {
    type: "XAU/USD",
    amount: -230,
    tradeType: "Sell",
    lot: 0.2,
    entry: 3626.0,
    close: 3638.0,
  },
  {
    type: "XAU/USD",
    amount: 55.19,
    tradeType: "Buy",
    lot: 0.12,
    entry: 3390.15,
    close: 3445.8,
  },
  {
    type: "BTC/USD",
    amount: 83.65,
    tradeType: "Sell",
    lot: 0.15,
    entry: 3410.85,
    close: 3355.1,
  },
  {
    type: "XAU/USD",
    amount: 53.75,
    tradeType: "Buy",
    lot: 0.1,
    entry: 3388.4,
    close: 3442.15,
  },
  {
    type: "BTC/USD",
    amount: 68.25,
    tradeType: "Buy",
    lot: 0.15,
    entry: 3375.0,
    close: 3420.5,
  },
  {
    type: "XAU/USD",
    amount: 59.15,
    tradeType: "Sell",
    lot: 11,
    entry: 3425.5,
    close: 3380.0,
  },
  {
    type: "BTC/USD",
    amount: 99.85,
    tradeType: "Sell",
    lot: 0.2,
    entry: 3400.1,
    close: 3350.25,
  },
  {
    type: "XAU/USD",
    amount: 98.64,
    tradeType: "Buy",
    lot: 0.18,
    entry: 3395.2,
    close: 3450.0,
  },
  {
    type: "BTC/USD",
    amount: -59.75,
    tradeType: "Sell",
    lot: 0.1,
    entry: 3360.5,
    close: 3420.25,
  },
  {
    type: "XAU/USD",
    amount: 93.65,
    tradeType: "Sell",
    lot: 0.17,
    entry: 3440.0,
    close: 3385.35,
  },
  {
    type: "BTC/USD",
    amount: -54.65,
    tradeType: "Buy",
    lot: 0.15,
    entry: 3430.15,
    close: 3405.5,
  },
  {
    type: "XAU/USD",
    amount: 75.6,
    tradeType: "Buy",
    lot: 0.12,
    entry: 3370.8,
    close: 3425.4,
  },
  {
    type: "BTC/USD",
    amount: 85.55,
    tradeType: "Buy",
    lot: 0.18,
    entry: 3355.2,
    close: 3402.75,
  },
  {
    type: "XAU/USD",
    amount: 88.65,
    tradeType: "Sell",
    lot: 0.1,
    entry: 3448.9,
    close: 3390.25,
  },
  {
    type: "BTC/USD",
    amount: 88.65,
    tradeType: "Sell",
    lot: 0.2,
    entry: 3448.9,
    close: 3390.25,
  },
  {
    type: "XAU/USD",
    amount: 64.55,
    tradeType: "Buy",
    lot: 0.15,
    entry: 3385.45,
    close: 3432.1,
  },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            My accounts
          </h1>

          <div className="flex gap-6 mb-8">
            {/* Balance Card */}
            <Card className="w-1/4 py-3 gap-0 h-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Balance
                  </CardTitle>
                  <BrokerInfoDialog />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  8,013{" "}
                  <span className="text-lg font-normal text-gray-500">USD</span>
                </div>
              </CardContent>
            </Card>

            {/* Add Account Button */}
            <Card className="h-24 flex items-center justify-center border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors cursor-not-allowed">
              <CardContent className="flex items-center justify-center p-8">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 px-2 py-2 cursor-not-allowed"
                >
                  <Plus className="h-4 w-4 cursor-not-allowed" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trading History Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trade type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lot
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Entry
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Close
                      </th>
                    </tr>
                  </thead>
                </table>
                <div style={{ maxHeight: "420px", overflowY: "auto" }}>
                  <table className="w-full">
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tradingData.map((trade, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {trade.type}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                              trade.amount > 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {trade.amount > 0 ? "+" : ""}
                            {trade.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trade.tradeType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trade.lot}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trade.entry}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trade.close}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
