import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import type { PostProps } from "./types/PostProps";

export function Post({
  title,
  content,
  date,
  category,
  imageUrl,
  readTime,
}: PostProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge
            variant="secondary"
            className="bg-[#63B3ED]/10 text-[#63B3ED] hover:bg-[#63B3ED]/20"
          >
            {category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-[#63B3ED] transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
      </CardContent>
    </Card>
  );
}
