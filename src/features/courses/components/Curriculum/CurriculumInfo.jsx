import { Clock, BarChart, Globe, Award } from "lucide-react";

export const CurriculumInfo = ({
  lessons,
  duration,
  level,
  language,
  certificate,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">This course included</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Lesson</span>
          </div>
          <span className="font-medium">{lessons}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Duration</span>
          </div>
          <span className="font-medium">{duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Level</span>
          </div>
          <span className="font-medium">{level}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Language</span>
          </div>
          <span className="font-medium">{language}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Certificate</span>
          </div>
          <span className="font-medium">{certificate}</span>
        </div>
      </div>
    </div>
  );
};

export default CurriculumInfo;
