import { EducationItem } from "./education-item";
import { ItemGroup } from "./ui/item";

export default function EducationSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
        Education
      </h2>
      <ItemGroup className="max-w-2xl">
        <EducationItem
          dateRange="2024 - 2028"
          degree="BS in Computer Science"
          grade="GPA: 4.0/4.0"
          institution="Northeastern University"
          location="Boston, MA"
        />
      </ItemGroup>
    </section>
  );
}
