import { Card, CardContent } from "@/components/ui/card";

interface AnnouncementCardProps {
  title: string;
  date: string;
  content: string;
  badge: string;
}

const badgeColorMap: Record<string, string> = {
  Libur: "bg-yellow-100 text-yellow-800",
  PPDB: "bg-blue-100 text-blue-700",
  Lomba: "bg-green-100 text-green-700",
};

export function AnnouncementCard({ title, date, content, badge }: AnnouncementCardProps) {
  const badgeColor = badgeColorMap[badge] || "bg-gray-100 text-gray-700";

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full">
      <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
        <div>
          <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${badgeColor}`}>
            {badge}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
