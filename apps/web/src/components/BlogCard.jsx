import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
          {post.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link to={`/blog/${post.slug}`} className="w-full">
          <Button variant="outline" className="w-full transition-all duration-200 active:scale-[0.98]">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
