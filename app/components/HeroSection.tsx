"use client";

import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image
						src="/portrait.jpg"
						alt="Profile Picture"
						width={300}
						height={300}
						className="rounded-full mx-auto border-4 border-gray-50 shadow-lg"
					/>
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
					Porter Loveless
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
					Full Stack Software Engineer
				</p>
				<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I craft full-stack web applications that solve real-world problems
					with modern technologies. Specializing in React, Next.js, and
					data-driven solutions, I transform complex requirements into intuitive
					user experiences that make a meaningful impact.
				</p>
			</div>
		</section>
	);
}
