import { getCourseWithTargetModule } from "@/lib/data";
import { ModuleContent } from "@/components/features/course/ModuleContent";
import { notFound } from "next/navigation";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ courseSlug: string; moduleSlug: string }>;
}) {
  const { courseSlug, moduleSlug } = await params;
  // Use Optimized Fetcher
  const course = (await getCourseWithTargetModule(
    courseSlug,
    moduleSlug
  )) as any; // Cast to any because we know the shape matches what's needed, even if specific props are missing on inactive modules
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
