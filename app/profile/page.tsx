"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Status Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Fully verified
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">3/3 steps completed</p>
              </CardContent>
            </Card>

            {/* Deposit Limit Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Deposit limit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Unlimited
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">Depending on payment method</p>
              </CardContent>
            </Card>
          </div>

          {/* Verification Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Verification steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Details */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Personal details</h3>
                  <p className="text-sm text-gray-600">d•••••••a0202@gmail.com / +998•••0202</p>
                </div>
              </div>

              {/* Verified Details 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Your verified details</h3>
                  <p className="text-sm text-gray-600">Mamajanova Dilorom</p>
                </div>
              </div>

              {/* Verified Details 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Your verified details</h3>
                  <p className="text-sm text-gray-600">Tashkent</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
