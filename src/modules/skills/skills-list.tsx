import { SkillsItems } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";

interface SkillsListProps {
  skillsItems: SkillsItems[];
}

export default function SkillsList({ skillsItems }: SkillsListProps) {
  return (
    <>
      {skillsItems.map((item, index) => (
        <Badge key={item.name} variant="secondary" className="w-fit">
          {item.name}
        </Badge>
      ))}
    </>
  );
}

