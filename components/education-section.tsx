import { EducationItem } from "./education-item";
import { ItemGroup } from "./ui/item";

export default function EducationSection() {
  return (
    <ItemGroup className="max-w-2xl">
      {/* Keep a single line item so the education tab remains lightweight */}
      <EducationItem
        dateRange="2024 - 2028"
        degree="BS in Computer Science"
        grade="GPA: 4.0/4.0"
        institution="Northeastern University"
        location="Boston, MA"
      />
    </ItemGroup>
  );
}
