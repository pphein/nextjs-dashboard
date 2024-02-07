import Link from "next/link";
import { fetchBlogs, fetchCustomers } from "../lib/data";
import Blog from "./Blog";

export default async function Page() {
    const blogs = await fetchBlogs();
    return (
      <>
        <div className="container mx-auto px-4">
          <h1>Blogs</h1>
          <ul>
            {blogs?.map((blog) => (
              <li>
                <Link href={`/blogs/${blog.id}`}>
                  <Blog props={blog}/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  