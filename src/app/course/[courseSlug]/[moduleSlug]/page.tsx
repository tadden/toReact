import { getCourseBySlug } from "@/lib/data";
import { ModuleContent } from "@/components/features/course/ModuleContent";
import { notFound } from "next/navigation";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ courseSlug: string; moduleSlug: string }>;
}) {
  const { courseSlug, moduleSlug } = await params;
  const course = await getCourseBySlug(courseSlug);
  const module = course?.modules.find((m: any) => m.slug === moduleSlug);

  if (!course || !module) {
    return notFound();
  }

  // Calculate next module slug
  const currentIndex = course.modules.findIndex((m: any) => m.id === module.id);
  const nextModule = course.modules[currentIndex + 1];

  return (
    <ModuleContent
      course={course}
      module={module}
      nextModuleSlug={nextModule?.slug}
    />
  );
}
