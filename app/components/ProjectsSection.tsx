import Image from "next/image";

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{/* PROJECT 1 - Kiba Fishing Website */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/trout.webp`}
								alt={`Trout Swimming`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Kiba Fishing Website
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								Kibafish.com is a data resource focused on fish stocking
								information for Utah Lake, providing details about the types and
								quantities of fish that have been introduced into the lake.
							</p>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								Kibafish.com is built with Next.js, TailwindCSS, and PostgreSQL.
								There is an admin panel that allows for easy management of the
								data. Uploading and parsing data. As well as user tracking to
								assess adoption rates.
							</p>
							<div className="flex gap-2">
								<a
									target="_blank"
									href="https://kibafish.com"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
					{/* PROJECT 2 - Salt Flats Pyschiatry*/}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/saltflatspsychiatry1.jpg`}
								alt={`Project 1`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Salt Flats Psychiatry
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								Developed a modern Next.js website with advanced SEO
								optimization for a medical practice, featuring responsive design
								and fast loading times. Provided technical architecture
								consulting for their EHR system, including charting, scheduling,
								and patient management solutions to streamline their healthcare
								operations.
							</p>
							<div className="flex gap-2">
								<a
									target="_blank"
									href="https://saltflatspsychiatry.com"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
					{/* PROJECT 3 - Kiba Outdoors*/}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/code.jpg`}
								alt={`Project 1`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Project Title - Title here 1
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								A brief description of the project and the technologies used in
								its development.
							</p>
							<div className="flex gap-2">
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
					{/* PROJECT 4 - Utah Motorvehicle Accident Analyzer*/}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/code.jpg`}
								alt={`Project 1`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Project Title - Title here 1
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								A brief description of the project and the technologies used in
								its development.
							</p>
							<div className="flex gap-2">
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
					{/* PROJECT 5 - Utah Opiate Drug Prescription Analysis*/}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/code.jpg`}
								alt={`Project 1`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Project Title - Title here 1
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								A brief description of the project and the technologies used in
								its development.
							</p>
							<div className="flex gap-2">
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
					{/* PROJECT 6 - Work at Pluralsight*/}
					<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-100 relative">
							<Image
								src={`/code.jpg`}
								alt={`Project 1`}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
								Project Title - Title here 1
							</h3>
							<p className="text-sm sm:text-base text-gray-600 mb-4">
								A brief description of the project and the technologies used in
								its development.
							</p>
							<div className="flex gap-2">
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
