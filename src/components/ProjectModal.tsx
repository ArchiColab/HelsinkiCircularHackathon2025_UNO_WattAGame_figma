import { X, MapPin, Zap, Calendar, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  onClose: () => void;
}

export default function ProjectModal({ onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white border-4 border-gray-900 rounded-lg p-6 max-w-2xl w-full my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Helsinki Data Center Update</h2>
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2 border-2 border-gray-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Featured Image */}
        <div className="bg-gray-50 border-3 border-gray-900 rounded-lg p-8 mb-6 flex items-center justify-center">
          <div className="text-center">
            <Zap className="text-gray-900 mx-auto mb-4" size={64} />
            <p className="text-gray-700">Data Center Project Visualization</p>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-4 mb-6">
          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-900 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">
                  Pasila District, Helsinki - The new data center complex is being built in the heart of Helsinki's tech hub.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Calendar className="text-gray-900 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-gray-900 mb-1">Timeline</h3>
                <p className="text-gray-600">
                  <strong>Phase 1:</strong> Completed October 2024<br />
                  <strong>Phase 2:</strong> Expected completion Q2 2025<br />
                  <strong>Full Operation:</strong> Projected for late 2025
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="text-gray-900 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-gray-900 mb-1">Energy Impact</h3>
                <p className="text-gray-600">
                  The data center is expected to increase Helsinki's electricity demand by approximately <strong>8-12%</strong> when fully operational. However, it will utilize waste heat recovery to warm nearby residential areas, improving overall energy efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Zap className="text-gray-900 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-gray-900 mb-1">Sustainability Features</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>100% renewable energy powered</li>
                  <li>Advanced cooling systems reducing energy use by 40%</li>
                  <li>Waste heat recovery for district heating network</li>
                  <li>Smart grid integration to balance load</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gray-50 border-3 border-gray-900 rounded-lg p-4 mb-4">
          <h3 className="text-gray-900 mb-2">💡 What This Means for You</h3>
          <p className="text-gray-700">
            While the data center increases demand, every kWh you save helps balance Helsinki's grid! 
            Your energy-saving efforts are more important than ever.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg border-2 border-gray-900 transition-all"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}