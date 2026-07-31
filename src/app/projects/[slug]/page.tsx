import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/project-case-study/project-case-study-page";
import {
  getAllProjectCaseStudySlugs,
  getProjectCaseStudyBySlug,
} from "@/lib/project-case-studies";
import { siteConfig } from "@/lib/site";

type ProjectCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProjectCaseStudyBySlug(slug);

  if (!content) {
    return {};
  }

  const title = `${content.project.name} Case Study`;
  const description = content.project.summary;
  const url = `${siteConfig.url}/projects/${content.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ProjectCaseStudyRoute({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const content = getProjectCaseStudyBySlug(slug);

  if (!content) {
    notFound();
  }

  return <ProjectCaseStudyPage content={content} />;
}
