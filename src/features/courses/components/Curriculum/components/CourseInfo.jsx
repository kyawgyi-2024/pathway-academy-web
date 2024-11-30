import { Button } from "@/components/ui/button";

const CourseInfo = () => {
  return (
    <div className="space-y-6">
      {/* <Image
        src="/placeholder.svg?height=300&width=400"
        alt="Course preview"
        width={400}
        height={300}
        className="rounded-lg object-cover w-full"
      /> */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-emerald-500">$18.00</div>
        <div className="flex gap-2">
          <Button variant="outline">Try for free</Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Apply Now
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">This course included</h3>
        <div className="space-y-2">
          {[
            { icon: "📚", label: "Lesson", value: "18" },
            { icon: "⏱️", label: "Duration", value: "2hr 15min" },
            { icon: "📊", label: "Level", value: "Beginner" },
            { icon: "🌐", label: "Language", value: "English" },
            { icon: "📜", label: "Certificate", value: "Yes" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
