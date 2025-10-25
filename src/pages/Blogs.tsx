import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  created_at: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, slug, excerpt, cover_image, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (data) {
      setBlogs(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
          
          {loading ? (
            <p className="text-center text-muted-foreground">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts yet.</p>
          ) : (
            <div className="grid gap-6">
              {blogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.slug}`}>
                  <Card className="hover-lift cursor-pointer">
                    {blog.cover_image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={blog.cover_image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{blog.title}</CardTitle>
                      <CardDescription>
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    {blog.excerpt && (
                      <CardContent>
                        <p className="text-muted-foreground">{blog.excerpt}</p>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;