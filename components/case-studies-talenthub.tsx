import Image from "next/image";
import Link from "next/link";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
// import PostItem from "@/app/(default)/blog/post-item";
// import { useCategoryProvider } from "@/app/(default)/blog/category-provider";

// Example of metadata for case studies
const blogPosts = [
  {
    slug: "post-1",
    metadata: {
      title: "Efficient Recruitment for Companies with Rapid Scaling Needs",
      category: "Recruitment",
      image: "/images/post-thumb-01.jpg",
      author: "Mark Zuch",
      authorImg: "/images/post-author-01.jpg",
      authorRole: "Content Manager",
      authorLink: "#",
    },
  },
  {
    slug: "post-2",
    metadata: {
      title: "Adapting Hiring Strategies to Meet Evolving Workforce Needs",
      category: "Recruitment",
      image: "/images/post-thumb-01.jpg",
      author: "Mark Zuch",
      authorImg: "/images/post-author-01.jpg",
      authorRole: "Content Manager",
      authorLink: "#",
    },
  },
  {
    slug: "post-3",
    metadata: {
      title: "Scalable Recruitment Strategies for Fast-Growing Teams",
      category: "Recruitment",
      image: "/images/post-thumb-01.jpg",
      author: "Mark Zuch",
      authorImg: "/images/post-author-01.jpg",
      authorRole: "Content Manager",
      authorLink: "#",
    },
  },
];

export default function FeatureBlogs() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Case Studies
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Explore our success stories
            </h2>
            {/* <p className="text-lg text-indigo-200/65">
              Access curated blogs, case studies, testimonials, and white papers
              showcasing business success, innovation, and emerging market
              trends.
            </p> */}
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Case Studies */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-2xl"
              >
                {/* Post Thumbnail */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative mb-6 block overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50"
                  tabIndex={-1}
                >
                  <Image
                    className="aspect-101/64 w-full object-cover opacity-70 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    width={347}
                    height={220}
                    layout="responsive"
                  />
                </Link>

                {/* Post Content */}
                <div className="mb-3">
                  <ul className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <li>
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {post.metadata.category}
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 className="mb-2 font-inter text-lg font-semibold line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-200 transition hover:text-white"
                  >
                    {post.metadata.title}
                  </Link>
                </h3>
                <footer className="flex items-center gap-3">
                  <Image
                    className="inline-flex shrink-0 rounded-full"
                    src={post.metadata.authorImg}
                    width={28}
                    height={28}
                    alt={post.metadata.author}
                  />
                  <div className="text-sm font-medium text-gray-200">
                    <span>{post.metadata.author}</span>
                    <span className="text-gray-700"> - </span>
                    <a
                      href={post.metadata.authorLink}
                      className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                    >
                      {post.metadata.authorRole}
                    </a>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
