import { Lock } from "lucide-react"

export function PermissionDenied() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Lock className="h-8 w-8 text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">You do not have permission</h2>
      <p className="text-gray-600">to view this section.</p>
    </div>
  )
}
