import useSWR from "swr";
import {Header} from "./components/Header"
import { Footer } from "./components/Footer";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://dev.to/api/articles",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
<Header/>
    
    <div className="container mx-auto grid md:grid-cols-3">
      {data.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            description={blog.description}
            published_at={blog.published_at}
            tag={blog.tag_list[0]}
          />
        );
      })}
    </div>
    <Footer/>
    </div>
  );
}

const BlogCard = (props) => {
  const formatDate = new Date(props.published_at).toLocaleDateString()
  
  return (
    <div className="border border-solid w-fit p-4 rounded-lg">
      <div className="w-[360px]">
        <img src={props.image} width={360} height={280} />
        <p className="py-2 px-4 rounded-xl text-white bg-blue-400 w-fit">{props.tag}</p>
        <h2 className="text-lg">{props.title}</h2>
        <p>{props.description}</p>
        <p>{formatDate}</p>
      </div>
    </div>
    
  );
};
<Footer/>
