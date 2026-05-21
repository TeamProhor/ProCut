"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BasePage } from "@/app/base-page";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/blog/query";
import type { Post, MarblePostList } from "@/blog/types";
import { useTranslation } from "@/hooks/use-translation";

export default function BlogPage() {
	const { t } = useTranslation();
	const blog = t.static.blog;
	const [data, setData] = useState<MarblePostList | null>(null);

	useEffect(() => {
		getPosts().then(setData).catch(() => setData(null));
	}, []);

	if (!data || !data.posts || data.posts.length === 0) {
		return (
			<BasePage title={blog.title} description={blog.description}>
				<div className="py-12 text-center text-muted-foreground">
					{blog.noPosts}
				</div>
			</BasePage>
		);
	}

	return (
		<BasePage title={blog.title} description={blog.description}>
			<div className="flex flex-col">
				{data.posts.map((post) => (
					<div key={post.id} className="flex flex-col">
						<BlogPostItem post={post} />
						<Separator />
					</div>
				))}
			</div>
		</BasePage>
	);
}


function BlogPostItem({ post }: { post: Post }) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className="flex h-auto w-full items-center justify-between py-6 opacity-100 hover:opacity-75">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold">{post.title}</h2>
					<p className="text-muted-foreground">{post.description}</p>
				</div>
			</div>
		</Link>
	);
}
