import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  content: string;
  cover_image: string | null;
  created_at: string;
}

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [slug]);

  const loadBlog = async () => {
    if (!slug) return;

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (data) {
      setBlog(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button onClick={() => navigate("/blogs")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" onClick={() => navigate("/blogs")} className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>

          {blog.cover_image && (
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          
          <p className="text-muted-foreground mb-8">
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-lg max-w-none">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogDetail;